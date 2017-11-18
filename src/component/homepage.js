import React from 'react';
import Navbar from '../component/navbar';
import {connect} from 'react-redux'

class Homepage extends React.Component{
  render(){
    return(
      <div>
        <h1>This is main page.. Push data to store... you can read it the HomepageUpdate</h1>
        <input type="text" ref="name"/>
        <button onClick={() => this.props.register(this)}>update state</button>
        {/* {this.props.user.name} */}
      </div>);
    }
}
const stateToprops=(state)=>{
  return {
    user:state.userReducer
  }
}
const dispatchToProps=(dispatch)=>{
  return{
    register:(thisRef)=>{
      console.log("fun called:",thisRef.refs.name.value, ' thisRef.props:',thisRef.props);
      thisRef.props.user.push(thisRef.refs.name.value);
      dispatch({
        type:'NEW_USER_REG',
        payload: thisRef.props.user
      });
      thisRef.refs.name.value = '';
    }
  }
}
export default connect(stateToprops,dispatchToProps)(Homepage);

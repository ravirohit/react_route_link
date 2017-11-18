import React from 'react';
import {connect} from 'react-redux';

class HomepageUpdate extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello, Reading data from store... pushed from homepage.js</h1>
                
                {this.props.user.join(' -> ')}
            </div>
        )
    }
}

const stateToProps=(state)=>{
    return{
        user:state.userReducer
    }
}
const dispatchToProps=(dispatch)=>{
    return{
        addExpense:(expense)=>{
            //dispatch({type:"ADD_EXPENSE",payload:expense})
        }
    }
}

export default connect(stateToProps,dispatchToProps)(HomepageUpdate);

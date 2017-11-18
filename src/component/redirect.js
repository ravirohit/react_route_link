import React from 'react';
import  Navbar  from '../component/navbar';
import { connect } from 'react-redux'

export default class Redirect extends React.Component{
  redirect = (str) => {
    if(str === 'h') {
      this.props.history.push('/homepage');
    } else if (str === 'l') {
      this.props.history.push('/homepageupdate');
    } else {
      console.log('called to the wrong URL');
      this.props.history.push('/random');
    }
  }
render(){
            // if (a) {
            //     a = false;
            //     return <Redirect to="/homepage" />; // redirect to the register page
            // } else {
  return (
    <div>
      <h1> Redirect example </h1>                
      <button onClick={ () => this.redirect('h') } style = {{marginRight:'10px'}}>Redirect_Home</button> 
      <button onClick={ () => this.redirect('l') } style = {{marginRight:'10px'}}>Redirect_homepageupdate</button>
      <button onClick={ this.redirect } style = {{marginRight:'10px'}}>Redirect_Random</button>
    </div>
  )
    // }
  }
}
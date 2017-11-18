import React from 'react'

let a = false;
export default class Login extends React.Component{

  login = () => {
    console.log("login button clicked");
    console.log("this.props:",this.props);    
  }
 render(){
   return (
    <div style={{position:"absolute",left:250,top:75}}>
        <div> User Name : </div><div><input type="text"/></div>
        <div> Password : </div><div><input type="password"/></div> 
        <hr/>
        <button onClick={this.login}>Login</button> 
    </div>
  );
        
  }

}
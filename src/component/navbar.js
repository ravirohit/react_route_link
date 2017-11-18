import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component{
  render(){
    let styles={width:10};
      return(    
        <div >
          {/* <li className="active"><Link to="/">Home</Link></li> */}
          <li><Link to="/homepage">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/homepageupdate">updateOfHomePage</Link></li>
          <li><Link to="/redirect">Redirect</Link></li> 
          <li><Link to="/not_valid">not Valid URL</Link></li>                            
        </div>
      );
  }
}
 


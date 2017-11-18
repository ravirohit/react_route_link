import React from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
  } from 'react-router-dom';
import Navbar from '../component/navbar';
import Homepage from '../component/Homepage';
import HomepageUpdate from '../component/HomepageUpdate';
import Login from '../component/login';
import Redirect from '../component/redirect';
import Random from '../component/random';


export default class App extends React.Component{
    
        render(){
            return(
                <div>                   
                    <Router>
                        <div>
                            <div className="row" style={{marginTop:50}}>
                                    <div className="col-sm-3"></div>
                                    <div className="col-sm-6">
                                        <Navbar/>
                                        <hr/>
                                    </div>
                                    <div className="col-sm-3"></div>
                            </div>                           
                            <div className="row">  
                                <div className="col-sm-3" style={{}}></div>
                                <div className="col-sm-6">
                                    <Switch>                            
                                            <Route  exact path='/homepage' component={Homepage} />  
                                            <Route exact path='/homepageupdate' component={HomepageUpdate} />
                                            <Route exact path='/login' component={Login} />
                                            <Route exact path='/redirect' component={Redirect} />
                                            <Route component={Random} />                                    </Switch>
                                </div>
                                <div className="col-sm-3"></div>
                            </div>
                        </div>
                    </Router>                               
                </div>
                
            );
        }
}


-> To the application we have to run: 
npm install
npm start
and open URL in the browser after application started: 'http://localhost:1234/homepage'
------------------------- NOTE --------------------------------------
->React Router has been broken into three packages: 
react-router, 
react-router-dom, and for React > V4 
react-router-native

-> Things need to implement Router in the application:
---> i am using here -> 
     "npm install --save react-router-dom"       -:  React > V4 
---> To change the URL we can use either of the following techniques as per the requirements:
     a) using <Link>  Note: never use <a> anchor as it refresh the whole page and create prblm in react-redux store concept
        <Link to="/homepage">Home</Link>
     b) using <Redirect to='/path'>
     c) using 'this.props.history.push('/path');'
---> To direct the React, for which URL what components need to be shown on the UI, we use 
     <Route exact path='/path' component={comp_name} />
Note: as per my understanding, <Route> and <Link> always have to be inside the <Router> and <Router> tag can have only one immediate child tag
-> <Router> : it expose application to the browser, or interface of the react application and browser URL.
   it is of following type:
   a) <BrowserRouter>: should be used when you have a server that will handle dynamic requests
   b) <HashRouter>: should be used for static websites(can only respond to requests for files that it knows about)
   c) <NativeRouter>:
   d) <MemoryRouter>:

   ------------------------- History -------------------------------
-> Each router creates a history object, which it uses to keep track of the current location[1] and re-render the website whenever that changes.
Ex: for react-router < V4
<Router history={ browserHistory }>
      <Route path="/" component={ Index } />
</Router>, 
Ex: for React-Router-dom > V4
   <BrowserRouter>
     <Switch>                            
		<Route  exact path='/homepage' component={Homepage} />  
		<Route exact path='/homepageupdate' component={HomepageUpdate} />
		<Route exact path='/login' component={Login} />
		<Route exact path='/redirect' component={Redirect} />
		<Route component={Random} />              // for Invlid URL or random URL                                 
     </Switch>
   </BrowserRouter>



import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './container/Home/Home'
import Payment from "./test/Payment"
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import NotFound from './components/NotFound/NotFound';
import { auth, db } from './Config/Config'

class App extends Component  {

  state = {
    currentUser: null
  }  

  componentDidMount() {
    auth.onAuthStateChanged(user => {   //This returns the current user if any
      if(user){
        db.collection('users').doc(user.uid).get().then(snapshot => {
          this.setState({
            currentUser: snapshot.data().FullName
          })
        })
      } else {
        console.log('User is not signed in to retrive  username')
      }
    }) 
  }

render() {
  return (
   <Router>
     <Switch>
       <Route exact path='/' component={() => <Home
        currentUser={this.state.currentUser}
       />} />
       <Route path='/signup' component={Signup} />
       <Route path='/login' component={Login} />
       <Route component={NotFound} />
     </Switch>
   </Router>
  // <Payment />
  );
};
  
}

export default App;

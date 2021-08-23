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
    currentUser: null,
    todos: []
  }  

  componentDidMount() {
    // Getting current user
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

    // Getting todos for current user
    auth.onAuthStateChanged(user=>{
      if(user){
        const todoList = this.state.todos;
        db.collection('todos of ' + user.uid).onSnapshot(snapshot=>{
          let changes = snapshot.docChanges();
          changes.forEach(change=>{
            if(change.type==='added'){
              todoList.push({
                id: change.doc.id,
                Todo: change.doc.data().Todo
              })
            }
            if(change.type==='removed'){
              // console.log(change.type);
              for(var i = 0; i < todoList.length; i++){
                if(todoList[i].id === change.doc.id) {
                  todoList.splice(i, 1);
                }
              }
            }
            this.setState({
              todos: todoList
            })
          })
        })
      }else{
        console.log('User is not signed in to retrive todos');
      }
    })

  }
  
  deleteTodo = (id) => {
    // console.log(id);
    auth.onAuthStateChanged(user => {
      if(user) {
         db.collection('todos of ' + user.uid).doc(id).delete();
      } else {
        console.log('User is not signed in to delete todos');
      }
    })
  }

render() {
  //console.log(this.state.todos);
  return (
   <Router>
     <Switch>
       <Route exact path='/' component={() => <Home
        currentUser={this.state.currentUser}
        todos={this.state.todos}
        deleteTodo={this.deleteTodo}
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

import React from 'react'
import './App.scss';

import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Chat from './components/Chat/Chat'

import ProtectedRoute from './components/Router/ProtectedRoute'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
        <div className="App">
            <Switch>
              <ProtectedRoute exact path='/' component={Chat}></ProtectedRoute>
              <Route path='/login' component={Login}></Route>
              <Route path='/register' component={Register}></Route>
              <Route render={() => <h1>404 page not found</h1>}/>
            </Switch>
        </div>
    </Router>
  );
}

export default App;

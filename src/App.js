// import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";
import Calendar from "./pages/Calendar";
import Day from "./pages/Day"
import User from "./pages/User"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import Notes from "./pages/Notes"

import NavBar from "./navBar/NavBar"

//import API from "./adapters/API"

import { Route, Switch } from 'react-router-dom';

function App() {  

  const [user, setUser] = useState(null)
  const [month, setMonth] = useState(0)
  const [loaded, setLoaded] = useState(false)



  useEffect(() => { 
    fetch(`http://localhost:3000/users/1`)
    .then(resp => resp.json())
    .then(data => {
      setUser(data)
      setLoaded(true)
    })
  }, [])

  

  if (loaded === false) {
    return <h2> LOADING </h2>
  } else {
    return (
      <div>
      <NavBar user={user} setUser={setUser}/>
      Diary App 

      <Switch>

        <Route exact path="/days/:id">
            <Day user={user} setUser={setUser}/>
        </Route>

        <Route exact path="/users/:id">
            <User user={user} setUser={setUser}/>
        </Route>

        <Route exact path="/signup">
            <SignUp setUser={setUser}/>
        </Route>

        <Route exact path="/calendar">
            <Calendar  month={month} setMonth={setMonth} user={user} setUser={setUser}/>
        </Route>

        <Route exact path="/login">
          <LoginPage setUser={setUser} user={User}/>
        </Route>

        <Route>
          <Notes user={user} setUser={setUser}/>
        </Route>

        <Route exact path="/">
            <Home  user={user} />
        </Route>

      </Switch>
      

      <br></br><br></br>
      </div>
    );
  }
}

export default App;

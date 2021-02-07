// import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";
import Calendar from "./pages/Calendar";
import Day from "./pages/Day"
import User from "./pages/User"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"

import NavBar from "./navBar/NavBar"



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
      <NavBar user={user}/>
      Diary App 

      <Switch>

        <Route exact path="/days/:id">
            <Day user={user} setUser={setUser}/>
        </Route>

        <Route exact path="/users/:id">
            <User user={user} setUser={setUser}/>
        </Route>

        <Route exact path="/signup">
            <SignUp/>
        </Route>

        <Route exact path="/calendar">
            <Calendar days ={user.days} month={month} setMonth={setMonth} user={user} setUser={setUser}/>
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

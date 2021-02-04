// import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";
import Calendar from "./pages/Calendar";
import Day from "./pages/Day"
import User from "./pages/User"

import { Route, Switch } from 'react-router-dom';

function App() {

  const [user, setUser] = useState([])
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

  //console.log(user.id)

  if (loaded === false) {
    return <h2> LOADING </h2>
  } else {
    return (
      <div>
        <nav>Nav Here </nav>
        Diary App 

      <Switch>

        <Route exact path="/days/:id">
            <Day user={user}/>
        </Route>

        <Route exact path="/users/:id">
            <User user={user}/>
        </Route>

        <Route exact path="/">
            <Calendar days={user.days} month={month}/>
        </Route>

      </Switch>
      

      <br></br><br></br>
      </div>
    );
  }
}

export default App;

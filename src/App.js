// import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";
import Calendar from "./pages/Calendar";
import Day from "./pages/Day"

import { Route, Switch } from 'react-router-dom';

function App() {

  const [user, setUser] = useState([])
  const [month, setMonth] = useState(0)


  useEffect(() => { 
    fetch(`http://localhost:3000/users/1`)
    .then(resp => resp.json())
    .then(data => {
      setUser(data)
    })
  }, [])

  //console.log(user.id)

  return (
    <div>
      <nav>Nav Here </nav>
      Diary App 

    <Switch>

      <Route exact path="/days/:id">
          <Day />
      </Route>

      <Route exact path="/">
          <Calendar days={user.days} month={month}/>
      </Route>

    </Switch>
    

    <br></br><br></br>
    </div>
  );
}

export default App;

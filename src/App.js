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
import NoteShow from "./pages/NoteShow"
import Search from "./pages/Search"
import NavBar from "./navBar/NavBar"

//import API from "./adapters/API"
// import 'bootstrap/dist/css/bootstrap.min.css'

import { Route, Switch } from 'react-router-dom';

import './css/home.css';



function App() {  

  const [user, setUser] = useState(null)
  const [month, setMonth] = useState(0)
  const [loaded, setLoaded] = useState(false)
  //const [redirect, setRedirect] = useState(false)
  // const [searchTerm, setSearchTerm] = useState("")

  // useEffect(() => { 
  //   fetch(`http://localhost:3000/autologin`)
  //   .then(resp => resp.json())
  //   .then(data => {
  //     setUser(data)
  //     setLoaded(true)
  //     //setNavBarSearch("")
  //   })
  // }, [])

  // function componentDidMount(){
  //   document.title = 'test';
  // }
  

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((user) => {setUser(user)
          setLoaded(true)
          console.log(user)}
          );
    }
    
  }, []);

  console.log(user)

  if (user === null) {
    return (
      <div className="background">
        {/* <NavBar user={user} setUser={setUser} />
    
        <Switch>
        <Route exact path="/login">
          <LoginPage setUser={setUser} user={User}/>
        </Route>

        <Route path="/">
            <Home  user={user} />
        </Route>
        </Switch> */}
      <NavBar user={user} setUser={setUser} />

      <Switch>
        <Route exact path="/login">
          <LoginPage setUser={setUser} user={User}/>
        </Route>

        <Route exact path="/signup">
            <SignUp setUser={setUser} user={user}/>
        </Route>

        <Route path="/">
            <Home  user={user} />
        </Route>



      </Switch>

      <div class="wrapper">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    {/* <div id="stars3"></div> */}
      </div>

      </div>
    )
      
  } else {
    return (
      <div className="background">
      <NavBar user={user} setUser={setUser} 
      // redirect={redirect} setRedirect={setRedirect} 
      // setSearchTerm={setSearchTerm}
      //navBarSearch={navBarSearch} setNavBarSearch={setNavBarSearch}
      />

      

      <Switch>

        <Route exact path="/days/:id">
            <Day user={user} setUser={setUser}/>
        </Route>

        <Route exact path="/users/:id">
            <User user={user} setUser={setUser}/>
        </Route>



        <Route exact path="/calendar">
            <Calendar  month={month} setMonth={setMonth} user={user} setUser={setUser}/>
        </Route>

        {/* <Route exact path="/login">
          <LoginPage setUser={setUser} user={User}/>
        </Route> */}

        <Route exact path="/notes/:id">
          <NoteShow user={user} setUser={setUser} />
        </Route>

        <Route exact path="/notes">
          <Notes user={user} setUser={setUser}/>
        </Route>

        <Route exact path="/search">
          <Search user={user}
          />
        </Route>
        
        <Route exact path="/login">
          <LoginPage setUser={setUser} user={User}/>
        </Route>

        <Route exact path="/signup">
            <SignUp setUser={setUser}/>
        </Route>

        <Route path="/">
            <Home  user={user}  title="test"/>
        </Route>

      </Switch>
      

      
      </div>
    );
  }
}

export default App;

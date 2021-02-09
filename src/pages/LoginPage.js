import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LoginPage ({user, setUser}){

    const [users, setUsers] = useState(null)
    const [isLogin, setIsLogin] = useState(false)
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    function handleFormChange(event){
        // console.log()
        setFormData({...formData,
            [event.target.name]: event.target.value
        })

    }

    useEffect(() => { 
        fetch(`http://localhost:3000/users/`)
        .then(resp => resp.json())
        .then(data => {
        setUsers(data)
        
        })
    }, [])

    function handleLogin(event){
        event.preventDefault()
        //console.log(formData)
        let success = false

        for(let i = 0; i < users.length; i++){
            let cond1 = (users[i].username === formData.username)
            let cond2 = (users[i].password === formData.password)
            //console.log(users[i].username)
            if (cond1 && cond2){
                setUser(users[i])
                success = true
                setIsLogin(true)
            }
        }
        if (success){
            loginSucess()
        } else {
            loginFail()
        }

    }

    function loginSucess(){
        alert("Successful Login")
        // window.location = "/"
    }

    function loginFail() {
        alert("Wrong Username or password");
    }

    function handleWelcomeBack(){

    }


    if (!users) {
        return <h1> Loading fake Auth</h1>
    } else if (!isLogin){
        return (
            <div>
                <h1> Login to your JournalSoft</h1>
                <form onSubmit={handleLogin}>
                    <h4>Login</h4>
                    <label >Username</label>
                    <input type="text" placeholder="Enter Username" name="username" value={formData.username}
                     onChange={handleFormChange}/>  
                    <br/>
                    <label >Password</label>
                    <input type="text" placeholder="Enter Password" name="password" value={formData.password}
                     onChange={handleFormChange}/>  
                    <br/>
                    <button type="submit">Login</button>
                </form>
                {/* <button onClick={myFunction}>Try it</button> */}
            </div>
        )
    } else {
        return (
            
            <button onClick={handleWelcomeBack}><Link to={"/calendar"}> Welcome back! </Link></button>
            
        )
    }

}

export default LoginPage


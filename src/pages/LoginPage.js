import React, { useState, useEffect } from "react";

function LoginPage ({user, setUser}){

    const [users, setUsers] = useState(null)
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
        console.log(formData)

        for(let i = 0; i < users.length; i++){
            let cond1 = (users[i].username === formData.username)
            let cond2 = (users[i].password === formData.password)
            if (cond1 && cond2){
                
                setUser(users[i])
                
            }
        }

    }

    function loginSucess(){
        alert("Successful Login")
    }

    function myFunction() {
        alert("I am an alert box!");
      }


    if (!users) {
        return <h1> Loading fake Auth</h1>
    } else {
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
    }

}

export default LoginPage

{/* <div> 
<h1>Login to your JournalSoft</h1>
<form >

    <h4 id="login">Login</h4>
    <label for="email"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="username" required>

    <button type="submit" class="btn">Login</button>
    <button type="button" class="btn-cancel" onclick="closeForm()">Close</button>

</form>
</div> */}
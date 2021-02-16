import { useState }  from "react";
import { Link, useHistory } from "react-router-dom";

function SignUp ({setUser}){
    
    // function sleep(milliseconds) {
    //     const date = Date.now();
    //     let currentDate = null;
    //     do {
    //       currentDate = Date.now();
    //     } while (currentDate - date < milliseconds);
    //   }

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        name: "",
        bio: "",
    })


    const [passwordCheck, setpasswordCheck] = useState("")

    const [accountMade, setAccoutMade] = useState(false)
    const [showPassword, setShowPassWord] = useState("password")
    const history = useHistory();

    function handleFormChange(event){
        // console.log()
        setFormData({...formData,
            [event.target.name]: event.target.value
        })

    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)

        fetch(`http://localhost:3000/users`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
        .then(r => r.json())
        .then(newUser => handleNewDays(newUser))
    }


    function handleNewDays(newUser){

        let today = new Date(Date.parse('2021/01/01'));

        for (let i = 0; i < 365; i++) {
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); 
            let yyyy = today.getFullYear();
            let formatedDate = mm + '/' + dd + '/' + yyyy;
            today.setHours(today.getHours() + 24)

            const data = {
                user_id: newUser.id,
                date: formatedDate
            }
            //console.log(data.date)

            fetch(`http://localhost:3000/days`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                })
            .then(r => r.json())

        }

        autoSticker(newUser)

    }

    function autoSticker(newUser){

        const dataSticker = {
            image: "../imgs/hyped.jpg",
            name: "Hyped",
            user_id: newUser.id,
        }

        fetch(`http://localhost:3000/stickers`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataSticker),
            })
        .then(r => r.json())

        console.log("New user done!")
        //setAccoutMade(true)
        //setAutoLoginNewUser(newUser)
        handleLogin();
    }

    function handleLogin() {
        //e.preventDefault();
        const username = formData.username
        const password = formData.password
        //console.log("adssadf")

        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })
          .then((r) => r.json())
          .then((data) => {
            // data is an object with a user and token: { user, token }
            // setCurrentUser is a callback function from the App component
            setUser(data.user);
            // use localStorage to save the token
            localStorage.setItem("token", data.token)
            //redirect 
            history.push("/");
        });
    }

    function handleShowPassword(){
        if (showPassword === "password"){
            setShowPassWord("text")
        } else {
            setShowPassWord("password")
        } 
    }

    if(accountMade){
        return (
            <div>
                <Link to={"/login"}>
                 Account Made Succesful, Please Login By Clicking Here
                 </Link>
            </div>
        )
    } else {
    return (
        <div>
            <h2>New User</h2>
            <form onSubmit={handleSubmit}>
                <label>UserName</label>
                <input type="text" name="username" placeholder="Username"
                value={formData.username}
                onChange={handleFormChange}
                />
                <label>Password</label>
                <input type={showPassword} name="password" placeholder="Password"
                value={formData.password}
                onChange={handleFormChange}
                />
                <input type="checkbox" onClick={handleShowPassword}/> <label>Show Password</label>

                <label>Your Name</label>
                <input type="text" name="name" placeholder="Name"
                value={formData.name}
                onChange={handleFormChange}
                />
                <label>About Yourself</label>
                <input type="textarea" name="bio" placeholder="About Yourself!"
                value={formData.bio}
                onChange={handleFormChange}
                />
                <button type="submit">Make an Account </button>
            </form>
        </div>
        )
    }
}


export default SignUp 
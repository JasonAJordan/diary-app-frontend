import { useState }  from "react";
import { Link } from "react-router-dom";

function SignUp ({setUser}){

    //let date = new Date(Date.parse('2020/01/01'))
    // let date = new Date("2020-01-02")

    // console.log(date)
    // date.setDate(date.getDate + 1)
    // console.log(date)
    // // console.log(date)

    // let today = new Date(Date.parse('2021/01/01'));
    // let dd = String(today.getDate()).padStart(2, '0');
    // let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // let yyyy = today.getFullYear();
    // let formated = mm + '/' + dd + '/' + yyyy;
    //console.log(formated)

    
    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        name: "",
        bio: "",
    })

    const [accountMade, setAccoutMade] = useState(false)

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
            //.then(newDays => sleep(10))
            //sleep(1000)
        }

        autoSticker(newUser)

    }

    function autoSticker(newUser){

        const dataSticker = {
            image: "../imgs/hyped.jpg",
            name: "Hyped",
            user_id: newUser.id,
        }
        // const form = new FormData()
        // form.append("user_id", dataSticker.user_id)
        // form.append("image", dataSticker.image)
        // form.append("name", dataSticker.name)
        // console.log(form)

        // fetch(`http://localhost:3000/stickers`,{
        //     method: 'POST',
        //     body: form,
        //     })
        // .then(r => r.json())
        fetch(`http://localhost:3000/stickers`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataSticker),
            })
        .then(r => r.json())

        console.log("New user done!")
        setAccoutMade(true)
        //setAutoLoginNewUser(newUser)
    }

    
    // function setAutoLoginNewUser(newUser){
    //     fetch(`http://localhost:3000/users/${newUser.id}`)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             setUser(data)
    //     })
    //     console.log("Im not sure")
    // }
  

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
                <input type="text" name="username" placeholder="Username"
                value={formData.username}
                onChange={handleFormChange}
                />
                <input type="text" name="password" placeholder="Password"
                value={formData.password}
                onChange={handleFormChange}
                />
                <input type="text" name="name" placeholder="Name"
                value={formData.name}
                onChange={handleFormChange}
                />
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
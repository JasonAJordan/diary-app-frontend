import { useState, useEffect }  from "react";
import EditBioForm from "./userRenders/EditBioForm"

function User({user, setUser}){

    const [editmode, setEditmode] = useState(false)

    const mappedUserStickers = user.stickers.map((sticker) => {
        return (
                <div key={sticker.id}>
                    <h4>{sticker.name}</h4>
                    <img src={sticker.image}/>
                </div>
        )
    })

    function handleEditClick(){
        setEditmode(!editmode)
    }
    function handleUserEdit(updatedUser){
        //console.log("asdf")
        setUser(updatedUser)

    }

    return(
        <div>
            <h2>This is the User Page! </h2>

            <h3>Username: {user.username}</h3>
            <h3>Name: {user.name}</h3>
            <h3>Bio: {user.bio}</h3>
            <h3>Your Stickers:</h3>
            {mappedUserStickers}

            {(editmode === true)
                ? <EditBioForm user={user} handleUserEdit={handleUserEdit} setEditmode={setEditmode}/>
                :<button onClick={handleEditClick}>Edit Bio</button>
            }

        </div>
    )
}

export default User
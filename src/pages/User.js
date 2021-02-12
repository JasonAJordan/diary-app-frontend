import { useState, useEffect }  from "react";
import EditBioForm from "./userRenders/EditBioForm"
import NewSticker from "./userRenders/NewSticker"
import StickerCard from "./userRenders/StickerCard";

import '../css/User.css';

function User({user, setUser}){

    const [editmode, setEditmode] = useState(false)
    const [stickers, setStickers] = useState(user.stickers)

    console.log(stickers, "stickers list")

    const mappedUserStickers = stickers.map((sticker) => {
            return <StickerCard sticker={sticker} onDeleteSticker={handleStickerDelete} key={sticker.id}/>
    
    })

    function handleEditClick(){
        setEditmode(!editmode)
    }
    function handleUserEdit(updatedUser){
        //console.log("asdf")
        setUser(updatedUser)
    }

    function handleStickerDelete(removedSticker){
        console.log(removedSticker)
        const updatedStickers = stickers.filter((sticker) =>{
            return (sticker.id !== removedSticker.id)
        })
        setStickers(updatedStickers)
        const updatedUser = user
        updatedUser.stickers = updatedStickers
        setUser(updatedUser)
    }

    function handleNewSticker(newSticker){
        //console.log(stickers, "stickers before")
        //console.log(newSticker)
        setStickers([...stickers, newSticker])

        let updatedUser = user 
        updatedUser.stickers = [...stickers, newSticker]
        setUser(updatedUser)
        //console.log(updatedUser)
        //console.log(user)
    }

    return(
        <div className="grid-container-user">
            
            <div className="Bio">
            <h3>Username: {user.username}</h3>
            <h3>Name: {user.name}</h3>
            <h3>Bio: {user.bio}</h3>
            <p>Stickers: {user.stickers.length}</p>
            <p>Journal Entries: {user.posts.length}</p>
            <p>Sribbles Entries: {user.notes.length}</p>
            <p>Stickers Placed: {user.day_stickers.length}</p>
            </div>
            
            <div className="yourStickers">
            <h3>Your Stickers:</h3>

            <div className="stickers">
                {mappedUserStickers}
            </div>
            </div>

            <div className="editForm">
            {(editmode === true)
                ? <EditBioForm user={user} handleUserEdit={handleUserEdit} setEditmode={setEditmode}/>
                :<button className="edit-bio-bttn" onClick={handleEditClick}>Edit Bio</button>
            }
            </div>

            <div className="upload">
            <NewSticker user={user} handleNewSticker={handleNewSticker}/>
            </div>


        </div>
    )
}

export default User

/* <div class="grid-container">
  <div class="Header"></div>
  <div class="Bio"></div>
  <div class="yourStickers"></div>
  <div class="upload"></div>
  <div class="editForm"></div>
</div> */
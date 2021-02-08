import { useState, useEffect }  from "react";
import EditBioForm from "./userRenders/EditBioForm"
import NewSticker from "./userRenders/NewSticker"
import StickerCard from "./userRenders/StickerCard";

function User({user, setUser}){

    const [editmode, setEditmode] = useState(false)
    const [stickers, setStickers] = useState(user.stickers)

    console.log(stickers, "stickers ")

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
        updatedUser.stickers = stickers
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
            
            <NewSticker user={user} handleNewSticker={handleNewSticker}/>

            {(editmode === true)
                ? <EditBioForm user={user} handleUserEdit={handleUserEdit} setEditmode={setEditmode}/>
                :<button onClick={handleEditClick}>Edit Bio</button>
            }

        </div>
    )
}

export default User
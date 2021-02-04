import { useState, useEffect }  from "react";

function User({user}){

    const mappedUserStickers = user.stickers.map((sticker) => {
        return (
                <div>
                    <h4>{sticker.name}</h4>
                    <img src={sticker.image}/>
                </div>
        )
    })

    return(
        <div>
            <h2>This is the User Page! </h2>

            <h3>Username: {user.username}</h3>
            <h3>Name: {user.name}</h3>
            <h3>Bio: {user.bio}</h3>
            <h3>Your Stickers:</h3>
            {mappedUserStickers}

        </div>
    )
}

export default User
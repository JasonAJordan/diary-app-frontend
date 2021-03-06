import React, {useState} from "react";

function NewDaySticker({handleNewDaySticker, day, userStickers}){

    const [formData, setFormData] = useState({
        day_id: day.id,
        sticker_id: 1,
    })

    function handleFormChange(event){
        // console.log()
        setFormData({...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        //console.log(formData)
        
        fetch(`http://localhost:3000/day_stickers`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
        .then(r => r.json())
        .then(newStickerjoiner => handleNewDaySticker(newStickerjoiner))
    }

    // <input type="radio" id="male" name="gender" value="male">
    // <label for="male">Male</label><br>

    const userStickerMapped = userStickers.map((sticker) => {
        return (
                <div className="sticker" key={sticker.id}>
                    <img src={sticker.image} width="80" height="80"/>
                    <input type="radio" name="sticker_id" value={sticker.id} onChange={handleFormChange}/>
                    <label >{sticker.name}</label>
                </div> 
            )   
    })

    return (
        <div>
            <h2>Add a new Sticker! </h2>
            <form onSubmit={handleSubmit}>
                <div className="sticker-wrap">
                {userStickerMapped}
                </div>

                <button type="submit">Apply the Sticker!</button>
            </form>
        </div>
        
    )
}

export default NewDaySticker
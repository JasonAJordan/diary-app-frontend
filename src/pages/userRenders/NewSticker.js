import React, {useState} from "react";

function NewSticker({ user, handleNewSticker}){

    const [formData, setFormData] = useState({
        user_id: user.id,
        image: "https://via.placeholder.com/50",
        name: "",
        upload_image: "",
    })

    function handleFormChange(event){
        setFormData({...formData,
            [event.target.name]: event.target.value
        })

    }


    function handleSubmit(event){
        event.preventDefault()
        //const formData2 = new FormData(event.target)

        fetch(`http://localhost:3000/stickers`,{
            method: 'POST',
            headers: {
                "Authorization": localStorage.getItem("token"),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
        .then(r => r.json())
        .then(newSticker => handleNewSticker(newSticker))
    }


    return (
        <div> New sticker form place holder 
            <form onSubmit={handleSubmit}>
                <label>New Sticker's Name</label>
                <input type="textarea" name="name" placeholder="Sticker Name"
                    value={formData.name}
                    onChange={handleFormChange}
                />

                <label>Upload a picture (hopefully)</label>
                <input type="file" name="upload_image" accept="image/*" 
                onChange={handleFormChange}
                />

                <button type="submit">Add the New Sticker! </button>
            </form>


        </div>
    )

}

export default NewSticker
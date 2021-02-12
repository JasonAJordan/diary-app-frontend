import React, {useState} from "react";

function NewSticker({ user, handleNewSticker}){

    const [formData, setFormData] = useState({
        user_id: user.id,
        image: {},
        name: "",
    })

    function handleFormChange(event){
        setFormData({...formData,
            [event.target.name]: event.target.value
        })
        console.log(formData.image)
    }

    function handleFormChangeForUpload(e){
        e.persist()
        setFormData({...formData,
            [e.target.name]: e.target.files[0]
        })
    }


    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
        const form = new FormData()
        form.append("user_id", formData.user_id)
        form.append("image", formData.image)
        form.append("name", formData.name)

        fetch(`http://localhost:3000/stickers`,{
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            body: form,
            })
        .then(r => r.json())
        .then(newSticker => handleNewSticker(newSticker))
    }


    return (
        <div className="newSticker"> 
            <form onSubmit={handleSubmit}>

                <h3>Upload a picture</h3>
                
                <div className="uploadinfo">
                <label>New Sticker's Name:</label>
                <input type="textarea" name="name" placeholder="Sticker Name"
                    value={formData.name}
                    onChange={handleFormChange}
                />

                <input type="file" name="image" 
                onChange={handleFormChangeForUpload}
                />
                </div>

                
                <div className="submit-button">
                    <button type="submit">Add the New Sticker! </button>
                </div>
            </form>


        </div>
    )

}

export default NewSticker
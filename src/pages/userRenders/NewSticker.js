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
        <div> New sticker form place holder 
            <form onSubmit={handleSubmit}>
                <label>New Sticker's Name</label>
                <input type="textarea" name="name" placeholder="Sticker Name"
                    value={formData.name}
                    onChange={handleFormChange}
                />

                <label>Upload a picture (hopefully)</label>
                <input type="file" name="image" 
                onChange={handleFormChangeForUpload}
                />

                <button type="submit">Add the New Sticker! </button>
            </form>


        </div>
    )

}

export default NewSticker
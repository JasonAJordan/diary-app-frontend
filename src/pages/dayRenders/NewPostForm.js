import React, {useState} from "react";

function NewPostForm({handleNewPost, day}){

    //handleNewPost 

    const [formData, setFormData] = useState({

        day_id: day.id,
        title: "",
        context: "",
        text_color: "#b8fffe",
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

        fetch(`http://localhost:3000/posts`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
        .then(r => r.json())
        .then(newPost => handleNewPost(newPost))
    }

    return (
        <div>
            <h2>Write a new Entry</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title"
                value={formData.name}
                onChange={handleFormChange}
                />
                <input type="textarea" name="context" placeholder="Your Entry"
                value={formData.context}
                onChange={handleFormChange}
                />
                <input type="color" name="text_color" 
                value={formData.color}
                onChange={handleFormChange}
                />
                <button type="submit">Add the Entry! </button>
            </form>
        </div>
        
    )
}

export default NewPostForm
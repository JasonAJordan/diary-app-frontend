import React, { useState, useEffect } from "react";

function NewNoteForm ({user, handleNewNote}){

    //console.log(notes)

    const [formData, setFormData] = useState({

        user_id: user.id,
        title: "",
        context: "",
        text_color: "#000000",
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

        fetch(`http://localhost:3000/notes`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
        .then(r => r.json())
        .then(newNote => handleNewNote(newNote))
    }
    
    return (
        <div >
            <h2>Write a new Scribble</h2>
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
                <button type="submit">Add the Scribble! </button>
            </form>
        </div>
    )
}




export default NewNoteForm
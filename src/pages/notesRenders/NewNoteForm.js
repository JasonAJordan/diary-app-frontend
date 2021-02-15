import React, { useState, useEffect } from "react";

function NewNoteForm ({user, handleNewNote}){

    //console.log(notes)
    const [addFileCheck, setAddFileCheck] = useState(false)

    const [formData, setFormData] = useState({
        user_id: user.id,
        title: "",
        context: "",
        text_color: "#000000",
        image: {},
    })

    const [formDataNoImg, setformDataNoImg] = useState({
        user_id: user.id,
        title: "",
        context: "",
        text_color: "#000000",
        image: null
    })

    function handleFormChange(event){
        // console.log()
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
    function handleFormChange2(event){
        // console.log()
        setformDataNoImg({...formDataNoImg,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        //console.log(formData)
        const form = new FormData()
        form.append("user_id", formData.user_id)
        form.append("title", formData.title)       
        form.append("context", formData.context)
        form.append("text_color", formData.text_color)
        form.append("image", formData.image)

        fetch(`http://localhost:3000/notes`,{
            method: 'POST',
            body: form,
            })
        .then(r => r.json())
        .then(newNote => handleNewNote(newNote))
    }

    function handleSubmit2(event){
        event.preventDefault()
        console.log(formDataNoImg)

        fetch(`http://localhost:3000/notes`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataNoImg),
            })
        .then(r => r.json())
        .then(newNote => handleNewNote(newNote))
    }


    function handleToggleUpload(){
        setAddFileCheck(!addFileCheck)
    }
    
    return (
        <div >
            <h2>Write a new Scribble</h2>
            {(addFileCheck === false) ? 
            <form onSubmit={handleSubmit2}>
                <input type="text" name="title" placeholder="Title"
                value={formDataNoImg.name}
                onChange={handleFormChange2}
                />
                <input type="textarea" name="context" placeholder="Your Entry"
                value={formDataNoImg.context}
                onChange={handleFormChange2}
                />
                <input type="color" name="text_color" 
                value={formDataNoImg.color}
                onChange={handleFormChange2}
                />
                <button type="submit">Add the Scribble! </button>
            </form>
            :
            
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
                <input type="file" name="image" onChange={handleFormChangeForUpload}/>
                <button type="submit">Add the Scribble! </button>
            </form>
            }
            <button onClick={handleToggleUpload}>Upload a Picture,optional</button>
        </div>
    )
}




export default NewNoteForm
import React, {useState} from "react";

function EditNoteForm({handleEditNote, note, setEditModeNote}){

    const [formData, setFormData] = useState({

        user_id: note.user.id,
        title: note.title,
        context: note.context,
        text_color: note.text_color,
    })

    function handleFormChange(event){
        setFormData({...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        //console.log(formData)

        fetch(`http://localhost:3000/notes/${note.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
        .then(r => r.json())
        .then(updatedNote => handleEditNote(updatedNote))

        setEditModeNote(false);
    }

    return (
        <div>
            <h2>Edit Scribble</h2>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input className="New-Note-textarea-1" type="text" name="title" placeholder={note.title}
                value={formData.title}
                onChange={handleFormChange}
                />
                <br/>
                <label>Note: </label>
                <textarea className="New-Note-textarea-2"type="textarea" name="context" placeholder={note.context}
                value={formData.context}
                onChange={handleFormChange}
                />
                <br/>
                <label>Color: </label>
                <input type="color" name="text_color" 
                value={formData.text_color}
                onChange={handleFormChange}
                />
                <br/>
                <button className="submit-button" type="submit">Save the Scribble! </button>
                
            </form>
        </div>
        
    )
}
export default EditNoteForm
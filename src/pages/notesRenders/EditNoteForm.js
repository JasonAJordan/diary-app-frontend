import React, {useState} from "react";

function EditNoteForm({handleEditNote, note, setEditMode}){

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

        setEditMode(false);
    }

    return (
        <div>
            <h2>Edit Scribble</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder={note.title}
                value={formData.title}
                onChange={handleFormChange}
                />
                <input type="textarea" name="context" placeholder={note.context}
                value={formData.context}
                onChange={handleFormChange}
                />
                <input type="color" name="text_color" 
                value={formData.text_color}
                onChange={handleFormChange}
                />
                <button type="submit">Save the Scribble! </button>
            </form>
        </div>
        
    )
}
export default EditNoteForm
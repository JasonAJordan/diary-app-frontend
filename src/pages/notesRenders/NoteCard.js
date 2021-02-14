import React, { useState } from "react";
import EditNoteForm from "./EditNoteForm";

function NoteCard ({note, onDeleteNote, handleEditNote}){

    const [editmodeNote, setEditModeNote] = useState(false)

    function handleDelteClick(){
        const id = note.id.toString()
        fetch(`http://localhost:3000/notes/${id}`, {
            method: "DELETE",
        });
        onDeleteNote(note);
    }

    function handleEditClick(){
        setEditModeNote(!editmodeNote)
    }
    
  
    return (
        <div style={{color: note.text_color}}>
            <h4>{note.title}</h4>
            <p>{note.context}</p>

            {(editmodeNote === true)
            ? <EditNoteForm note={note} handleEditNote={handleEditNote} setEditModeNote={setEditModeNote}/>
            :<button onClick={handleEditClick}>Make a Edit</button>
            }

            <button onClick={handleDelteClick}>Erase</button>

        </div>
    )
}




export default NoteCard
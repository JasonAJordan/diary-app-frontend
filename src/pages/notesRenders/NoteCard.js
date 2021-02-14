import React, { useState } from "react";
import EditNoteForm from "./EditNoteForm";
import { Link } from "react-router-dom";

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
            <Link to={`/notes/${note.id}`}> <h4>{note.title}</h4> </Link>
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
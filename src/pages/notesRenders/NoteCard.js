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
        <div className="Note-Card" >
            <Link to={`/notes/${note.id}`} style={{ textDecoration: 'none', color: 'black'}}> <label className="note-title" >{note.title}</label> </Link>
            <p style={{color: note.text_color}}>{note.context}</p>
            {note.image ? <img src={note.image} width="100" height="100"/> : null}
            
            <br/>

            {(editmodeNote === true)
            ? <EditNoteForm note={note} handleEditNote={handleEditNote} setEditModeNote={setEditModeNote}/>
            :<button onClick={handleEditClick}>Make a Edit</button>
            }

            <button onClick={handleDelteClick}>Erase</button>

        </div>
    )
}




export default NoteCard
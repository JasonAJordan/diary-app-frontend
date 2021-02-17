import React, { useState, useEffect } from "react";
import EditNoteForm from "./notesRenders/EditNoteForm";
import { useParams, Link } from "react-router-dom";
import '../css/NoteShow.css';

function NoteShow ({user, setUser}){

    const params = useParams();
    const [note, setNote] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [editmodeNote, setEditModeNote] = useState(false)

    function search(dayId, daysArray){
        for (let i=0; i < daysArray.length; i++) {
            if (daysArray[i].id === dayId) {
                return daysArray[i];
            }
        }
    }

    useEffect(() => {
        const resultObject = search(Number(params.id), user.notes)
        setNote(resultObject)
        setIsLoaded(true);
    },[params.id])

    function handleDelteClick(){
        const id = note.id.toString()
        fetch(`http://localhost:3000/notes/${id}`, {
            method: "DELETE",
        });
        onDeleteNote(note);
    }

    function onDeleteNote(removedNote){
        const updatedNotes = user.notes.filter((note) => {
            return removedNote.id !== note.id 
        })

        let updatedUser = user
        updatedUser.notes = updatedNotes
        setUser(updatedUser)
    }

    function handleEditNote(updatedNote){
        setNote(updatedNote)
        const updatedNotes = user.notes.map((note) => {
            if (note.id === updatedNote.id){
                return updatedNote
            } else {
                return note
            }
        })

        let updatedUser = user 
        updatedUser.notes = updatedNotes
        setUser(updatedUser)
    }

    function handleEditClick(){
        setEditModeNote(!editmodeNote)
    }
    
  if (!isLoaded){
      return(
          <div>Loading...</div>
      )
  }
    return (
        
        <div className="grid-container-noteshow">
            <br/><br/><br/><br/>
            <div className="Main">
            <h4>{note.title}</h4>
            <p stytle={{color: note.text_color}}>{note.context}</p>
            
            {(editmodeNote === true)
            ? <EditNoteForm note={note} handleEditNote={handleEditNote} setEditModeNote={setEditModeNote}/>
            :<button onClick={handleEditClick}>Make a Edit</button>
            }
            
            <Link to={"/notes"}><button onClick={handleDelteClick}> Erase </button> </Link>
            </div>
        </div>
    )
}


export default NoteShow
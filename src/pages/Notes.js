import React, { useState, useEffect } from "react";
import NoteCard from "./notesRenders/NoteCard";
import NewNoteForm from "./notesRenders/NewNoteForm"

function Notes ({user, setUser}){

    const [notes, setNotes] = useState(user.notes)

    const notesMapped = notes.map((note) =>{
        return <NoteCard key={note.id} note={note} onDeleteNote={onDeleteNote} handleEditNote={handleEditNote}/>
    })

    function handleNewNote(newNote){
        setNotes([...notes, newNote])

        let updatedUser = user
        updatedUser.notes = notes
        setUser(updatedUser)
    }

    function onDeleteNote(removedNote){

        const updatedNotes = notes.filter((note) => {
            return removedNote.id !== note.id 
        })
        setNotes(updatedNotes)

        let updatedUser = user
        updatedUser.notes = notes
        setUser(updatedUser)
    }

    function handleEditNote(updatedNote){
        const updatedNotes = notes.map((note) => {
            if (note.id === updatedNote.id){
                return updatedNote
            } else {
                return note
            }
        })
        setNotes(updatedNotes)

        let updatedUser = user 
        updatedUser.notes = notes
        setUser(updatedUser)

    }

    return (
        <div>
            {notesMapped}

            <NewNoteForm user={user} handleNewNote={handleNewNote}  />
        </div>
    )


}

export default Notes
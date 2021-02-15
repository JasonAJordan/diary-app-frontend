import React, { useState, useEffect } from "react";
import NoteCard from "./notesRenders/NoteCard";
import NewNoteForm from "./notesRenders/NewNoteForm"


function Notes ({user, setUser}){

    const [notes, setNotes] = useState(user.notes)
    const [index, setIndex] = useState(0)
    const [showAmount, setShowAmount] =useState(5)

    const notesMapped = notes.slice(index, index + showAmount).map((note) =>{
        return <NoteCard key={note.id} note={note} onDeleteNote={onDeleteNote} handleEditNote={handleEditNote}/>
    })

    function handleNewNote(newNote){
        setNotes([...notes, newNote])

        let updatedUser = user
        updatedUser.notes = [...notes,newNote]
        setUser(updatedUser)
        setIndex((Math.floor(notes.length / showAmount)) * showAmount)
    }

    function onDeleteNote(removedNote){

        const updatedNotes = notes.filter((note) => {
            return removedNote.id !== note.id 
        })
        setNotes(updatedNotes)

        let updatedUser = user
        updatedUser.notes = updatedNotes
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
        updatedUser.notes = updatedNotes
        setUser(updatedUser)

    }

    function handleNextPage(){
        setIndex(index + showAmount)
    }

    function handlePreviousPage(){
        setIndex(index - showAmount)
    }

    function handleShowAmountChange(event){
        setIndex(0)
        setShowAmount(event.target.value)

    }


    return (
        <div>
            <br/><br/>
            <div>Scribbles!</div>

            <NewNoteForm user={user} handleNewNote={handleNewNote}  />
            <div>
                <p>Page: {(Math.floor(index/ showAmount) ) + 1}</p>
                {(index === 0) ? null : <button onClick={handlePreviousPage}>Previous Page</button>}
                {(index + showAmount > notes.length) ? null : <button onClick={handleNextPage}>Next Page</button>}

                <label>Max Sribbles on One Page:</label>
                    <select name="index" value={showAmount} onChange={handleShowAmountChange} >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                    </select>
               
            </div>
            
            {notesMapped}
            
        </div>
    )


}

export default Notes
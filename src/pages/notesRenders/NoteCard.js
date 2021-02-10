function NoteCard ({note, onDeleteNote}){

    function handleDelteClick(){
        const id = note.id.toString()
        fetch(`http://localhost:3000/notes/${id}`, {
            method: "DELETE",
        });
        onDeleteNote(note);
    }
    
  
    return (
        <div style={{color: note.text_color}}>
            <h4>{note.title}</h4>
            <p>{note.context}</p>
            <button onClick={handleDelteClick}>Erase</button>
        </div>
    )
}




export default NoteCard
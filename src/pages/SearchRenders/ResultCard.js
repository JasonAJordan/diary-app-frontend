import React, {useState} from "react";
import { Link } from "react-router-dom";

function ResultCard({ blob}){

    // if (post){
    //     return (
            
    //         <div key={post.id}>
    //             <Link to={`/days/${post.day_id}`}>
    //             <h3>{post.date.slice(0,5)}: {post.title}</h3>
    //             <p style={{color: post.text_color}}>{post.context}</p>
    //             </Link>
    //         </div>   
    //     )}
    // if (note){
    //     return(
    //         <div>
    //             <Link to={`/notes/${note.id}`}>
    //             <h3>Note: {note.title}</h3>
    //             <p style={{color: note.text_color}}>{note.context}</p>
    //             </Link>
    //         </div> 
    //     )
    // } 
    // ONe function for 2 jobs now! 
    if(blob.date){
        return (
            <div>
                <Link to={`/days/${blob.day_id}`}>
                <h3>{blob.date.slice(0,5)}: {blob.title}</h3>
                <p style={{color: blob.text_color}}>{blob.context}</p>
                </Link>
            </div>   
        )}
    if(!blob.date) {
        return(
            <div>
                <Link to={`/notes/${blob.id}`}>
                <h3>Note: {blob.title}</h3>
                <p style={{color: blob.text_color}}>{blob.context}</p>
                </Link>
            </div> 
        )
    }

}

export default ResultCard
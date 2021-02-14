import React, {useState} from "react";
import { Link } from "react-router-dom";

function ResultCard({post}){

    return (
        
        <div key={post.id}>
            <Link to={`/days/${post.day_id}`}>
            <h3>{post.date.slice(0,5)}: {post.title}</h3>
            <p style={{color: post.text_color}}>{post.context}</p>
            </Link>
        </div>
        
    )
}

export default ResultCard
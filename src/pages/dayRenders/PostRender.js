import React, {useState} from "react";
import EditPostForm from "./EditPostForm";

function PostRender({post, onDeletePost, handleEditPost, day}){

    const [editmode, setEditmode] = useState(false)

    function handleDeleteClick(){
        //console.log(post.id)
        const id = post.id.toString()
        fetch(`http://localhost:3000/posts/${id}`, {
            method: "DELETE",
        });
        onDeletePost(post);
    }

    function handleEditClick(){
        setEditmode(!editmode)
    }
    
    return (
        <div>
            
            <h3>{post.title}</h3>

            <p style={{color: post.text_color}}>{post.context}</p>

            {post.image ? <img src={post.image} width="100" height="100"/> : null}

            {(editmode === true)
            ? <EditPostForm post={post} handleEditPost={handleEditPost} day={day} setEditmode={setEditmode}/>
            :<button onClick={handleEditClick}>Make a Change</button>
            }
            <button onClick={handleDeleteClick}>Remove Post</button>
        </div>
        
    )
}

export default PostRender
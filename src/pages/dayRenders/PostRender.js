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
            
            <h3>Title: {post.title}</h3>
            <h4>Color: {post.text_color}</h4>
            <p>{post.context}</p>

            {(editmode === true)
            ? <EditPostForm post={post} handleEditPost={handleEditPost} day={day} setEditmode={setEditmode}/>
            :<button onClick={handleEditClick}>Make a Change</button>
            }
            <button onClick={handleDeleteClick}>Remove Post</button>
        </div>
        
    )
}

export default PostRender
import React, {useState} from "react";

function EditPostForm({handleEditPost, post, day, setEditmode}){

    const [formData, setFormData] = useState({

        day_id: day.id,
        title: post.title,
        context: post.context,
        text_color: post.text_color,
    })

    function handleFormChange(event){
        setFormData({...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        //console.log(formData)

        fetch(`http://localhost:3000/posts/${post.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
        .then(r => r.json())
        .then(updatedPost => handleEditPost(updatedPost))

        setEditmode(false);
    }

    return (
        <div className="New-Entries">
            <h2>Edit Entry</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input  lassName="New-Entries-textarea-1" type="text" name="title" placeholder={post.title}
                value={formData.title}
                onChange={handleFormChange}
                />
                <br/>
                <label>Entry:</label>
                <textarea className="New-Entries-textarea-2" type="textarea" name="context" placeholder={post.context}
                value={formData.context}
                onChange={handleFormChange}
                />
                <br/>
                <label>Color</label>
                <input type="color" name="text_color" 
                value={formData.text_color}
                onChange={handleFormChange}
                />
                <br/>
                <button type="submit">Save the Entry! </button>
            </form>
        </div>
        
    )
}
export default EditPostForm
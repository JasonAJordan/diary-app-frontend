import React, {useState} from "react";

function EditBioForm({user, handleUserEdit, setEditmode}){

    const [formData, setFormData] = useState({
        name: user.name,
        bio: user.bio,
    })

    function handleFormChange(event){
        setFormData({...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)

        fetch(`http://localhost:3000/users/${user.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
        .then(r => r.json())
        .then(updatedUser => handleUserEdit(updatedUser))

        setEditmode(false);

    }

    function handleClose(){
        setEditmode(false)
    }

    return (
        <div>
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder={user.name}
            value={formData.name}
            onChange={handleFormChange}
            />
            <input type="textarea" name="bio" placeholder={user.bio}
            value={formData.bio}
            onChange={handleFormChange}
            />
            <button onClick={handleClose}>CLose Edit</button>
            <button type="submit">Never mind</button>
        </form>
    </div>
    )

}

export default EditBioForm
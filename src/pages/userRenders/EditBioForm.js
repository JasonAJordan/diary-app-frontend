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
        <div className="edit-bio-form">
        <h3>Edit User</h3>
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" name="name" placeholder={user.name}
            value={formData.name}
            onChange={handleFormChange}
            />
            <br/>

            <label className="bio-form-label">Bio:</label>
            <textarea className="input-bio" type="textarea" name="bio" placeholder={user.bio}
            value={formData.bio}
            onChange={handleFormChange}
            />
            <br/>
            <button onClick={handleClose}>Never Mind</button>
            <button type="submit">Submit</button>
        </form>
    </div>
    )

}

export default EditBioForm
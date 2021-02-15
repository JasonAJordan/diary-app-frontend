import React, {useState} from "react";

function NewPostForm({handleNewPost, day}){

    //handleNewPost 
    const [addFileCheck, setAddFileCheck] = useState(false)

    const [formData, setFormData] = useState({

        day_id: day.id,
        title: "",
        context: "",
        text_color: "#000000",
        image: {},

    })

    const [formDataNoImg, setformDataNoImg] = useState({
        day_id: day.id,
        title: "",
        context: "",
        text_color: "#000000",
        image: null
    })

    function handleFormChange(event){
        // console.log()
        setformDataNoImg({...formDataNoImg,
            [event.target.name]: event.target.value
        })

    }

    function handleFormChangeImg(event){
        setFormData({...formData,
            [event.target.name]: event.target.value
        })
    }
    
    function handleFormChangeForUpload(e){
        e.persist()

        setFormData({...formData,
            [e.target.name]: e.target.files[0]
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formDataNoImg)

        fetch(`http://localhost:3000/posts`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataNoImg),
            })
        .then(r => r.json())
        .then(newPost => handleNewPost(newPost))
    }

    function handleSubmitImage(event){
        event.preventDefault()
        //console.log(formData)
        const form = new FormData()
        form.append("day_id", formData.day_id)
        form.append("title", formData.title)       
        form.append("context", formData.context)
        form.append("text_color", formData.text_color)
        form.append("image", formData.image)

        fetch(`http://localhost:3000/posts`,{
            method: 'POST',
            body: form,
            })
        .then(r => r.json())
        .then(newPost => handleNewPost(newPost))
    }


    function handleToggleUpload(){
        setAddFileCheck(!addFileCheck)
    }
    
    return (
        <div>
            <h2>Write a new Entry</h2>
            {(addFileCheck === false) ? 
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title"
                value={formDataNoImg.title}
                onChange={handleFormChange}
                />
                <input type="textarea" name="context" placeholder="Your Entry"
                value={formDataNoImg.context}
                onChange={handleFormChange}
                />
                <input type="color" name="text_color" 
                value={formDataNoImg.color}
                onChange={handleFormChange}
                />
                <button type="submit">Add the Entry! </button>
            </form>
            : 
            <form onSubmit={handleSubmitImage}>
            <input type="text" name="title" placeholder="Title"
            value={formData.title}
            onChange={handleFormChangeImg}
            />
            <input type="textarea" name="context" placeholder="Your Entry"
            value={formData.context}
            onChange={handleFormChangeImg}
            />
            <input type="color" name="text_color" 
            value={formData.color}
            onChange={handleFormChangeImg}
            />
            <input type="file" name="image" onChange={handleFormChangeForUpload}/>
            <button type="submit">Add the Entry! </button>
        </form> 
    }

            <button onClick={handleToggleUpload}>Upload a Picture (optional)</button>
        </div>
        
    )
}

export default NewPostForm
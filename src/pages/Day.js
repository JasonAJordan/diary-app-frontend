import { useState, useEffect }  from "react";
import { useParams, Link } from "react-router-dom";
import DayStickerRender from "./dayRenders/DayStickerRender";
import NewPostForm from "./dayRenders/NewPostForm";
import NewDayStickerForm from "./dayRenders/NewDayStickerForm";
import PostRender from "./dayRenders/PostRender";


function Day({user}){

    const [day, setDay] = useState(null);
    const [posts, setPosts] = useState([]);
    const [stickers, setStickers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const params =useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/days/${params.id}`)
        .then((r) => r.json())
        .then((data) => {
            setDay(data);
            setPosts(data.posts)
            setStickers(data.stickers)
            setIsLoaded(true);
        })
    },[params.id])

    //Loading data 
    if (!isLoaded) return <h2>Loading...</h2>

    //console.log(stickers)


    const mappedStickers = stickers.map((sticker) => {
        return <DayStickerRender sticker={sticker} key={sticker.id}
        handleDeleteSticker={handleDeleteSticker}
        />
    })

    const mappedPosts = posts.map((post) => {
        return <PostRender post={post} key={post.id} 
        onDeletePost={handleDeletePost}
        handleEditPost={handleEditPost}
        day={day}
        />
    })

    //Post handles 
    function handleNewPost(newPost){
        setPosts([...posts, newPost])
    }

    function handleDeletePost(removedPost){
        const updatedPost = posts.filter((post) => (
            post.id !== removedPost.id ? true : false
        ))
        setPosts(updatedPost)
    }
    
    function handleEditPost(updatedPost){
        const updatedPostsArray = posts.map((post) => {
            if (post.id === updatedPost.id){
                return updatedPost;
            } else {
                return post
            }
        })
        setPosts(updatedPostsArray)
    }

    //stickerHandles 
    function handleNewDaySticker(newStickerjoiner){
        setStickers([...stickers, newStickerjoiner.sticker])
    }

    function handleDeleteSticker(removedSticker){
        const updatedStickers = stickers.filter((sticker) => (
            sticker.id !== removedSticker.id ? true : false
        ))
        setStickers(updatedStickers)
    }

    // console.log(day)
    //console.log(day.stickers)

    return(
        <div>

        This is the day page! 
        <h1>{day.date}</h1>
        
        <h2>Stickers: {mappedStickers} </h2>

        <div> 
            <h2>Posts:</h2>
            {mappedPosts}
        </div>

        <NewPostForm day={day} handleNewPost={handleNewPost}/>

        <NewDayStickerForm day={day} handleNewDaySticker={handleNewDaySticker} userStickers={user.stickers}/>

        <br></br>
        <br></br>
        </div>

        
    )
}

export default Day
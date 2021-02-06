import { useState, useEffect }  from "react";
import { useParams, Link } from "react-router-dom";
import DayStickerRender from "./dayRenders/DayStickerRender";
import NewPostForm from "./dayRenders/NewPostForm";
import NewDayStickerForm from "./dayRenders/NewDayStickerForm";
import PostRender from "./dayRenders/PostRender";


function Day({user, setUser}){

    const params =useParams();

    const [day, setDay] = useState(null);
    const [posts, setPosts] = useState([]);
    const [stickers, setStickers] = useState([]);
    const [dayStickers, setDayStickers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    function search(dayId, daysArray){
        for (let i=0; i < daysArray.length; i++) {
            if (daysArray[i].id === dayId) {
                return daysArray[i];
            }
        }
    }

    // const resultObject = search(Number(params.id), user.days)
    // //console.log(params.id)
    // console.log(user.days)
    // console.log(resultObject)

    useEffect(() => {
        const resultObject = search(Number(params.id), user.days)
        //console.log(resultObject)
        setDay(resultObject);
        setPosts(resultObject.posts)
        setStickers(resultObject.stickers)
        setDayStickers(resultObject.day_stickers)
        setIsLoaded(true);

    },[params.id])

    // useEffect(() => {
    //     fetch(`http://localhost:3000/days/${params.id}`)
    //     .then((r) => r.json())
    //     .then((data) => {
    //         setDay(data);
    //         setPosts(data.posts)
    //         setStickers(data.stickers)
    //         setIsLoaded(true);
    //     })
    // },[params.id])


    //The days update helper functions (there should be 4!)

    function updateDaysForNewPost(dayId, daysArray, updatedPost){
        const updatedDays = []
        //console.log (daysArray, "function array check ")
        //console.log(dayId)

        for (let i=0; i < daysArray.length; i++) {
            if (daysArray[i].id == dayId) {
                const updatedPostArray = daysArray[i].posts.concat(updatedPost)
                //console.log(daysArray[i], "the array in the if statment")
                //console.log(daysArray[i].posts, "array.posts")
                //console.log(daysArray[i][date])
                //console.log(updatedPostArray, "what's being pushed into the day's post array")
                let updatedDay = daysArray[i];
                updatedDay.posts = updatedPostArray
                updatedDays.push(updatedDay);
            } else {
                updatedDays.push(daysArray[i]);
            }
        }
        //console.log(updatedDays, "function check ")
        return updatedDays
    }

    function updateDaysForDeletePost(dayId, daysArray, updatedPosts){
        const updatedDays = []

        for (let i=0; i < daysArray.length; i++) {
            if (daysArray[i].id == dayId) {
                let updatedDay = daysArray[i];
                updatedDay.posts = updatedPosts
                updatedDays.push(updatedDay);
            } else {
                updatedDays.push(daysArray[i]);
            }
        }
        return updatedDays
    }

    function updateDaysForAddStickers(daysArray, updatedStickers, updatedDayStickers){
        const updatedDays = []

        for (let i=0; i < daysArray.length; i++) {
            if (daysArray[i].id == params.id) {
                let updatedDay = daysArray[i];
                updatedDay.stickers = updatedStickers
                updatedDay.day_stickers = updatedDayStickers
                //console.log(updatedDay)
                setDay(updatedDay)           //might need this for bug
                updatedDays.push(updatedDay);
            } else {
                updatedDays.push(daysArray[i]);
            }
        }
        return updatedDays
    }

    function updateDaysForDeleteStickers(daysArray, updatedStickers, updatedDayStickers){
        const updatedDays = []

        for (let i=0; i < daysArray.length; i++) {
            if (daysArray[i].id == params.id) {
                let updatedDay = daysArray[i];
                updatedDay.stickers = updatedStickers
                updatedDay.day_stickers = updatedDayStickers
                setDay(updatedDay)                //might need this for bug
                updatedDays.push(updatedDay);
            } else {
                updatedDays.push(daysArray[i]);
            }
        }
        return updatedDays
    }
    

    function randoNumber(){
        return Math.floor(Math.random() * Math.floor(100))
    }
    
    //Maping Data for calander render
    const mappedStickers = stickers.map((sticker) => {
        return <DayStickerRender sticker={sticker} key={randoNumber()}
        handleDeleteSticker={handleDeleteSticker}
        dayStickers ={dayStickers}
        user = {user}
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
        //setUser(user)

        let updatedUser = user 
        const updatedDays = updateDaysForNewPost(params.id, user.days, newPost)
        //console.log(updatedUser, "the user before the update")
        //console.log(updatedUser.days, "usersdays before update")
        updatedUser.days = updatedDays
        //console.log(updatedDays, "updated days")

        setUser(updatedUser)

    }

    function handleDeletePost(removedPost){
        
        const updatedPosts = posts.filter((post) => (
            post.id !== removedPost.id ? true : false
        ))
        setPosts(updatedPosts)

        let updatedUser = user 
        const updatedDays = updateDaysForDeletePost(params.id, user.days, updatedPosts)
        updatedUser.days = updatedDays

        setUser(updatedUser)
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

    //sticker Handles 
    function handleNewDaySticker(newStickerjoiner){
        const updatedStickers = [...stickers, newStickerjoiner.sticker]
        setStickers(updatedStickers)
        //console.log(updatedStickers)

        const newDayStickerJoiner = {
            id: newStickerjoiner.id,
            day_id: newStickerjoiner.day.id,
            sticker_id: newStickerjoiner.sticker.id,
        }
        const updatedDayStickers = [...dayStickers, newDayStickerJoiner]
        setDayStickers(updatedDayStickers)

        let updatedUser = user
        const updatedDays = updateDaysForAddStickers(user.days, updatedStickers, updatedDayStickers)
        updatedUser.days = updatedDays
        setUser(updatedUser)
    }

    function handleDeleteSticker(removedSticker, removedDaySticker){
        //console.log(removedSticker)
        //might need to make a custom loop for this one. 
        //temporatry work around is done 

        let wasRemoved = false
        // let updatedStickers = []

        // for (let i =0; i < stickers.length; i++){
        // }

        const updatedStickers = stickers.filter((sticker) => {
            if ((sticker.id !== removedSticker.id) || (wasRemoved === true)){
                return true 
            } else {
                wasRemoved = true
                return false 
            }
        })
        const updatedDayStickers = day.day_stickers.filter((joiner) => (
            joiner.id !== removedDaySticker.id ? true : false
        ))

        setStickers(updatedStickers)
        setDayStickers(updatedDayStickers)

        let updatedUser = user
        const updatedDays = updateDaysForDeleteStickers(user.days, updatedStickers, updatedDayStickers)
        updatedUser.days = updatedDays
        setUser(updatedUser)
    }


    //Loading data block 

    if (!isLoaded) return <h2>Loading... or maybe you do not have access to this post.</h2>
    else {
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
}

export default Day
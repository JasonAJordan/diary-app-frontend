import { useState, useEffect }  from "react";
import { useParams, Link } from "react-router-dom";
import DayStickerRender from "./dayRenders/DayStickerRender";
import NewPostForm from "./dayRenders/NewPostForm";
import NewDayStickerForm from "./dayRenders/NewDayStickerForm";
import PostRender from "./dayRenders/PostRender";

import '../css/Day.css';

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


    useEffect(() => {
        const resultObject = search(Number(params.id), user.days)
        //console.log(resultObject)
        setDay(resultObject);
        setPosts(resultObject.posts)
        setStickers(resultObject.stickers)
        setDayStickers(resultObject.day_stickers)
        setIsLoaded(true);

    },[params.id])


    //This step might be inefficient, probaly better to pull the daysOrdered from App.js  
    const daysOrdered = user.days.sort((day1, day2) => {
        return day1.date.localeCompare(day2.date)
    })


    //These steps here are needed tho.... remeber index starts at 0 but % messes up the logic a bit 
    const currentIndex = daysOrdered.indexOf(day);
    const nextIndex = ((currentIndex + 1) % daysOrdered.length);
    const nextDay = daysOrdered[nextIndex]
    //console.log(nextDay.id, "wut")

    let prevIndex = 10 
    if(currentIndex === 0){
        prevIndex = daysOrdered.length -1
    } else {
        prevIndex = (currentIndex - 1) % (daysOrdered.length )
     } 
    //console.log(currentIndex, prevIndex) 
    const prevDay = daysOrdered[prevIndex]
    //console.log(prevDay.id, "tuw")
    
    
    



    //The days update helper functions (there should be 4!)

    function updateDaysForNewPost(dayId, daysArray, updatedPost){
        const updatedDays = []
        //console.log (daysArray, "function array check ")
        //console.log(dayId)

        for (let i=0; i < daysArray.length; i++) {
            //console.log(daysArray[i].id, dayId)
            if (daysArray[i].id === Number(dayId)) {
                const updatedPostArray = daysArray[i].posts.concat(updatedPost)
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
            if (daysArray[i].id === Number(dayId)) {
                let updatedDay = daysArray[i];
                updatedDay.posts = updatedPosts
                updatedDays.push(updatedDay);
            } else {
                updatedDays.push(daysArray[i]);
            }
        }
        return updatedDays
    }

    function updateDaysForEditPost(daysArray, updatedPostsArray){
        const updatedDays = []

        for (let i=0; i < daysArray.length; i++) {
            if (daysArray[i].id === Number(params.id)) {
                let updatedDay = daysArray[i];
                updatedDay.posts = updatedPostsArray
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
            if (daysArray[i].id === Number(params.id)) {
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
            if (daysArray[i].id === Number(params.id)) {
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
        setPosts(updatedPostsArray) //This sets the posts for the day not the whole user!

        let updatedUser = user 
        const updatedDays = updateDaysForEditPost(user.days, updatedPostsArray)
        updatedUser.days = updatedDays
        setUser(updatedUser)
        //console.log(user, "adf")
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
            <div className="grid-container-day">


            <div class="Info">
                <div class="Date">
                    <Link to={`/days/${prevDay.id}`}><button >Prev</button></Link>
                    <a>{day.date}</a>
                    <Link to={`/days/${nextDay.id}`}><button >Next</button></Link>
                </div>

                
                <a>Stickers:</a><div className="sticker-wrap"> {mappedStickers} </div>
            </div>
            
            <div class="Entries">
                <div> 
                    <h2>Posts:</h2>
                    {mappedPosts}
                </div>
            </div>

            <div class="New-Entries">
            <NewPostForm day={day} handleNewPost={handleNewPost}/>
            </div>

            <div class="StickersAdd">
                <NewDayStickerForm day={day} handleNewDaySticker={handleNewDaySticker} userStickers={user.stickers}/>
            </div>
            

            <br></br>
            <br></br>
            </div>
        )
    }
}

export default Day
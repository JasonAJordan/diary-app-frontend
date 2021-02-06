//import { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import Day from "../Day";
import NewDaySticker from "../dayRenders/NewDayStickerForm";
//import CalendarDay from "./CalendarDay"


function CalendarMaker({daysSliced, month, stickerMode, stickerSelected, handleNewDaySticker}){

    //console.log(daysSliced)
    const monthC = month % 12


    function handleDayStickerClick(event) {
        const dayId = event.target.getAttribute("data-value")
        console.log(event.target.getAttribute("data-value"), "dayID")
        console.log(stickerSelected, "stickerID")
        
        const data = {
            day_id: dayId,
            sticker_id: stickerSelected,
        }

        fetch(`http://localhost:3000/day_stickers`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
        .then(r => r.json())
        .then(newDaySticker => handleNewDaySticker(newDaySticker))

    }


    //This is a helper function for daysMapped rendering, This deals with making each sticker show. 
    function postStickers(stickers){
        const stickersMapped = stickers.map((sticker) => {
            return <img src={sticker.image} alt={sticker.name} width="20" height="20" key={sticker.id}/>
        })
        return <div>{stickersMapped}</div>
    }

    const daysMapped = daysSliced.map((day) => {
        //return <CalendarDay day={day} key={day.id}/>

        //First Part of is for the normal calendar redirects, 
        //This makes diffrenet calendar day boxes based on the attributes in the "day" object
        if (stickerMode === false) {  
            if (day.posts[0] && day.stickers[0]) {
                return (
                    <Link to={`days/${day.id}`} key={day.id}>
                    <div className="calendarDay">
                        {day.date.slice(0,5)}<br/>
                        Post Made!
                        <br/>
                        {postStickers(day.stickers)}
                    </div>
                    </Link>
                )
            } else if (day.posts[0]){
                return (
                    <Link to={`days/${day.id}`} key={day.id}>
                    <div className="calendarDay">
                        {day.date.slice(0,5)}<br/>
                        Post Made!
                    </div>
                    </Link>
                ) 
            } else if (day.stickers[0]){
                return (
                    <Link to={`days/${day.id}`} key={day.id}>
                    <div className="calendarDay">
                        {day.date.slice(0,5)}<br/>
                        {postStickers(day.stickers)}
                    </div>
                    </Link>
                )
            } else {
                return (
                    <Link to={`days/${day.id}`} key={day.id}>
                    <div className="calendarDay">{day.date.slice(0,5)}</div>
                    </Link>
                )
            }
        } else {
            if (day.posts[0] && day.stickers[0]) {
                return (
                    <div key={day.id} className="calendarDay">
                        {day.date.slice(0,5)}<br/>
                        Post Made!
                        <br/>
                        {postStickers(day.stickers)}
                    </div>
                )
            } else if (day.posts[0]){
                return (
                    <div key={day.id} className="calendarDay">
                        {day.date.slice(0,5)}<br/>
                        Post Made!
                    </div>
                ) 
            } else if (day.stickers[0]){
                return (
                    <div key={day.id} className="calendarDay">
                        {day.date.slice(0,5)}<br/>
                        {postStickers(day.stickers)}
                    </div>
                )
            } else {
                return (
                    <div key={day.id} className="calendarDay" onClick={handleDayStickerClick} data-value={day.id}>
                        {day.date.slice(0,5)}
                    </div>
                )
            }

        }

    })

    function weekdayNames(){
        return (
            <div className="weekdays">
                <div className="calendarDayLabels">Sun</div>
                <div className="calendarDayLabels">Mon</div>
                <div className="calendarDayLabels">Tue</div>
                <div className="calendarDayLabels">Wed</div>
                <div className="calendarDayLabels">Thu</div>
                <div className="calendarDayLabels">Fri</div>
                <div className="calendarDayLabels">Sat</div>
            </div>
        )
    }

    if (monthC === 0){
    return (
       
        <div className="calendar">

                {weekdayNames()}
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>

                {daysMapped}

                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <p>{monthC + 1}</p>
        </div>
        
    )} else if (monthC === 1){
        return(
            <div className="calendar">
                {weekdayNames()}
                <div className="calendarDay"></div>

                {daysMapped}

                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <p>{monthC + 1}</p>
            </div>
        )
    } else if (monthC === 2){
        return(
            <div className="calendar">
                {weekdayNames()}
                <div className="calendarDay"></div>

                {daysMapped}

                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <p>{monthC + 1}</p>
            </div>
        )
    } else if (monthC === 3){
        return(
            <div className="calendar">
                {weekdayNames()}
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                {daysMapped}

                <div className="calendarDay"></div>
                <p>{monthC + 1}</p>
            </div>
        )
    } else if (monthC ===4){
        return(
            <div className="calendar">
                {weekdayNames()}
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                {daysMapped}
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <p>{monthC + 1}</p>
            </div>
        )
    } else if (monthC === 5){
        return(
            <div className="calendar">
                {weekdayNames()}
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                {daysMapped}
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <p>{monthC + 1}</p>
            </div>
        )
    } else if (monthC === 6){
        return(
            <div className="calendar">
                {weekdayNames()}
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                {daysMapped}
                <p>{monthC + 1}</p>
            </div>
        )
    } else if (monthC === 7){
        return(
            <div className="calendar">
                {weekdayNames()}
                {daysMapped}
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <p>{monthC + 1}</p>
            </div>
        )
    } else if (monthC === 8){
        return(
            <div className="calendar">
                {weekdayNames()}
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                {daysMapped}
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <p>{monthC + 1}</p>
            </div>
        )
    } else if (monthC === 9){
        return(
            <div className="calendar">
                {weekdayNames()}
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                {daysMapped}
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <p>{monthC + 1}</p>
            </div>
        )
    }else if (monthC === 10){
        return(
            <div className="calendar">
                {weekdayNames()}
                <div className="calendarDay"></div>

                {daysMapped}
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <p>{monthC + 1}</p>
            </div>
        )
    }else if (monthC === 11){
        return(
            <div className="calendar">
                {weekdayNames()}
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                <div className="calendarDay"></div>
                {daysMapped}
                <div className="calendarDay"></div>
                <p>{monthC + 1}</p>
            </div>
        )
    }
        else {
        return <div> loading not yet coded yet</div>
    }

    

}

export default CalendarMaker
import { useState, useEffect }  from "react";
import { useParams, Link } from "react-router-dom";
import Day from "../Day";
//import CalendarDay from "./CalendarDay"


function CalendarMaker({daysSliced, month}){

    console.log(daysSliced)
    const monthC = month % 12


    function postStickers(stickers){
        const stickersMapped = stickers.map((sticker) => {
            return <img src={sticker.image} alt={sticker.name} width="20" height="20"/>
        })

        return <div>{stickersMapped}</div>
    }

    const daysMapped = daysSliced.map((day) => {
        //return <CalendarDay day={day} key={day.id}/>
        if (day.posts[0] && day.stickers[0]) {
            return (
                <Link to={`days/${day.id}`} key={day.id}>
                <div key={day.id} className="calendarDay">
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
                <div key={day.id} className="calendarDay">
                    {day.date.slice(0,5)}<br/>
                    Post Made!
                </div>
                </Link>
            ) 
        } else if (day.stickers[0]){
            return (
                <Link to={`days/${day.id}`} key={day.id}>
                <div key={day.id} className="calendarDay">
                    {day.date.slice(0,5)}<br/>
                    <img src={day.stickers[0].image} alt={day.stickers[0].name} width="100" height="100"/>
                </div>
                </Link>
            )
        } else {
            return (
                <Link to={`days/${day.id}`} key={day.id}>
                <div key={day.id} className="calendarDay">{day.date.slice(0,5)}</div>
                </Link>
            )
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
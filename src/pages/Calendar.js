//import { useState, useEffect }  from "react";
import { useParams, Link } from "react-router-dom";
import CalendarMaker from "./CalendarRenders/CalendarMaker"
import StickerApplyBox from "./CalendarRenders/StickerApplyBox"

import '../App.css'
import { useState } from "react";


function Calendar({days, month, setMonth, user}){

    const [stickerMode, setStickerMode] = useState(false)
    const [stickerSelected, setStickerSelected] = useState(null)
    //console.log(user.days , "userdays")
    console.log(stickerSelected)

    const sliceMonthStart=[0,31,59,90,120,151,181,212,243,273,304,334]
    const sliceMonthEnd =[31,59,90,120,151,181,212,243,273,304,334,365]

    //const [days, setDays] = useState([user.days])

    const daysOrdered = days.sort((day1, day2) => {
        return day1.date.localeCompare(day2.date)
    })
    
    const daysSliced = daysOrdered.slice(sliceMonthStart[month], sliceMonthEnd[month])

    //Moved to CalendarMaker.js! Needed to more dynamic
    // const daysMapped = daysSliced.map((day) => {
    //     return (
    //         <Link to={`days/${day.id}`} key={day.id}>
    //             <div > 
    //                 <h4>{day.date.slice(0,5)}</h4>
    //             </div>
    //         </Link>
    //     )
    // })

    // const daysMappedStickerMode = daysSliced.map((day) => {
    //     return (
    //             <div key={day.id}> 
    //                 <h4>{day.date.slice(0,5)}</h4>
    //             </div>
    //     )
    // })

    function handleNewDaySticker(newDaySticker){
        //console.log.apply(newDaySticker)
        //console.log("asdfasdf")
    }

    const months =[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December", 
    ]

    //console.log(month)

    function handleNextMonth(){
        if(month === 11){
            setMonth(0)
        } else{
        setMonth(month+1)
        }
    }
    function handelPrevMonth(){
        if (month === 0){
            setMonth(11)
        } else {
        setMonth(month-1)
        }
    }

    return(
        <div className="Wholecalendar">
            <h2>Calendar Here!</h2>

            <button onClick={handelPrevMonth}>  Prev </button>
            <h3>{months[month]}</h3>
            <button onClick={handleNextMonth}> Next </button>

            <CalendarMaker daysSliced={daysSliced} 
            month={month} stickerMode={stickerMode}
            stickerSelected={stickerSelected}
            handleNewDaySticker={handleNewDaySticker}
            />

            <StickerApplyBox user={user} 
            stickerMode ={stickerMode} 
            setStickerMode={setStickerMode}
            setStickerSelected={setStickerSelected}
            />
        </div>
    )
}

export default Calendar
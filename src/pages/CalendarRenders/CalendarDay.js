import CalendarMaker from "./CalendarMaker";
import { useParams, Link } from "react-router-dom";

function CalendarDay(day){

    console.log(day[0])

    return (
        // <Link to={`days/${day.id}`} key={day.id}>
        //     <div> 
        //         <h4>{day.slice(0,5)}</h4>
        //     </div>
        // </Link>
        //<div>{day}</div>
        <div>test</div>
    )


}

export default CalendarDay
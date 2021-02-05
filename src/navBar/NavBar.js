import { useParams, Link } from "react-router-dom";

function NavBar({user}){


    if (user){
        return (
            <div>Nav Bar for user
            <Link to={`/`}>Home</Link>
            <Link to={`/`}>Calendar</Link>
            <Link to={`/users/${user.id}`}>User</Link>
        </div>    
        )
    } else {
        return (
            <div>NavBar for not Logined 

                <Link to={`/`}>Home</Link>
                {}
                {/* <Link to={`/users/${user.id}`}>User</Link> */}
            </div>
        )
    }


}

export default NavBar
import { useParams, Link } from "react-router-dom";

function NavBar({user, setUser}){

    function handleLogOut(){

        setUser(null)
        console.log(user)
    }

    if (user){
        return (
            <div>Nav Bar for user
            <Link to={`/`}>Home</Link>
            <Link to={`/calendar`}>MyCalendar</Link>
            <Link to={`/users/${user.id}`}>MyPage</Link>
            <Link to={`/notes`}>My Notes</Link>
            
            <Link to={`/`}><button onClick={handleLogOut}>Log out</button></Link>
            
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
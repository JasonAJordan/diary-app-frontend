import { useParams, Link } from "react-router-dom";
//import { Nav } from "react-bootstrap/Nav"; NOT BOOTSTRAP I hate this
//import styled from 'styled-components';

import '../css/NavBar.css';

function NavBar({user, setUser}){

    function handleLogOut(){

        setUser(null)
        //console.log(user)
    }

    if (user){
        return (
            <div className="navBar">
             
            
            <Link to={`/`}><a className="Nav-Bar-Options">Home</a></Link>
            <Link to={`/calendar`}><a className="Nav-Bar-Options">My Calendar</a></Link>
            <Link to={`/notes`}><a className="Nav-Bar-Options">My Notes</a></Link>
            <Link to={`/users/${user.id}`}><a className="Nav-Bar-Options">My Page</a></Link>


            <div className="button-div"><Link to={`/`}><button onClick={handleLogOut}>Log out</button></Link></div>
            <a className="username">{user.name}</a>

            
            
            </div>    
        )
    } else {
        return (
            <div>
               

                <Link to={`/`}>Home</Link>
                {}
                {/* <Link to={`/users/${user.id}`}>User</Link> */}
                
            </div>
        )
    }


}

export default NavBar
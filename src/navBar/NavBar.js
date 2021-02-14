import { useParams, Link , Redirect} from "react-router-dom";
import React, {useState} from "react";


import '../css/NavBar.css';

function NavBar({user, setUser, navBarSearch, setNavBarSearch, redirect, setRedirect}){
    //console.log(navBarSearch)
    //const [redirect, setRedirect] = useState(false)
    // const []

    function handleLogOut(){
        setUser(null)
    }

    function handleSearch(e){
        e.preventDefault()
        console.log(navBarSearch)
        setRedirect(!redirect)
        // return <Redirect to="/search" />
        //setRedirect(!redirect)
        //redirectToSearch()
        //setNavBarSearch("")
    }

    function redirectToSearch(){
        return (<Redirect to="/search" /> )
    }
    // {redirect ? <Redirect to="/search" /> : null}

    if (user){
        return (
            <div className="navBar">
             
            <Link to={`/`}><a className="Nav-Bar-Options">Home</a></Link>
            <Link to={`/calendar`}><a className="Nav-Bar-Options">My Calendar</a></Link>
            <Link to={`/notes`}><a className="Nav-Bar-Options">My Notes</a></Link>
            <Link to={`/users/${user.id}`}><a className="Nav-Bar-Options">My Page</a></Link>
            <Link to={`/search`}><a className="Nav-Bar-Options">Search</a></Link>

            <form  onSubmit={handleSearch}>
                <input 
                        value={navBarSearch}
                        onChange={(e) => setNavBarSearch(e.target.value)} 
                        type="text"
                        placeholder={"Search"}
                />
            </form>

            {redirect ? <Redirect to="/search" /> : null}


            <div className="button-div"><Link to={`/`}><button onClick={handleLogOut}>Log out</button></Link></div>
            <a className="username">{user.name}</a>
            
            </div>    
        )
    } 
     else {
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
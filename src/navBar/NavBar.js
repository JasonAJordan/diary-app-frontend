import { useParams, Link , Redirect} from "react-router-dom";
import React, {useState} from "react";


import '../css/NavBar.css';

function NavBar({user, setUser }){
    //navBarSearch, setNavBarSearch, redirect, setRedirect 
    //  const [ navSearch, setNavSearch] = useState("")
    //console.log(navBarSearch)
    // const [redirect, setRedirect ] =useState(false)
    //const [redirectToSearch, setRedirectToSearch] = useState(false)
    // const []

    function handleLogOut(){
        setUser(null)
    }

    // function handleSearch(e){
    //     e.preventDefault()
    //     //console.log(navBarSearch)
    //     //setRedirectToSearch(!redirectToSearch)
    //     setSearchTerm(navSearch)
    //     setRedirect(!redirect)
    //     //redirectToSearch()
    //     //setNavBarSearch("")
    // }

    // function redirectToSearch(){
    //     return (<Redirect to="/search" /> )
    // }
    // {redirect ? <Redirect to="/search" /> : null}

    if (user){
        return (
            <div className="navBar" >
             
            <Link to={`/`}><span className="Nav-Bar-Options">Home</span></Link>
            <Link to={`/calendar`}><span className="Nav-Bar-Options">My Calendar</span></Link>
            <Link to={`/notes`}><span className="Nav-Bar-Options">My Scribbles</span></Link>
            <Link to={`/users/${user.id}`}><span className="Nav-Bar-Options">My Page</span></Link>
            <Link to={`/search`}><span className="Nav-Bar-Options">Search</span></Link>

            {/* <form  onSubmit={handleSearch}>
                <input 
                        value={navSearch}
                        onChange={(e) => setNavSearch(e.target.value)} 
                        type="text"
                        placeholder={"Search Your Entries"}
                />
            </form> */}

            {/* {redirectToSearch ? <Redirect to="/search" /> : null} */}


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
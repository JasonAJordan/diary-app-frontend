import React, { useState, useEffect } from "react";
import SearchTermSet from "./SearchRenders/SearchTermSet"
import { Link } from "react-router-dom";

import ResultCard from "./SearchRenders/ResultCard"

function Notes ({user }){
    // setNavBarSearch, navBarSearch 

    //setRedirect(false)
    
    const [searchTerm, setSearchTerm] = useState("")



    const filterPosts = user.posts.filter( post => {
        const cond1 = post.context.toLowerCase().includes(searchTerm.toLowerCase())
        const cond2 = post.title.toLowerCase().includes(searchTerm.toLowerCase())
        return (cond1 || cond2)
    })

    const filterNotes = user.notes.filter( note => {
        const cond1 = note.context.toLowerCase().includes(searchTerm.toLowerCase())
        const cond2 = note.title.toLowerCase().includes(searchTerm.toLowerCase())
        return (cond1 || cond2)
    } )


    const filterPostMapped = filterPosts.map((post) => {
        //console.log(post)
        return (
                <ResultCard post={post} searchTerm={searchTerm} key={post.id}/>
            )
    })

    return (

        <div>
            <br/><br/><br/><br/><br/>
            <h3>SeachPage</h3> 

            <SearchTermSet searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            
            
            <h3>Results</h3>
            {(searchTerm === "") ? null : <div>{filterPostMapped}</div>}
            
        </div>
    )


}

export default Notes
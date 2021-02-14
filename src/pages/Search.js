import React, { useState, useEffect } from "react";
import SearchTermSet from "./SearchRenders/SearchTermSet"
import { Link } from "react-router-dom";

import ResultCard from "./SearchRenders/ResultCard"

function Notes ({user }){
    // setNavBarSearch, navBarSearch 

    //setRedirect(false)
    
    const [searchTerm, setSearchTerm] = useState("")
    const [searchFilter, setSearchFilter] = useState("All")
    const [searchFilter2, setSearchFilter2] = useState("All")
    const [index, setIndex] = useState(0)
    const [showAmount, setShowAmount] =useState(5)


    const filterPosts = user.posts.filter( post => {

        const cond1 = post.context.toLowerCase().includes(searchTerm.toLowerCase())
        const cond2 = post.title.toLowerCase().includes(searchTerm.toLowerCase())

        if(searchFilter2 === "All"){
        return (cond1 || cond2)
        } else if (searchFilter2 === "Title"){
            return  (cond2)
        } else if (searchFilter2 === "Context"){
            return  (cond1)
        } 
    })

    const filterNotes = user.notes.filter( note => {
        const cond1 = note.context.toLowerCase().includes(searchTerm.toLowerCase())
        const cond2 = note.title.toLowerCase().includes(searchTerm.toLowerCase())
        if(searchFilter2 === "All"){
            return (cond1 || cond2)
            } else if (searchFilter2 === "Title"){
                return  (cond2)
            } else if (searchFilter2 === "Context"){
                return  (cond1)
            } 
    } )


    const filterPostMapped = filterPosts.map((post) => {
        return (
                <ResultCard post={post} key={post.id}/>
            )
    })

    const filterNotesMapped = filterNotes.map((note) => {
        return (
            <ResultCard note={note} key={note.id}/>
        )
    })
    

    const filterBOTHMapped = [...filterPosts, ...filterNotes].slice(index, index + showAmount).map((blob) =>{
        const rando = Math.floor(Math.random() * 100000) + 1  
        return (
            <ResultCard blob={blob} key={rando}/>
        )
    })

    function handleSearchTerm(event){
        setSearchFilter(event.target.value)
    }
    function handleSearchTerm2(event){
        setSearchFilter2(event.target.value)
    }
    //console.log []

    //The 3 functions for handling the page changing. 
    function handleNextPage(){
        setIndex(index + showAmount)
    }

    function handlePreviousPage(){
        setIndex(index - showAmount)
    }

    function handleShowAmountChange(event){
        setIndex(0)
        setShowAmount(event.target.value)

    }

    return (

        <div>
            <br/><br/><br/><br/><br/>
            <h3>SeachPage</h3> 
            <h4>Options: </h4>
            
            <div>
                <p>Page: {(Math.floor(index/ showAmount) ) + 1}</p>
                {(index === 0) ? null : <button onClick={handlePreviousPage}>Previous Page</button>}
                {((index + showAmount > filterBOTHMapped.length)  || (searchTerm === "")) 
                ? null : <button onClick={handleNextPage}>Next Page</button>}

                <label>Max Sribbles on One Page:</label>
                    <select name="index" value={showAmount} onChange={handleShowAmountChange} >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                    </select>
               
            </div>

            <label>What to Search in?</label>
            <select name="Where" value={searchFilter} onChange={handleSearchTerm} >
                        <option value="All">All</option>
                        <option value="Entries">Entries</option>
                        <option value="Notes">Notes</option>

            </select>
            <label>Where to Search?</label>
            <select name="How" value={searchFilter2} onChange={handleSearchTerm2} >
                        <option value="All">All</option>
                        <option value="Title">Title</option>
                        <option value="Context">Context</option>

            </select>

            <SearchTermSet searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            
            
            <h3>Results</h3>
            {/* {(searchTerm === "") ? null : <div>{filterPostMapped}</div>}
            {(searchTerm === "") ? null : <div>{filterNotesMapped}</div>} */}
            {(searchTerm === "") ? null : <div>{filterBOTHMapped}</div>}

            
        </div>
    )


}

export default Notes
import React from "react"

function SearchTermSet({searchTerm, setSearchTerm}){

    return (
            <div>
                <input 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder={"Search"}
                    />
            </div>
            )
}

export default SearchTermSet
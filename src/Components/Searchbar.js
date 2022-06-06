import React, { useState } from 'react'

const Searchbar = ({ searchVal,setSearchVal, setGetResults }) => {

    return (
        <div className="searchbar">
            <input type="text" placeholder='Hire Someone'
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
            />
            <button onClick={() => setGetResults(true)}>Search</button>
        </div>
    )
}

export default Searchbar
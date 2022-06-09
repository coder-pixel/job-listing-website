import React, { useContext, useState } from 'react'
import { SiteContext } from '../ContextProvider'

const Searchbar = () => {
    const { searchVal, setSearchVal, setGetResults } = useContext(SiteContext)

    return (
        <div className="searchbar">
            <input type="text" placeholder='Search a category'
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
            />
            <button onClick={() => setGetResults(true)}>Search</button>
        </div>
    )
}

export default Searchbar
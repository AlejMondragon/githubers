import React, { useState, useEffect, useRef } from 'react'
import classes from "./Search.module.css"

const Search = ({ onDebounceSearch }) => {
  const [ showSearchBar , setShowSearchBar ] = useState(false);
  const searchInputBarRef = useRef(null)
  const [ searchInput, setSearchInput ] = useState('alejmondragon')

  const toggleSearch = () => {
    searchInputBarRef.current.focus()
    setShowSearchBar((prevShowSearch) => !prevShowSearch);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchInput.trim().length > 0) {
        onDebounceSearch(searchInput)
      }
    }, 500)

    return (() => {
      clearTimeout(timer)
    })
  }, [searchInput, onDebounceSearch])

  const searchInputHandler = event => {
    setSearchInput(event.target.value)
  }

  return (
    <div className={classes["search-container"]}>
      <div className={`${classes.search} ${showSearchBar ? classes.active : ''}`}>
        <input 
          type="text" 
          className={classes.input} 
          ref={searchInputBarRef} 
          placeholder="Search..." 
          onChange={searchInputHandler}
        />
        <button className={classes.btn} onClick={toggleSearch} >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  )
}

export default Search

import React, {useState} from "react";
import "../styles/Search.css";

function Search({searchValue, handleSearch, searchMovie}){
    return(
        <div className="search-movie-container">
            <input type="text" className="search-movie" onChange={(e)=>handleSearch(e.target.value)} value={searchValue} />
            <button type="button" onClick={searchMovie}>Search</button>
        </div>
        
    )
}

export default Search;
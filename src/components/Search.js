import React from "react";
import "../styles/Search.css";

function Search({searchValue, handleSearch, searchMovie}){
    return(
        <div className="search-movie-container">
            <input type="text" 
                className="search-movie" 
                onChange={(e)=>handleSearch(e.target.value)} 
                value={searchValue}
                placeholder="Search Movie"
                />
            <button type="button" className="btn-search-movie btn" onClick={searchMovie}>Search</button>
        </div>
        
    )
}

export default Search;
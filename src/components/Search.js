import React from "react";
import propTypes from "prop-types";
import "../styles/Search.css";

function Search({searchValue, handleSearch, searchMovie}){
    return(
        <div className="search-movie-container">
            <input type="text" 
                className="search-movie" 
                onChange={(e)=>handleSearch(e.target.value)} 
                value={searchValue}
                placeholder="Search Movie/Series"
                />
            <button type="button" className="btn-search-movie btn btn-ok" onClick={searchMovie}>Search</button>
        </div>
        
    )
}

export default Search;

Search.propTypes = {
    searchValue:propTypes.string,
    handleSearch:propTypes.func,
    searchMovie:propTypes.func
}
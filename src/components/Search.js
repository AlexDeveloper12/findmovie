import React, {useState} from "react";
import "../styles/Search.css";

function Search({searchValue}){
    return(
        <div className="search-movie-container">
            <input type="text" className="search-movie"/>
            <button type="button">Search</button>
        </div>
        
    )
}

export default Search;
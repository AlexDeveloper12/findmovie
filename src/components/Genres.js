import React from "react";
import "../styles/Genres.css";

function Genres({genreItem, handleFilter}){
    return(
        <div className="genre-item-container">
            <span className="genre-item unbounded-font" onClick={()=>handleFilter(genreItem)}>{genreItem}</span>
        </div>
    )

}

export default Genres;
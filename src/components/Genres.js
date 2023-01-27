import React from "react";
import "../styles/Genres.css";

function Genres({genreItem, handleFilter}){
    return(
        <div style={{margin:'10px', display:'inline'}}>
            <span className="genre-item unbounded-font" onClick={()=>handleFilter(genreItem)}>{genreItem}</span>
        </div>
    )

}

export default Genres;
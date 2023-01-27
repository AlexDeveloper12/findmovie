import React from "react";
import "../styles/Genres.css";

function Genres({genreItem}){
    return(
        <div style={{margin:'10px', display:'inline'}}>
            <span className="genre-item unbounded-font">{genreItem}</span>
        </div>
    )

}

export default Genres;
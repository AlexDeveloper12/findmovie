import React from "react";
import "../styles/MovieItem.css";

function MovieItem({movie}){
    return(
        <div className="movie-item">
            <img src={movie.Images[2]} width={300} height={250}/>
            {movie.Title}
        </div>
    )

}

export default MovieItem;
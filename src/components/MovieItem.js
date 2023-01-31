import React, { useContext } from "react";
import propTypes from "prop-types";
import "../styles/MovieItem.css";

function MovieItem({ togModal, movie }) {
    return (
        <>
            <div className="movie-item" onClick={() => togModal(movie)}>
                <div>
                <img src={movie.Poster} className="movie-poster" alt={movie.Title} />    
                </div>
                <div className="movie-main-info-container">
                    <p onClick={() => togModal(movie)} className="unbounded-font" >
                        {movie.Title}
                    </p>
                    <p style={{textOverflow:'ellipsis'}}>
                    ({movie.Plot})
                    </p>
                </div>

            </div>

        </>
    )

}

export default MovieItem;

MovieItem.propTypes = {
    showModal: propTypes.bool,
    toggleFavourite: propTypes.func,
    isFavourite: propTypes.string
}
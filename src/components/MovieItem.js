import React, { useContext } from "react";
import propTypes from "prop-types";
import "../styles/MovieItem.css";

function MovieItem({ togModal, movie }) {
    return (
        <>
            <div >
                <div>
                    <img src={movie.Poster} alt={movie.Title} width={400} height={400} />
                    <div>
                        <h2>{movie.Title}</h2>
                        <p>{movie.Plot}</p>
                    </div>
                </div>
            </div>

            {/* <div className="movie-item" onClick={() => togModal(movie)}>
                <div>
                    
                </div>
                <div style={{ minWidth: '50%' }} className="movie-main-info-container">
                    <a onClick={() => togModal(movie)} className="unbounded-font" >
                        {movie.Title} &nbsp;
                        ({movie.Year})
                    </a>
                    <div style={{ marginTop: '10px' }}>
                        <span className="unbounded-font">{movie.Metascore !== "N/A" ? `Metascore: ${movie.Metascore}%` : "Metascore not available"}</span>
                    </div>
                </div>

            </div> */}

        </>
    )

}

export default MovieItem;

MovieItem.propTypes = {
    showModal: propTypes.bool,
    toggleFavourite: propTypes.func,
    isFavourite: propTypes.string
}
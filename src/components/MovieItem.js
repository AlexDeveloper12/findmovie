import React, { useContext } from "react";
import propTypes from "prop-types";
import "../styles/MovieItem.css";
import MovieModal from "./Modal/MovieModal";
import { movieContext } from "./Context/movieContext";

function MovieItem({togModal, movie }) {

    // const { movie, togModal } = useContext(movieContext);
    return (<>

        <div className="movie-item" onClick={()=>togModal(movie)}>
            <div>
                <img src={movie.Poster} className="movie-poster" alt={movie.Title} />
            </div>
            <div style={{ minWidth: '50%' }} className="movie-main-info-container">
                <a onClick={()=>togModal(movie)} className="unbounded-font" >
                    {movie.Title} &nbsp;
                    ({movie.Year})
                </a>
                <div style={{ marginTop: '10px' }}>
                    <span className="unbounded-font">{movie.Metascore !== "N/A" ? `Metascore: ${movie.Metascore}%` : "Metascore not available"}</span>
                </div>
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
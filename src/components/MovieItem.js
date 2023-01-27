import React,{useContext} from "react";
import propTypes from "prop-types";
import "../styles/MovieItem.css";
import MovieModal from "./Modal/MovieModal";
import { movieContext } from "./Context/movieContext";

function MovieItem({ showModal, toggleFavourite,isFavourite }) {

    const {movie,togModal} = useContext(movieContext);
    return (<>

        <div className="movie-item" onClick={togModal}>
            <img src={movie.Poster} width={300} height={250} />
            <div>
                <a onClick={togModal} >
                    {movie.Title} &nbsp;
                    ({movie.Year})
                </a>
                <div>
                <span>{movie.Metascore !== "N/A" ? `Metascore: ${movie.Metascore}%` : "Metascore not available" }</span>
                </div>
            </div>

        </div>
        <MovieModal
            showModal={showModal}
            isFavourite={isFavourite}
        />
    </>
    )

}

export default MovieItem;

MovieItem.propTypes = {
    showModal:propTypes.bool,
    toggleFavourite:propTypes.func,
    isFavourite:propTypes.string
}
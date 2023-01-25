import React,{useContext} from "react";
import propTypes from "prop-types";
import "../styles/MovieItem.css";
import MovieModal from "./Modal/MovieModal";
import { movieContext } from "./Context/movieContext";

function MovieItem({ showModal, toggleFavourite,isFavourite }) {

    const {movie,togModal} = useContext(movieContext);
    return (<>

        <div className="movie-item" onClick={togModal}>
            <img src={movie.Images[2]} width={300} height={250} />
            <div>
                <a onClick={togModal} >
                    {movie.Title}
                </a>
            </div>

        </div>
        <MovieModal
            showModal={showModal}
            toggleFavourite={toggleFavourite}
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
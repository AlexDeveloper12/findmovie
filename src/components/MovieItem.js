import React,{useContext} from "react";
import "../styles/MovieItem.css";
import MovieModal from "./Modal/MovieModal";
import { movieContext } from "./Context/movieContext";

function MovieItem({ showModal, toggleFavourite, addToFavourite,isFavourite }) {

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
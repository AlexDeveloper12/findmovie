import React from "react";
import "../styles/MovieItem.css";
import MovieModal from "./Modal/MovieModal";

function MovieItem({ movie, showModal, toggleModal, toggleFavourite, addToFavourite,isFavourite }) {
    return (<>

        <div className="movie-item" onClick={toggleModal}>
            <img src={movie.Images[2]} width={300} height={250} />
            <div>
                <a onClick={toggleModal} >
                    {movie.Title}
                </a>
            </div>

        </div>
        <MovieModal
            movie={movie}
            showModal={showModal}
            toggleModal={toggleModal}
            toggleFavourite={toggleFavourite}
            addToFavourite={addToFavourite}
            isFavourite={isFavourite}
        />
    </>
    )

}

export default MovieItem;
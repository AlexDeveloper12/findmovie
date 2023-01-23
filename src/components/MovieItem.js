import React from "react";
import "../styles/MovieItem.css";
import MovieModal from "./Modal/MovieModal";

function MovieItem({ movie, showModal, toggleModal,toggleFavourite }) {
    return (<>

        <div className="movie-item">
            <img src={movie.Images[2]} width={300} height={250} />
            <div>
                <span onClick={toggleModal} >
                    {movie.Title}
                </span>
            </div>

        </div>
        <MovieModal
            movie={movie}
            showModal={showModal}
            toggleModal={toggleModal}
            toggleFavourite={toggleFavourite}
        />
    </>
    )

}

export default MovieItem;
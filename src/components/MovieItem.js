import React from "react";
import "../styles/MovieItem.css";
import MovieDetailsModal from "./Modal/MovieModal";

function MovieItem({ movie, showModal, toggleModal }) {
    return (<>

        <div className="movie-item">
            <img src={movie.Images[2]} width={300} height={250} />
            <div>
                <span onClick={toggleModal} >
                    {movie.Title}
                </span>
            </div>

        </div>
        <MovieDetailsModal
            movie={movie}
            showModal={showModal}
            toggleModal={toggleModal}
        />
    </>
    )

}

export default MovieItem;
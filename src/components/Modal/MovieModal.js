import React, { useContext } from "react";
import ReactModal from "react-modal";
import { FaStar } from "react-icons/fa";
import propTypes from "prop-types";
import MovieDetails from "./MovieDetails";
import { movieContext } from "../Context/movieContext";
import { movieInfoCustomStyles } from "./CustomStyles";

ReactModal.setAppElement('#root');

function MovieModal({ showModal, isFavourite }) {

    const { movie, togModal, addFav } = useContext(movieContext);
    console.log('moviemodal');
    console.log(movie);

    return (
        <div>
            <ReactModal
                isOpen={showModal}
                style={movieInfoCustomStyles}
            >
                <div>

                    <button className="btn btn-ok" onClick={() => addFav(movie)} > <FaStar color={isFavourite ? "yellow" : "white"} /></button>
                    <button className="btn btn-ok" style={{ float: 'right' }} onClick={togModal}>X</button>
                    <div>
                        <MovieDetails
                        />

                    </div>

                </div>

            </ReactModal>

        </div>
    )

}

export default MovieModal;

MovieModal.propTypes = {
    showModal: propTypes.bool,
    isFavourite: propTypes.string
}
import React from "react";
import ReactModal from "react-modal";
import propTypes from "prop-types";
import MovieDetails from "./MovieDetails";
import { movieInfoCustomStyles } from "./CustomStyles";
import "../../styles/Modal/MovieModal.css";

ReactModal.setAppElement('#root');

function MovieModal({ showModal, entertainmentValue, togModal, addFav }) {

    return (
        <div>
            <ReactModal
                style={movieInfoCustomStyles}
                isOpen={showModal}
            >
                <div>
                    <button className="btn btn-ok" onClick={() => addFav(entertainmentValue)} > Add to favourites</button>
                    <button className="btn btn-ok btn-x" onClick={() => togModal(entertainmentValue)}>X</button>
                    <div>
                        <MovieDetails
                            entertainmentValue={entertainmentValue}
                        />

                    </div>
                    <div className="btn-close-container">
                        <button className="btn btn-ok" type="button" onClick={() => togModal(entertainmentValue)}>Close</button>
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
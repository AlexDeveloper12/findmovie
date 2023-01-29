import React from "react";
import ReactModal from "react-modal";
import propTypes from "prop-types";
import MovieDetails from "./MovieDetails";
import { movieInfoCustomStyles } from "./CustomStyles";
import "../../styles/Modal/MovieModal.css";

ReactModal.setAppElement('#root');

function MovieModal({ showModal, entertainmentValue, togModal, addFav, isFavourite }) {

    return (
        <div>
            <ReactModal
                style={movieInfoCustomStyles}
                isOpen={showModal}
            >
                <div>
                    <button className="btn btn-ok" onClick={() => addFav(entertainmentValue)} > { isFavourite > -1 ? <span>Remove from favourites</span> : <span>Add to favourites</span> } </button>
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
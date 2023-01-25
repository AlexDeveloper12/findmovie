import React, { useContext } from "react";
import ReactModal from "react-modal";
import { FaStar } from "react-icons/fa";
import MovieDetails from "./MovieDetails";
import { movieContext } from "../Context/movieContext";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '50%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '80%'
    },
};

ReactModal.setAppElement('#root');

function MovieModal({ showModal, toggleFavourite, isFavourite }) {

    const {movie,togModal,addFav} = useContext(movieContext);

    return (
        <div>
            <ReactModal
                isOpen={showModal}
                style={customStyles}
            >
                <div>

                    <button className="btn" onClick={() => addFav(movie)} > <FaStar color={isFavourite ? "yellow" : "white"} /></button>
                    <button className="btn" style={{ float: 'right' }} onClick={togModal}>X</button>
                    <div>
                        <MovieDetails
                            toggleModal={togModal}
                        />

                    </div>

                </div>

            </ReactModal>

        </div>
    )

}

export default MovieModal;
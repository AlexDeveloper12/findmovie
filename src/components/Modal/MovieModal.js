import React from "react";
import ReactModal from "react-modal";
import { FaStar } from "react-icons/fa";
import MovieDetails from "./MovieDetails";

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

function MovieModal({ movie, showModal, toggleModal,toggleFavourite, isFavourite }) {
    return (
        <div>
            <ReactModal
                isOpen={showModal}
                style={customStyles}
            >
                <div>
                    
                    <button className="btn" onClick={toggleFavourite} > <FaStar color={isFavourite  ? "yellow" : "white"} /></button>
                    <button className="btn" style={{ float: 'right' }} onClick={toggleModal}>X</button>
                    <div>
                        <MovieDetails
                            movie={movie} 
                            toggleModal={toggleModal}                           
                        />

                    </div>

                </div>

            </ReactModal>

        </div>
    )

}

export default MovieModal;
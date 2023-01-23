import React from "react";
import ReactModal from "react-modal";
import MovieDetails from "./MovieDetails";

const customStyles = {
    content: {
        top: '30%',
        left: '50%',
        right: '50%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

ReactModal.setAppElement('#root');

function MovieDetailsModal({ movie, showModal, toggleModal }) {
    return (
        <div>
            <ReactModal
                isOpen={showModal}
                style={customStyles}
            >
                <div>
                    <button onClick={toggleModal}>X</button>
                    <div>
                        <MovieDetails
                            movie={movie}
                            />
                        
                    </div>

                </div>

            </ReactModal>

        </div>
    )

}

export default MovieDetailsModal;
import React from "react";
import ReactModal from "react-modal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
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
                        <span>
                            {movie.Plot}
                        </span>
                    </div>

                </div>

            </ReactModal>

        </div>
    )

}

export default MovieDetailsModal;
import React from "react";
import ReactModal from "react-modal";
import MovieRating from "../MovieRating";

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

    const renderStarRating = () => {

        const ratingFloor = Math.floor(movie.imdbRating);
        let rating = [];
        console.log(ratingFloor);

        for (var i = 0; i <= ratingFloor; i++) {
            rating.push(<MovieRating />);
        }

        return rating;

    }

    return (
        <div>
            <ReactModal
                isOpen={showModal}
                style={customStyles}
            >
                <div>
                    <div style={{float:'right'}}>
                    <button onClick={toggleModal}>X</button>
                    </div>
                    
                    <div>
                        <table className="movie-details-table">
                            <tbody>
                                <tr>
                                    <td>Plot: </td>
                                    <td>{movie.Plot}</td>
                                </tr>
                                <tr>
                                    <td>Runtime: </td>
                                    <td>{movie.Runtime} </td>
                                </tr>
                                <tr>
                                    <td>Release Date:</td>
                                    <td>{movie.Released}</td>
                                </tr>
                                <tr>
                                    <td>Rating:</td>
                                    <td>{renderStarRating()}</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>

                </div>

            </ReactModal>

        </div>
    )

}

export default MovieDetailsModal;
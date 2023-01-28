import React from "react";
import ReactModal from "react-modal";
import { customStyles } from "./CustomStyles";

function DeleteFavouriteModal({ movieID, deleteMovie,toggleModal,isModalOpen }) {

    return (
        <div>
            <ReactModal
                style={customStyles}
                isOpen={isModalOpen}
            >
                <h3>Are you sure you want to delete this movie from your favourites list?</h3>
                <div>
                    <button className="btn btn-ok" type="button" onClick={() => deleteMovie(movieID)} >Yes</button>
                    <button className="btn btn-cancel" type="cancel" onClick={toggleModal}>Cancel</button>
                </div>
            </ReactModal>
        </div>
    )
}

export default DeleteFavouriteModal;
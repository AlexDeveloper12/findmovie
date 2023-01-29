import React from "react";
import ReactModal from "react-modal";
import { deleteModalCustomStyles } from "./CustomStyles";

ReactModal.setAppElement('#root');

function DeleteFavouriteModal({ movieID, deleteMovie,toggleModal,isModalOpen }) {

    return (
        <div>
            <ReactModal
                style={deleteModalCustomStyles}
                isOpen={isModalOpen}
            >
                <div style={{textAlign:'center'}}>
                <h3>Are you sure you want to delete this movie from your favourites list?</h3>
                </div>
                
                <div style={{textAlign:'center'}}>
                    <button className="btn btn-ok" type="button" onClick={() => deleteMovie(movieID)} >Yes</button>
                    <button className="btn btn-cancel" type="cancel" onClick={()=>toggleModal(-1)}>Cancel</button>
                </div>
            </ReactModal>
        </div>
    )
}

export default DeleteFavouriteModal;
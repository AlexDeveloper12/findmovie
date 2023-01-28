import React from "react";
import { FaTrash } from "react-icons/fa";
import DeleteFavouriteModal from "./Modal/DeleteFavouriteModal";

function Favourites({ favouriteItem,toggleDeleteModal,deleteMovie,isModalOpen }) {
    return (
        <div>
            <span>{favouriteItem["Title"]}</span>
            <span><FaTrash color="red" onClick={toggleDeleteModal}/></span>
            
            <DeleteFavouriteModal
                movieID={favouriteItem["ID"]}
                isModalOpen={isModalOpen}
                toggleModal={toggleDeleteModal}
                deleteMovie={deleteMovie}
            />
        </div>
    )
}

export default Favourites;
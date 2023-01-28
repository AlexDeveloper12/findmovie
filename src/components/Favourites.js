import React from "react";
import { FaTrash } from "react-icons/fa";
import DeleteFavouriteModal from "./Modal/DeleteFavouriteModal";

function Favourites({ favouriteItem, toggleDeleteModal, deleteMovie, isModalOpen,index }) {
    return (
        <>
            <tr>
                <td>
                    <span>{favouriteItem["Title"]}</span>
                </td>
                <td>
                    <span><FaTrash color="red" onClick={()=>toggleDeleteModal(favouriteItem["ID"])} /></span>
                </td>

            </tr>

           
        </>


    )
}

export default Favourites;
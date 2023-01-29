import React from "react";
import { FaTrash } from "react-icons/fa";

function Favourites({ favouriteItem, toggleDeleteModal }) {
    return (
        <tr>
            <td>
                <span>{favouriteItem["Title"]}</span>
            </td>
            <td>
                <span>{favouriteItem["Year"]}</span>
            </td>
            <td>
                <span>{favouriteItem["Rated"]}</span>
            </td>
            <td>
                <span>{favouriteItem["Awards"]}</span>
            </td>
            <td>
                <span><FaTrash color="red" onClick={() => toggleDeleteModal(favouriteItem["ID"])} /></span>
            </td>
        </tr>
    )
}

export default Favourites;
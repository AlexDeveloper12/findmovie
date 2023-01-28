import React from "react";
import { FaTrash } from "react-icons/fa";

function Favourites({ favouriteItem }) {
    return (
        <div>
            <span>{favouriteItem["Title"]}</span>
            <span><FaTrash color="red"
            /></span>
        </div>
    )
}

export default Favourites;
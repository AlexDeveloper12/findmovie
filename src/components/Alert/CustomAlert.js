import React from "react";

function CustomAlert({ alertMessage, isShown }) {
    return (
        <div  className={`alert ${isShown ? "alert-shown" : "alert-hidden"} alert-container`}>
            <span className="alert-message">{alertMessage}</span>
        </div>
    )
}

export default CustomAlert;
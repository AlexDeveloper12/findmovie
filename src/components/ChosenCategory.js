import React from "react";

function ChosenCategory({chosenCategory}){
    return(
        <div className="chosen-category-container">
        {
          chosenCategory !== "" ?
            <span className="unbounded-font" style={{ marginLeft: '10px' }}>Category: {chosenCategory}</span>
            : null
        }
      </div>
    )
}

export default ChosenCategory;
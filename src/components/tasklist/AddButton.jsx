import React from "react";




function AddButton(props){
    return (
        <div>
            <button onClick={props.onClick} className="add-btn grow">{props.children}</button>
        </div>
    );
}


export default AddButton;
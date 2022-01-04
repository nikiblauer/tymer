import React from "react";


function ControlButton(props) {

    let customStyle = {
        fontSize: (props.size==="big") ? "28px" : "18px" 
    }

    return (
        <div>
            <button onClick={props.onClick} className="control-btn grow" style={customStyle}>{props.children}</button>
        </div>
    );
}


export default ControlButton;


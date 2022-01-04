import React from "react";


function TimerDisplay(props) {
    
    return (
        <div>
            <h1 className="time-display">{props.children}</h1>
        </div>
    );
}


export default TimerDisplay;


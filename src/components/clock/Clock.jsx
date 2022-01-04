import React from "react";
import BackgroundCircle from "./BackgroundCircle";
import Timer from "./Timer";



function Clock(props) {
    return (
        <div className="clock">
            <BackgroundCircle />
            <Timer />
        </div>
    );
}

export default Clock;
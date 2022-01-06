import React from "react";
import BackgroundCircle from "./BackgroundCircle";
import Timer from "./Timer";
import "../../styles/clock.css";


function Clock(props) {
    return (
        <div className="clock">
            <BackgroundCircle />
            <Timer />
        </div>
    );
}

export default Clock;
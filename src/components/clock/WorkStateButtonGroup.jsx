import React from "react";
import WorkStateButton from "./WorkStateButton";

function WorkStateButtonGroup(props) {
    return (
        <form onChange={props.onChange}>
            <input type="radio" id="work" name="workstate-group" value="work" defaultChecked/>
            <label className="workstate-btn grow" htmlFor="work">WORK</label>
            <input type="radio" id="break" name="workstate-group" value="break"/>
            <label className="workstate-btn grow" htmlFor="break">BREAK</label>
        </form>
    );
}


export default WorkStateButtonGroup;


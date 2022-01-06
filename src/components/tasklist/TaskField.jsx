import React from "react";
import { useState } from "react/cjs/react.development";
import TrashImg from "../../images/trash.png";

function TaskField(props){

    let [check, setCheck] = useState(false);


    function handleCheck(e) {
        setCheck((prev) => {
            return !prev;
        });


    }

    


    return (
        <div className={"taskfield "} onClick={handleCheck}>
            <input type="checkbox" id={props.id} checked={check} name=" " />
            <label htmlFor="scales">{props.children}</label>
            <img src={TrashImg} onClick={() => {props.onDelete(props.id)}} className={"delete-btn " + (check ? "visible" : "")}></img>
        </div>
    );
}


export default TaskField;
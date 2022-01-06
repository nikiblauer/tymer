import React from "react";
import { useState } from "react/cjs/react.development";



function TaskField(props){

    let [check, setCheck] = useState(false);

    function handleCheck(e) {
        setCheck((prev) => {
            return !prev;
        });
    }


    return (
        <div className="taskfield" onClick={handleCheck}>
            <input type="checkbox" id={props.id} checked={check} name=" " />
            <label htmlFor="scales">{props.children}</label>
        </div>
    );
}


export default TaskField;
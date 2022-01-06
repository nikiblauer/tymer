import React from "react";



function TasklistHeading(props){
    return (
        <div>
            <h1 className="tasklist-heading">{props.children}</h1>
        </div>
    );
}


export default TasklistHeading;
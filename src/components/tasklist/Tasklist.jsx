import React from "react";
import AddTextInput from "./AddTextInput";
import AddButton from "./AddButton";
import TasklistHeading from "./TasklistHeading";
import TaskField from "./TaskField";
import { useState } from "react/cjs/react.development";
import AddTask from "./AddTask";


function Tasklist(props){

    let [tasks, setTasks] = useState([
        {title: "To Add a new Task ->"},
        {title: "Create title ->"},
        {title: "Click on ADD NEW."}
    ]);

    function createList(task, index) {

        return <TaskField key={index}>{task.title}</TaskField>
    }

    function addNewTask(task) {
        console.log(task);

        setTasks((prev) => {
            return [...prev, task];
        });
    }


    return (
        <div className="tasklist">
            <TasklistHeading>TASKS</TasklistHeading>
            <div className="list">
                {tasks.map(createList)}
            </div>
            <AddTask addNew={addNewTask} />
        </div>
    );
}


export default Tasklist;
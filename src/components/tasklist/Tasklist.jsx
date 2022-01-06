import React from "react";
import AddTextInput from "./AddTextInput";
import AddButton from "./AddButton";
import TasklistHeading from "./TasklistHeading";
import TaskField from "./TaskField";
import { useState } from "react/cjs/react.development";
import AddTask from "./AddTask";
import "../../styles/tasklist.css";

function Tasklist(props){

    let [tasks, setTasks] = useState([
        {id: Math.floor(Math.random() * 1000000000), title: "To Add a new Task ->"},
        {id: Math.floor(Math.random() * 1000000000), title: "Create title ->"},
        {id: Math.floor(Math.random() * 1000000000), title: "Click on ADD NEW."}
    ]);

    function createList(task, index) {

        return <TaskField onDelete={deleteTask} id={task.id} key={index}>{task.title}</TaskField>
    }

    function addNewTask(task) {
        console.log(task);

        setTasks((prev) => {
            return [...prev, task];
        });
    }

    function deleteTask(id){
        setTasks((prev) => {
            return prev.filter(function(value, index, arr){ 
                return id != value.id;
            });
        });

        console.log("Deleted: " + id);
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
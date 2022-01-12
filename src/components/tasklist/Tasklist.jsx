import React from "react";
import TasklistHeading from "./TasklistHeading";
import TaskField from "./TaskField";
import { useState } from "react";
import AddTask from "./AddTask";
import "../../styles/tasklist.css";

function Tasklist(props){

    let storedTasklist = JSON.parse(localStorage.getItem("tasklist"));
    if(storedTasklist === null){
        storedTasklist = [{id: Math.floor(Math.random()*10000000000), title: "To add a new Task ->"},
        {id: Math.floor(Math.random()*10000000000), title: "Create title ->"},
        {id: Math.floor(Math.random()*10000000000), title: "Click on ADD NEW"}
    ];

    localStorage.setItem("tasklist", JSON.stringify(storedTasklist));
    }


    let [tasks, setTasks] = useState(storedTasklist);

    function createList(task, index) {

        return <TaskField onDelete={deleteTask} id={task.id} key={task.id}>{task.title}</TaskField>
    }

    function addNewTask(task) {
        console.log(task);

        setTasks((prev) => {
            let newTasks = [...prev, task];
            
            localStorage.setItem("tasklist", JSON.stringify(newTasks));
            
            return newTasks;
        });
    }

    function deleteTask(id){
        setTasks((prev) => {
            let newTasks =  prev.filter(function(value, index, arr){ 
                return id !== value.id;
            });

            localStorage.setItem("tasklist", JSON.stringify(newTasks));

            return newTasks;
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
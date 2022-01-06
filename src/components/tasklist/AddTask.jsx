import React, { useState } from "react";
import AddTextInput from "./AddTextInput";
import AddButton from "./AddButton";


function AddTask(props){

    let [inputText, setInputText] = useState("");


    function handleChange(text){
        
        setInputText(text);
    }


    
    function addNew(){
        const task = {title: inputText};

        props.addNew(task);
    }

    return (
        <div>
            <AddTextInput handleChange={handleChange}/>
            <AddButton onClick={addNew}>ADD NEW</AddButton>
        </div>
    );
}


export default AddTask;
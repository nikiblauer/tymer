import React, { useState } from "react";
import AddTextInput from "./AddTextInput";
import AddButton from "./AddButton";


function AddTask(props){

    let [inputText, setInputText] = useState("");


    function handleChange(text){
        
        setInputText(text);
    }

    function resetInputText(){
        setInputText("");
    }

    
    function addNew(){
        const task = {id: Math.floor(Math.random() * 1000000000), title: inputText};

        props.addNew(task);
    }

    return (
        <div>
            <AddTextInput handleChange={handleChange} text={inputText}/>
            <AddButton onClick={() => {addNew(); resetInputText();}}>ADD NEW</AddButton>
        </div>
    );
}


export default AddTask;
import React, { useState } from "react";




function AddTextInput(props){

    let [inputText, setInputText] = useState("");

    function handleChange(event){
        


        const text = event.target.value;
        setInputText(text);

        props.handleChange(text);
    }

    return (
        <div>
            <input onChange={handleChange} className="add-text" placeholder="Add a new Task to Tasklist." value={inputText}/>
        </div>
    );
}


export default AddTextInput;
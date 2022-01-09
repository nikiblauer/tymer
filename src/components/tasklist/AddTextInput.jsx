import React from "react";




function AddTextInput(props){

    function handleChange(event){
        const text = event.target.value;
        props.handleChange(text);
    }

    return (
        <div>
            <input onChange={handleChange} className="add-text" placeholder="-> Do homework, Read a book, ..." value={props.text}/>
        </div>
    );
}


export default AddTextInput;
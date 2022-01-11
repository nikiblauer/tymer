import React from "react";

import "../../styles/main.css";
import "../../styles/settings.css";
import TimeSetting from "./TimeSetting";
import { useState } from "react";


function Settings(props){

    let [workTime, setWorkTime] = useState("25:00");
    let [breakTime, setBreakTime] = useState("05:00");

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;

        if(name==="work-set"){
            setWorkTime(value);
        }
        else if(name==="break-set"){
            setBreakTime(value);
        }
    }

    function save(event){
        console.log("Saved");
    }


    return (
        <div className="settings">
            <div className="time-setting">
                <label >WORK TIME: </label>
                <input name="work-set" className="dark" onChange={handleChange} type="text" value={workTime} pattern="[0-9]{2}:[0-9]{2}"></input>
            </div>

            <div className="time-setting">
                <label >BREAK TIME: </label>
                <input name="break-set" className="light" onChange={handleChange} type="text" value={breakTime} pattern="[0-9]{2}:[0-9]{2}"></input>
            </div>

            <button className="save-btn grow" onClick={save}>SAVE</button>
        </div>
    );
  }
  
  export default Settings;
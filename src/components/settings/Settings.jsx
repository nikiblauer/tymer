import React from "react";

import "../../styles/main.css";
import "../../styles/settings.css";
import TimeSetting from "./TimeSetting";
import { useState } from "react";


function Settings(props){

    let storedWorkTime = localStorage.getItem("worktime");
    let storedBreakTime = localStorage.getItem("breaktime");

    if(storedWorkTime === null){
        storedWorkTime = "25:00";
    }
    if(storedBreakTime === null){
        storedBreakTime = "05:00";
    }


    let [workTime, setWorkTime] = useState(storedWorkTime);
    let [breakTime, setBreakTime] = useState(storedBreakTime);
    let [saved, setSaved] = useState(false);

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
        localStorage.setItem("worktime", workTime);
        localStorage.setItem("breaktime", breakTime);


        console.log("Saved: ");
        console.log("WORK TIME: " + workTime);
        console.log("BREAK TIME: " + breakTime);
        setSaved(true);
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
            <p style={{visibility: saved ? "visible" : "hidden", paddingTop: "-5px", paddingBottom: "5px", color: "#A9A9AC"}}>Settings saved!</p>
        </div>
    );
  }
  
  export default Settings;
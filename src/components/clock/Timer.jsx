import React, { useState } from "react";
import WorkStateButtonGroup from "./WorkStateButtonGroup";
import ControlButton from "./ControlButton";
import TimerDisplay from "./TimerDisplay";
import ClockAlarm from "../../media/clock-alarm.mp3";



function Timer(props) {
    
    let workTime = localStorage.getItem("worktime");
    let breakTime = localStorage.getItem("breaktime");

    if(workTime === null){
        workTime = "25:00";
    }
    if(breakTime === null){
        breakTime = "05:00";
    }


    
    let [timerSeconds, setTimerSeconds] =  useState(time2seconds(workTime));
    let [timerInterval, setTimerInterval] = useState(null);
    let [workState, setWorkState] = useState("work");
    
    function countDown() {
        

        setTimerSeconds((prev) => {
            if((prev-1) < 0){
                let alarmAudio = new Audio(ClockAlarm);
                alarmAudio.play();
                stopCountDown();
    
                
                return 0;
            } else {
                return (prev-1);
            }
        });


    }

    function startCountDown()  {

        let seconds = timerSeconds;



        if((timerInterval === null) && (timerSeconds !== 0)){
            setTimerSeconds(() => {
                return seconds;
            });
            const interval = setInterval(countDown, 1000)
            setTimerInterval(interval);
        } else {
           
        }
    }

    function stopCountDown(){
        setTimerInterval(null);    

        const interval_id = setInterval(function(){}, Number.MAX_SAFE_INTEGER);

        // Clear any timeout/interval up to that id
        for (let i = 1; i < interval_id; i++) {
            window.clearInterval(i);
        }

    }

    function time2seconds(time){
        let [minutes, seconds] = time.split(":");
        
        minutes = parseInt(minutes);
        seconds = parseInt(seconds);


        return (minutes*60) + seconds;
    }

    function seconds2time (seconds){
        let timeMinutes =  Math.floor(seconds / 60).toString();
        let timeSeconds = seconds % 60 ? (seconds % 60).toString() : '00';

        

        //Check if value is 2-digit or single digit
        if(timeMinutes.length < 2){
            timeMinutes = '0' + timeMinutes;
        }
        if(timeSeconds.length < 2) {
            timeSeconds = '0' + timeSeconds;
        }

        return (timeMinutes + ":" + timeSeconds);
    }


    function changeWorkState(event){
        
        const eventID = event;

        if(eventID === "work"){
            setWorkState("work");
            stopCountDown();
            setTimerSeconds(time2seconds(workTime));
        } else if (eventID==="break") {
            setWorkState("break");
            stopCountDown();
            setTimerSeconds(time2seconds(breakTime));
        }

    }

    return (
        <div className="timer-container">
            <WorkStateButtonGroup onChange={changeWorkState}/>
            <TimerDisplay>{seconds2time(timerSeconds)}</TimerDisplay>   
            <ControlButton size="big" onClick={() => startCountDown() }>START</ControlButton>
            <ControlButton size="small" onClick={() => stopCountDown() }>STOP</ControlButton>

        </div>
    );
}


export default Timer;
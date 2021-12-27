import './Styles/Header.css'
import React, {useState,useEffect} from "react";


function  Header(){
    const [timer, addtimer]= useState(0)
    const [drive, superdrive]=useState(false)
    useEffect(()=>{
        let seconds=null;
        if(drive){
            seconds=setInterval(()=>{
                addtimer(prevTime=>prevTime+10)
            },10)}
        else{clearInterval(seconds)};
        return ()=>clearInterval(seconds)
    },[drive])

    return (
        <div className="card1">
            <div>
                <h1>Timer Hook</h1>
                <span id="numb">{("0"+Math.floor((timer/600000)%60)).slice(-2)}:</span>
                <span id="numb">{("0"+Math.floor(timer/60000)%60).slice(-2)}:</span>
                <span id="numb">{("0"+Math.floor((timer/1000)%60)).slice(-2)}:</span>
                <span id="numb">{("0"+(timer/10)%1000).slice(-2)}</span>



            </div>
            <div className="group">
                <div className="but">
                    <button type="button" className="btn btn-primary" onClick={()=>superdrive(true)}>Start</button>
                </div>
                <div className="but">
                    <button type="button" className="btn btn-primary" onClick={()=>superdrive(false)}>Stop</button>
                </div>
                <div className="but">
                    <button type="button" className="btn btn-primary" onClick={()=>{addtimer(0);
                        superdrive(false);}}>Reset</button>
                </div>
            </div>
        </div>
    )
}
export  default Header
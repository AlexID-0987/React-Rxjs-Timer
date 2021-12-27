import React, {Component, useEffect, useState} from "react";
import '../Styles/newtime.css'




function Newtime() {
    const [time,settime]=useState(0)
    const [timeron, settimeron]=useState(false)
    const step=10
    useEffect(()=>{
        let int=null;
        if(timeron){
            int=setInterval(()=>{
               settime(prevTime=>prevTime+10)
            },step)
        }else{
            clearInterval(int)
        }
        return ()=>clearInterval(int)
    },[timeron])

    return(
        <div className="time">
          <div><span id="numb">{("0"+Math.floor((time/600000)%60)).slice(-2)}:</span>
              <span id="numb">{("0"+Math.floor(time/60000)%60).slice(-2)}:</span>
              <span id="numb">{("0"+Math.floor((time/1000)%60)).slice(-2)}:</span>
              <span id="numb">{("0"+(time/10)%1000).slice(-2)}</span></div>
            <div>
                {!timeron && time===0 && (
                <button id="btn" className="btn btn-primary" onClick={()=>settimeron(true)}>Start</button>
                )}
            </div>
            <div>
                {timeron && (
                <button id="btn" className="btn btn-primary" onClick={()=>settimeron(false)}>Stop</button>
                )}
            </div>
            <div>
                {!timeron && time !==0 &&(
                <button id="btn" className="btn btn-primary" onClick={()=>settimeron(true)}>Wait</button>
                )}
                <div>
                    {timeron && (
                        <button id="btn" className="btn btn-primary" onClick={()=>settimeron(false)}>Wait</button>
                    )}
                </div>
            </div>
            <div>
                {!timeron && time> 0 && (
                <button id="btn" className="btn btn-primary" onClick={()=>settime(0)}>Reset</button>
                )}
            </div>








        </div>
    )
}
export default Newtime
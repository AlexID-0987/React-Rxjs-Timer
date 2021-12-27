import '../Styles/item.css'
import {concat, interval, of, repeatWhen, scan, startWith, Subject, takeWhile, share, filter, takeUntil} from 'rxjs'
import React, {useEffect, useState} from "react"
import {clear} from "@testing-library/user-event/dist/clear";

const timedrive=interval(10).pipe(
    startWith(0),
    scan(time=>time+1),

    //takeWhile( )

).pipe(share())


function ItemTime() {
    const [state, setState] = useState(0)
    const [timeron, settimeron] = useState(false)
    useEffect(() => {
        if(timeron){
            timedrive.subscribe(setState)
        }



    }, [timeron])


    return (
        <div className="ontime">
            <h1>Timer Observable</h1>
            <span id="numb">{("0" + Math.floor((state / 60000) % 60)).slice(-2)}:</span>
            <span id="numb">{("0" + Math.floor(state / 6000) % 60).slice(-2)}:</span>
            <span id="numb">{("0" + Math.floor((state / 100) % 60)).slice(-2)}:</span>
            <span id="numb">{("0" + (state / 1) % 100).slice(-2)}</span>
            <div>
                <button id="btn" className="btn btn-primary" onClick={()=>settimeron(true)}>Start</button>
            </div>




        </div>
    )


}

export default ItemTime
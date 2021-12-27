import '../Styles/Begin.css'
import {useEffect, useState} from "react";
import {interval, startWith, scan, takeWhile, concat, of, repeatWhen, Subject, share, filter, takeUntil} from "rxjs";

const action$=new Subject();

function Begintime(){
    const down$= interval(150).pipe(
        startWith(100),
        scan(t=>t-1),
        takeWhile(t=>t>0)
    ).pipe(share())

    const obs$=concat(down$,of("End")).pipe(
        repeatWhen(()=>action$)
    );

    const [time, nexttime]=useState()
    useEffect(()=>{
        const drive=obs$.subscribe(nexttime);
        return ()=>drive.unsubscribe()

    },[])
    return(
        <div className="card">
            <div>
                <span>{time}</span>
                <div>
                    <button id="btn" className="btn btn-primary" onClick={()=>action$.next('YES')}>REStart</button>
                </div>


            </div>
        </div>
    )
}

export  default Begintime
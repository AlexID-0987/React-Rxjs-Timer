import './Styles/Body.css'
import React from "react";

class Body extends React.Component{
    constructor(props) {
        super(props);
        this.state={begin:0}
        this.interval=this.interval.bind(this)
        this.updatebegin=this.updatebegin.bind(this)


    }


    interval(){
        this.upitem=setInterval(()=>{
            this.setState(prevState=>({
                begin:prevState.begin +1,
            }));


        },1000)

    }

    updatebegin(){
        clearInterval(this.upitem)
    }

    render(){
        return(
            <div className="card">
                <div>
                    <h1>Timer</h1>
                    <h1>{this.state.begin}</h1>
                    <h1>{this.state.min}</h1>
                </div>
                <div className="group">
                <div className="but">
                    <button type="button" className="btn btn-primary" onClick={this.interval}>Start</button>
                </div>
                <div className="but">
                    <button type="button" className="btn btn-primary" onClick={this.updatebegin}>Stop</button>
                </div>
                </div>
            </div>
        )
    }
}

export default Body
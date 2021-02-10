import React, { Component } from 'react';
import './style.css';

class Clock extends Component {
    state = {
        time: 10
    };
    componentDidMount() {

        setInterval(() => {
            let time = this.state.time

            if (time <= 0) {
                clearInterval();
            } else {
                this.setState({ time: time -= 1}); 
            }

        }, 1000);
    }
  

    render() {
        return (
            <div className="clock">
                <h2 className="time">{this.state.time}</h2>
            </div>
        )
    }
  
    

}

export default Clock;
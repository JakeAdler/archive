import React, { Component } from 'react';
import './Score.css';


class Score extends Component {

    render(){
        return(
        <div className='d-flex flex-row justify-content-around'>
            <h3>Score: {this.props.score}</h3>
            <h3>Best Score: {this.props.bestScore}</h3>
        </div>
        )
    }
}

export default Score;
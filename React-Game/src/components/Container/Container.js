import React, { Component } from 'react';
import './Container.css';
import Game from '../Game/Game';
import Title from '../Title/Title'

class Container extends Component {
    state ={
        started: false
    };

    render() {
        return (
        <div>    
          <Title />
          <Game />
        </div>
        )
    }
}

export default Container;
import React, { Component } from 'react';
// import Clock from '../Clock/Clock';
import StartingScreen from '../StartingScreen/StartingScreen';
import List from '../List/List'
import Score from '../Score/Score'
import './Game.css'


class Game extends Component {

    state = {
        started: false,
        score : 0,
        bestScore: 0,
        status: 'loading',
    }
   
    startGame = () => {
        this.setState({ started: true})
    }
    addScore = () => {
            this.setState({
                score: this.state.score + 1
            },
            ()=>{
                if(this.state.score > this.state.bestScore){
                    this.setState({bestScore: this.state.score})
                }
            })
            
        
    }
    scoreToZero = () => {
        this.setState({score: 0})
    }
  

    render() {
        return (
            <div className="Game container">
                
                
                {
                    !this.state.started?
                        <div>
                        <StartingScreen />
                        <button onClick={this.startGame}> GO</button>
                        </div>
                    :
                    <div>
                            <Score score={this.state.score} bestScore={this.state.bestScore}/>
                        <div>
                        { this.state.score < 0?
                            <h3>You lose</h3>
                            :
                           <List scoreChange={this.addScore.bind(this)} clearScore={this.scoreToZero.bind(this)}/>
                        }
                        </div>
                    </div>
                }
            
            </div>
        )
    }
    
}

export default Game;
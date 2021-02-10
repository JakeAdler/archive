import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './Card.css'
class GameCard extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
   

    handleClick = (e) => {
        this.props.changeScore(e.target.id)
    } 
  
    render(){
        return(
           
            <Card onClick={this.handleClick}>
                <Card.Img variant="top" src={this.props.url} 
                id={this.props.breed}/>
                <Card.Title>{this.props.breed}</Card.Title>
            </Card>
        
        )
    }
}

export default GameCard;
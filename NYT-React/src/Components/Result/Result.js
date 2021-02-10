import React, { Component } from 'react';
import './Result.css'
export default class extends Component {
    render(){
        return(
            <div className='Result'>
                <div className='d-flex flex-row justify-content-between'>
                    <div className='d-flex flex-column resultText'>
                        <a href={this.props.link}>
                        <h3>{this.props.title}</h3>
                        </a>
                        <p>{this.props.description}...</p>
                    </div>
                    { this.props.image ?
                            <img src={this.props.image} alt={this.props.alt} width='75px' height='75px'/>
                            :
                            <div></div>
                        }
                </div>
            </div>
        )
    }
}
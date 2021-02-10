import React, { Component } from 'react';
import Result from '../Result/Result'
import './Saved.css'

export default class Saved extends Component {
    constructor(props){
        super(props)
        this.state = {
            saved: this.props.articles,
        }
    }
    deleteArticle = (event) => {
        const article = event.target.parentNode.parentNode
        console.log(article.id)
        event.preventDefault()
    }
    render(){
        return(
            <div className='Saved'>
                <h1>Saved</h1>
                <div className='savedHeader'>
                    <h4>Last Updated:</h4>
                    <h6>GET TIME</h6>
                </div>
                <div className='savedBody'>
                    {
                        this.state.saved.length ?
                            this.state.saved.map((elem, j)=>{
                                return(
                                    <div className='d-flex flex-row align-items-center justify-content-around' key={j} id={j}>
                                        <Result  link={elem.link} title={elem.title}
                                        description={elem.description} image = {elem.image}
                                        alt = {elem.alt} 
                                        className ='savedResult'
                                        />  
                                        <button className='deleteButton hvr-bounce-in' onClick={this.deleteArticle}>
                                            <div className='d-flex flex-column'>
                                                <i className="far fa-trash-alt"></i>
                                                Delete
                                            </div>
                                        </button>    
                                    </div>
                                )
                            })
                        :
                        <div></div>
                    }
                </div>
            </div>
        )
    }
}
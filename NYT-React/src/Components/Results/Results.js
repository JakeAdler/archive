import React, { Component } from 'react';
import Result from '../Result/Result';
import axios from 'axios'
import './Results.css'


export default class Results extends Component {
    constructor(props){
        super(props)
        this.saveArticle.bind(this)

    }
    componentDidMount(){
        // Change to api route
        axios.get('http://localhost:3001/')
            .then((res)=>{
                console.log(res.data)
                this.setState({results: res.data})
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    saveArticle = (event) => {
            event.preventDefault()
            const article = event.target.parentNode.parentNode.id
            if (article !== "") {                
                console.log(article);  
            } else {
                alert('Couldnt save article')
                //GRACEFUL DEGRADATION NEEDED
            }
            
            axios.post('http://localhost:3001/API/save', 
            {
                id: article
            })
                .then((res)=>{
                    console.log(res)
                    this.props.handleSave(res)
                })
                .catch((err)=>{
                    console.log(err);
                })
          
    }

    state={
        results: [],
        lastUpdateTime: "",
        lastSearch: ""
    }
    
    render(){
        return(
            <div className='Results'>
                <h1>Results</h1>
                <div className='resultsHeader'>
                    <h4>Last Updated: </h4>
                    <h6>
                    <span>GET TIME FROM DB </span>
                    <span>With the Search </span>
                    <span>GET LAST SEARCH FROM DB</span>
                    </h6>
                </div>
                <div className='resultBody'>
                    {
                        this.state.results.map((elem, i)=>{
                            return(
                                <div key={i} id={elem._id} className='d-flex flex-row align-items-center justify-content-around resultInfo'>
                                    <Result link={elem.link} title={elem.title}
                                    description={elem.description} image= {elem.image}
                                    alt={elem.alt} 
                                    />
                                    <button className='saveBtn hvr-bounce-in' onClick={this.saveArticle} >
                                        <div className='d-flex flex-column' id={i}>
                                            <i className="far fa-save fa-1x" id={i}></i>
                                            Save
                                        </div>
                                    </button>
                                </div>
                              
                            )       
                        })
                    }
                </div>
                <hr />
            </div>
        )
    }
}
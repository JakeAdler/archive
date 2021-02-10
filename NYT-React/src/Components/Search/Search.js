import React, {Component} from 'react';

import './Search.css';
export default class Search extends Component {
    constructor(props){
        super(props);
        this.state= {
            topicValue: "",
            startYearValue: "",
            endYearValue: ""
        };
        this.handleSubmit.bind(this);
        this.handleChange.bind(this);
    }
    handleSubmit = (event) =>{
        alert('Form was submitted ' + this.state.json());
        event.preventDefault();
    }

    handleChange = (event) =>{
        const name = event.target.name
        const value = event.target.value
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='Search'>
                <form onSubmit={this.handleSubmit} className='d-flex flex-column'>
                
                    <input type="text" name="topicValue" value={this.state.topicValue} placeholder='Topic' 
                    className='textInput' onChange={this.handleChange}/>

                    <input type="text" name="startYearValue" value={this.state.startYearValue} placeholder='Start Year' 
                    className='textInput' onChange={this.handleChange}/>

                    <input type="text" name="endYearValue" value={this.state.endYearValue} placeholder='End Year' 
                    className='textInput' onChange={this.handleChange}/>

                    <input className='submitBtn' type='submit' value='Submit'/>

                </form>
                <hr/>
            </div>
        )
    }
}

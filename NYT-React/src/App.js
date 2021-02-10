import React, { Component } from 'react';
import './App.css';
import Container from './Components/Container/Container.js';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import Results from './Components/Results/Results';
import Saved from './Components/Saved/Saved';

class App extends Component {
  constructor(props){
    super(props)
    this.handleSave.bind(this)
  }
  state = {
    savedArticles: []
  }
  handleSave = (dbArticle) => {
    this.setState({savedArticles: [...this.state.savedArticles, dbArticle.data]},
      (err) => {
          if (err) {
            console.log(err)
          } else {
          
            console.log(dbArticle, this.state.savedArticles)
          }
      })
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Header/>
          <Search/>
          <Results handleSave={this.handleSave}/>
          <Saved articles={this.state.savedArticles} refresh={this.refresh}/>
        </Container>
      </div>
    );
  }
}

export default App;

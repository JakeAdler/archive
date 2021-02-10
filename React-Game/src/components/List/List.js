import React, { Component } from 'react';
import Card from '../Card/Card';
import breeds from './breeds.json';
import axios from 'axios';
//import Card from '../Card/Card'

class List extends Component {

    state = {
        imgList: [],
        currentImgs: [],
        usedImg: []
    }
    
    getImg = () =>{
        let data = []
        let breedList = []
        let Breeds = Object.keys(breeds)
        for (let i = 0; i < 25; i++) {
            let randomNum = Math.floor(Math.random() * Breeds.length);
            let Key = Breeds[randomNum];
            breedList.push(Key)
            let link =`https://dog.ceo/api/breed/${Key}/images/random`;
            data.push(axios.get(link))
        }
        // Resolving all the promises
        Promise.all(data).then((res)=> {
            let imglist = res.map((img, i) => {
                return {...img, breed: breedList[i]};
            })
            this.setState({imgList: imglist},
                () => {

                    let newImgs = []
                    for (let i = 0; i < 10; i++) {
                        newImgs.push(this.state.imgList[i])
                    }
                    
                    this.setState({currentImgs: newImgs},
                        ()=> {
                            console.log(this.state, "INITIAL state")
                        })
                        
                })
            
        }) 
    
    }
  
    addScore = (id) => {
      
        if (this.state.usedImg.length > 0){
            // if this is not the first image being clicked, check if it has been clicked before
        
           let isFound = this.state.usedImg.indexOf(id)
                if (isFound > -1){
                // if the image has been clicked before, then set score to 0 and reset usedImg to empty
                 this.getImg()
                 this.props.clearScore()
                 this.setState({usedImg: []})
                } else {
                    //if image is not found, add it to usedImg
                    this.setState({usedImg: [...this.state.usedImg, id]},
                        ()=>{
                            console.log(this.state, "ADDED TO USED IMG")
                            this.getNewImg(id)
                        })  
                        // Set score to 0 and get new img
                        this.props.scoreChange()
                       
                }   
        } else if (this.state.usedImg.length === 0) {
            // if image is the first being clicked, add it straight to usedImg
            this.setState({usedImg: [...this.state.usedImg, id]},
                ()=>{
                    console.log(this.state, "USED IMAGE SETTING STATE")        
                    this.props.scoreChange()
                    this.getNewImg(id);
                })    
        }  
    }
    getNewImg = (id) =>{
        let arr = this.state.currentImgs
        console.log(arr, "STATE FROM GETNEWIMAGE")
        let randomNum = Math.floor(Math.random() * this.state.imgList.length);
        this.state.currentImgs.filter( obj =>{
            if (obj.breed === id) {
                let index = this.state.currentImgs.indexOf(obj)
                console.log(index)
                arr.splice(index, 1, this.state.imgList[randomNum]);
                
            }
        })
    }

    componentDidMount(){
        this.getImg()
     
    }
    render(){
        
        if (this.state.currentImgs.length) {
            return this.state.currentImgs && this.state.currentImgs.map((img, i)=>{
                return(
                <Card url={img.data.message} breed={img.breed} 
                    changeScore={this.addScore} key={i}/>
                    )
            })
        } else {
            return <h3>Loading...</h3>
        } 
        
    }   

}
export default List;
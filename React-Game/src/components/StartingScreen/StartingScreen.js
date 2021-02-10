import React, { Component } from 'react';

class StartingScreen extends Component {


    render(){
        return(
            <div className="instructions">
                <h3>Instructions</h3>
                <p>To play, you may click on any picture, but only once! Each unique picture that you click earns you 1 pt.</p>
            </div>
        )
      
    }
}

export default StartingScreen;
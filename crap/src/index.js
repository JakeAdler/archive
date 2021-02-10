import React from 'react';
import { render } from 'react-dom';
const App = () => (
    <div style={{textAlign:"center", width: "50%", margin: "0 auto", height: "35vh", backgroundColor: "lightblue", fontFamily: 'Arial'}}>
        <h1 style={{marginTop: '10vh'}}>Hello, world</h1>
        <h3>Edit <code style={{backgroundColor: '#eee', padding: '2px'}}>src/index.js</code> to get started</h3>
        <span style={{fontSize: '8em'}}>💩</span>
    </div>
)
render(<App/> , document.getElementById("root"))
import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';

export default class MainBackground extends Component {
    constructor(props){
        super(props)
    }
    render() {
      const ScreenHeight = Dimensions.get("screen").height;  
      return (
          <LinearGradient
            colors={['#8f00ff', '#961bff', '#9d2aff', '#a336ff', '#a940ff', '#a13ef1', '#993ce4', '#913ad6', '#7a2cb8', '#641e9c', '#4f1180', '#3a0365']}
            style={style={
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height:'100%',
              }}>
            {this.props.children}
            </LinearGradient>

      );
    }
  }

//background-image: linear-gradient(to bottom, #8f00ff, #961bff, #9d2aff, #a336ff, #a940ff, #a13ef1, #993ce4, #913ad6, #7a2cb8, #641e9c, #4f1180, #3a0365)
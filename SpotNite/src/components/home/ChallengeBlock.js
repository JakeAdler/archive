import React, { Component } from 'react'
import {
    View,
    Text,
    Image
} from 'react-native';

export default class ChallengeBlock extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    };
    render(){
        const styles = this.styles
        return(
            <View style={styles.Block}>
                <Text style={styles.ChallengeStyle}>{this.props.Title}</Text>
            </View>
        )
    }
    styles = {
        Block: {
            width: 275,
            maxHeight: 50,
            minheight: 25,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 3,
            marginBottom: 3,
            borderWidth: 2,
            borderColor: '#000000',
            padding: 2
    
        },
        Title: {
            fontFamily: 'Burbank',
            textAlign: 'center',
            color: '#e0e0e0',
            marginRight: 10,
            fontSize: 20,
        },
        ChallengeStyle : {
            flexWrap: "wrap",
            textAlign: 'left',
            marginLeft: 15,
            marginRight: 15,
        }
    


    }

}
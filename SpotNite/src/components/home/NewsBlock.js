import React, { Component } from 'react';
import {
    Text,
    Image,
    View
} from 'react-native';

export default class NewsBlock extends Component {

    render(){
        const styles = this.styles;
        return(
            <View style={styles.Block}>
                <Text style={styles.Title}>{this.props.Title}</Text>
                {this.props.children}
            </View>
        );
    };

    styles = {
        Block: {
            width: 250,
            minHeight: 150,
            maxHeight: 250,
            marginRight: 'auto',
            marginLeft: 'auto',
            marginBottom: 10,
            borderWidth: 2,
            borderColor: '#000000',
            padding: 2
        },
        Title: {
            fontFamily: 'Burbank',
            textAlign: 'center',
            color: '#fdfdfd',
            fontSize: 20
        }
    };
}
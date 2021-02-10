import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class FullScreenUserStats extends Component {
    render(){
        const styles = this.styles
        return(
            <View style={styles.Container}>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>

            </View>
        )
    }
    styles = {
        Container : {
            padding: 50

        }
    }
}
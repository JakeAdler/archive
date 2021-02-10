import React, { Component } from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import AuthBackground from './AuthBackground';

export default class AuthLoading extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        const styles = this.styles
        return(
            <AuthBackground>
                <View style={{flex: 1}}>
                    <Text style={styles.LoadingText}> LOADING</Text>
                </View>
            </AuthBackground>
        )
    }

    styles = {
        LoadingText: {
            marginTop: 20,
            marginLeft: 'auto',
            marginRight: 'auto',
        }
    }
}
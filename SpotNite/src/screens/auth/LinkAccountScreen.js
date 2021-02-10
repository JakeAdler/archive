import React, { Component } from 'react';
import {
    KeyboardAvoidingView,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';
import style from '../../constants/AuthStyles';
import AuthBackground from '../../components/auth/AuthBackground';
import firebase from 'react-native-firebase';


export default class LinkAccountScreen extends Component {
    constructor(props){
        super(props);
        this.state ={
            usernameInput: ''
        }
    };

    componentWillMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                this._redirect();
            } else{
                return
            }
        })
       
    };
    _redirect = () =>{
        this.props.navigation.navigate('Load')
    }
    

    _linkAccount = () => {
        const Username = this.state.usernameInput;
        if (this.state.usernameInput){
            this.props.navigation.navigate('ConfrimAccount', {
                username: Username
            })
        } else {
            return false;
            //TODO: better validation UI
        }
    }

    render(){
        return(
            <KeyboardAvoidingView
            behavior={ "padding"}
            style={{ flex: 1 }}
        >
            <AuthBackground>
                <View style={{ 
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    }}>
                    <Text style={style.Title}>LINK YOUR ACCOUNT</Text>
                    <Image 
                    source={require('../../assets/images/CTLFN.png')}
                    style={style.CuddleTeamStyle}
                    />
                    <View style={style.InputGroup}>
                        <Text style={style.InputInstrunctions}>ENTER YOUR EPIC GAMES USERNAME</Text>
                        <TextInput 
                        value={this.state.usernameInput}
                        onChangeText={(usernameInput)=> this.setState({usernameInput})}
                        style={style.InputStyle}
                        />
                        <TouchableOpacity onPress={this._linkAccount} title='Link Account' style={style.Button2}>
                            <Text style={style.ButtonText}>LINK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </AuthBackground>
            </KeyboardAvoidingView>
        )
    }
}
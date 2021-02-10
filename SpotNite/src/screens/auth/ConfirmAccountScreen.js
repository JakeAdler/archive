import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    AsyncStorage,
    ProgressViewIOS,
    TouchableOpacity,
    Button
} from 'react-native';
import AuthBackground from '../../components/auth/AuthBackground'
import AuthLoading from '../../components/auth/AuthLoading';
import firebase from 'react-native-firebase';
import Style from '../../constants/AuthStyles'

export default class ConfrimAccountScreen extends Component {
    constructor(props){
        super(props);
        this.state ={
            totalWins: null,
            username: '',
            usernameEncoded: '',
            userUid: '',
            platforms: null,
            isLoading: true,
        }
    };

    _getInitialInfo = () =>{
        const { navigation } = this.props;
        const Username = navigation.getParam('username', 'NO-USERNAME');
        Username.replace(/\"/g, ""); //Regex removes quotes from username 
        const UsernameURI = encodeURI(Username);
        fetch(`https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=${UsernameURI}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((res)=>{
          
            const user = JSON.parse(res._bodyText)
            this.setState({
                userUid: user.uid,
                username: Username,
                usernameEncoded: UsernameURI,
                platforms: user.platforms
               
            });
            return user
        })
        .then(()=>{
            this._getWinsInfo()
        })
        .catch((err)=>{
            return console.log(err);
        })
    }

    _getWinsInfo = () => {
        fetch(`https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=${this.state.userUid}`)
        .then((res)=>{
            const wins = JSON.parse(res._bodyText);
            const TotalWins = wins.overallData.defaultModes.placetop1;

            this.setState({
                totalWins: TotalWins,
                isLoading: false
            });
        })
        .catch((err)=>{
            console.log(err)
        })
    };

 

    componentWillMount(){       
       this._getInitialInfo();
    };

    _confrimAccount = () => {
        //TODO: Firebase AUTH
        const username = this.state.username;
        const userUID = this.state.userUid;
        let multi_set_pairs = [
            ['username', JSON.stringify(username)],
            ['userUID', JSON.stringify(userUID)]
        ];

        firebase.auth().signInAnonymously()
        .then((user) => {
            console.log(user.isAnonymous);
         })
        .catch((err)=>{
            console.log(err);
        });

        AsyncStorage.multiSet(multi_set_pairs, (err)=>{
            if(err){
                console.log(err)
            }
        })
        
        this.props.navigation.navigate('Load');
       
    };

    _denyAccount = () => {
        this.props.navigation.goBack();
    }

    render(){
       if(this.state.isLoading) {
           return(
            <View style={{flex: 1}}>
                <AuthLoading/>
            </View>
           )
       }
        return(
            <AuthBackground>
                <View style={{
                    flex: 1, 
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                    <Text style={Style.Title2}>CONFIRM YOUR ACCOUNT</Text>
                    <Image source={require('../../assets/images/LFN.png')}
                    style={Style.LlamaStyle}/>
                    <Text style={Style.InputInstrunctions}>IS THIS YOU?</Text>
                    <View style={Style.ConfrimUserBox}>
                        <Text style={Style.UserNameStyle}>{this.state.username}
                        </Text>
                        <View style={Style.InfoContainer}>
                            <View style={Style.WinsBox}>
                                <Text style={Style.InfoTitle}>Wins</Text>
                                <Text style={Style.Wins}>{this.state.totalWins}</Text>
                            </View>
                            <View style={Style.PlatformsBox}>
                                <Text style={Style.InfoTitle}>{
                                    this.state.platforms.length === 1 ?
                                    'Platform'
                                    :
                                    'Platforms'
                                }</Text>
                                <View style={Style.Platforms}>
                                {
                                    this.state.platforms.map((platform, i)=>{
                                        if(platform === 'pc') { 
                                        return(
                                           <Image style={Style.PCLogo} source={require('../../assets/images/PCLogo.png')} key={i}/>
                                        )
                                        } else if (platform === 'xb1') {
                                            return(
                                                <Image style={Style.PCLogo} source={require('../../assets/images/XBLogo.png')} key={i}/>
                                            )
                                        }
                                    })
                                }
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={Style.ConfirmBox}>
                        <TouchableOpacity onPress={this._confrimAccount} title='Confirm Account' style={Style.Button1}>
                            <Text style={Style.Confirm}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._denyAccount} title='Confirm Account' style={Style.Button1}>
                            <Text style={Style.Deny}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </AuthBackground>
        )
    }
}
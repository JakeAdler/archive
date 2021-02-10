// @ts-check
import { StyleSheet } from 'react-native';
import Colors from './Colors';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.RoveOrange
    },
    title: {
      paddingBottom: 75,
      fontFamily: 'Satisfy',
      fontSize: 110,
      textShadowColor: 'rgba(0, 0, 0, 0.6)',
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 10,
      padding: 15,
      color: '#ffffff'
      
    },
    loginContainer: {
      paddingBottom: 60
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    forgotAndRegister: {
      color: "black"
    },
    signInPrompt: {
      padding: 20,
      fontSize: 18,
      textAlign: 'center',
      color: "#ffffff",
      fontFamily: 'Quicksand'
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
      fontSize: 18,
      fontFamily: 'Quicksand'
    },
    signupButton: {
        backgroundColor: "#FF4DFF",
      },
      signUpText: {
        color: 'white',
      }
});

export default styles;
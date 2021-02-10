import React, {Component} from 'react';
import FirebaseApp from '../../utils/firebase';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
require('firebase/auth');



const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [ 
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    privacyPolicyUrl: '/',
    tosUrl: '/'
};

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: ''
        }
    }
    componentDidMount() {
        let ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);
    }
    render() {
        return <div id="firebaseui-auth-container"></div>
    }
} 

export default Login;
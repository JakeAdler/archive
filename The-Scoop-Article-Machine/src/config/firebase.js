import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
require('dotenv').config();

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: "",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};
let Firebase
if (!firebase.apps.length) {
    Firebase = firebase.initializeApp(firebaseConfig);
} else {
    Firebase = firebase
}

export {
    Firebase,
};
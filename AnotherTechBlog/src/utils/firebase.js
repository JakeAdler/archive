import * as firebase from 'firebase';


const config = {
    apiKey: `${process.env.GATSBY_FIREBASE_API_KEY}`,
    authDomain: `${process.env.GATSBY_FIREBASE_AUTH_DOMAIN}`,
    databaseURL: `${process.env.GATSBY_FIREBASE_DB_URL}`,
    projectId: `${process.env.GATSBY_FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.GATSBY_FIREBASE_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID}`,
    appId: `${process.env.GATSBY_FIREBASE_APP_ID}`
}

let FirebaseApp;
let db;

if (!firebase.apps.length){
    FirebaseApp = firebase.initializeApp(config);
    db = FirebaseApp.firestore();
};
export default FirebaseApp;
export { db }
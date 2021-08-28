import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyA68ZOE-EPoi315zwdTFLuoaiIWFXeLx5w",
    authDomain: "facebook-messenger-a9d6d.firebaseapp.com",
    projectId: "facebook-messenger-a9d6d",
    storageBucket: "facebook-messenger-a9d6d.appspot.com",
    messagingSenderId: "230133687542",
    appId: "1:230133687542:web:6e250e441d88ac4fe578d7",
    measurementId: "G-KHVF5RJKJN"

});
const db = firebaseApp.firestore();

export default db;
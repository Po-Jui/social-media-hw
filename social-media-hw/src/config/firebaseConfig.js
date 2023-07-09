import * as firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = { 
    apiKey: "AIzaSyClPApyyscNBd8LTAq4lCkzmced3aObCEY",
    authDomain: "social-media-hw-ba647.firebaseapp.com",
    databaseURL: "https://social-media-hw-ba647.firebaseio.com",
    projectId: "social-media-hw-ba647",
    storageBucket: "social-media-hw-ba647.appspot.com",
    messagingSenderId: "1082953373952",
    appId: "1:1082953373952:web:2baea0d4f0b089af53fbe5",
    measurementId: "G-WLYDT9BD4R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const firebaseAuth = firebase.auth();
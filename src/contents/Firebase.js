import React from 'react'
import firebase from 'firebase'
var firebaseApp = firebase.initializeApp({
     // Your web app's Firebase configuration
    apiKey: "AIzaSyByLiG8xry25B9RITuLErzI7lp7DaRn7Rk",
    authDomain: "portfolio-contact-form-7c9fb.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-7c9fb.firebaseio.com",
    projectId: "portfolio-contact-form-7c9fb",
    storageBucket: "portfolio-contact-form-7c9fb.appspot.com",
    messagingSenderId: "335287932151",
    appId: "1:335287932151:web:2fb03b792190c13a37eff2"

})
 var db = firebaseApp.firestore();

 export { db }
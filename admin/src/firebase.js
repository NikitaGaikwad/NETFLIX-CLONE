
//NEW2

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCUv5xrKGR_o4V67NEGoiLJsPER0kveesc",
    authDomain: "netflix-90701.firebaseapp.com",
    projectId: "netflix-90701",
    storageBucket: "netflix-90701.appspot.com",
    messagingSenderId: "1014470842985",
    appId: "1:1014470842985:web:6847511058428a95ce20f8",
    measurementId: "G-C7CTVBF1EP"
  }

  firebase.initializeApp(firebaseConfig)
  const storage = firebase.storage()
  export default storage

import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAG1RZc75mPyIm3Y8WRk87RLtL70LBBl1o",
    authDomain: "reacttodo-2b8a0.firebaseapp.com",
    databaseURL: "https://reacttodo-2b8a0.firebaseio.com",
    projectId: "reacttodo-2b8a0",
    storageBucket: "reacttodo-2b8a0.appspot.com",
    messagingSenderId: "56855550718",
    appId: "1:56855550718:web:8a21dc8e9f38aad85c23af",
    measurementId: "G-BGZ1NQLGLQ"
  };
  

  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  
  // Initialize Firebase
  export  {auth};
  
  export default firebase.initializeApp(firebaseConfig);
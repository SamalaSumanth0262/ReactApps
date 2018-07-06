import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAEVMzPw_cifhF3bu9Yt3VChHdHS6BtEIk",
    authDomain: "signin-signup-b855e.firebaseapp.com",
    databaseURL: "https://signin-signup-b855e.firebaseio.com",
    projectId: "signin-signup-b855e",
    storageBucket: "signin-signup-b855e.appspot.com",
    messagingSenderId: "562134937749"
  };
  const fire = firebase.initializeApp(config);
  export default fire; 

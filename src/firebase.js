import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({


    apiKey: "AIzaSyBaOy0xXlKpWtmlMx9AtySBZv9VsWwweDQ",
    authDomain: "fb-messenger-9e08f.firebaseapp.com",
    databaseURL: "https://fb-messenger-9e08f.firebaseio.com",
    projectId: "fb-messenger-9e08f",
    storageBucket: "fb-messenger-9e08f.appspot.com",
    messagingSenderId: "739222122",
    appId: "1:739222122:web:698b2ab1332e74b354a013",
    measurementId: "G-X4EHTGCX6T"
});


const db = firebaseApp.firestore();

  export {db};
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAyGmoNFyvERzWq4kauKSGqpHRLS568uFc",
    authDomain: "twitter-clone-a1f7b.firebaseapp.com",
    databaseURL: "https://twitter-clone-a1f7b.firebaseio.com",
    projectId: "twitter-clone-a1f7b",
    storageBucket: "twitter-clone-a1f7b.appspot.com",
    messagingSenderId: "462898683616",
    appId: "1:462898683616:web:36608dd756893a60247a85",
    measurementId: "G-7M8V7ZWT51"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
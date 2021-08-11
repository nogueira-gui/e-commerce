import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAzE6N9zeeYVtqeApK9VJvXMaNKWL9AVJM",
  authDomain: "feminuzstore.firebaseapp.com",
  projectId: "feminuzstore",
  storageBucket: "feminuzstore.appspot.com",
  messagingSenderId: "688752193583",
  appId: "1:688752193583:web:d6d3824109d377729dd6da",
  measurementId: "G-6K2CN4WMWY"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;

import firebase from "firebase";



const firebaseConfig = {
  apiKey: "your-firebase-api-key",
  authDomain: "your-firebase-auth-domain",
  databaseURL: "your-firebase-database-url",
  projectId: "your-firebase-project",
  storageBucket: "your-firebase-storage-bucket",
  messagingSenderId: "your-message-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


export default db;
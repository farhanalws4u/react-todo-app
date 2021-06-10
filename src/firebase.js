import firebase from "firebase";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBcudvjqwnAGZ40qusKtAU1vFprfJoSL_Q",
  authDomain: "todo-app-bb932.firebaseapp.com",
  projectId: "todo-app-bb932",
  storageBucket: "todo-app-bb932.appspot.com",
  messagingSenderId: "546140622158",
  appId: "1:546140622158:web:8e5f4cc445e80e8854221f",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;

export const db = firebase.firestore();
export const auth = firebase.auth();

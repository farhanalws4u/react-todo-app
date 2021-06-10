import firebase from "firebase";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;

export const db = firebase.firestore();
export const auth = firebase.auth();

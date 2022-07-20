 import firebase from 'firebase/compat/app';
// import firebase from "firebase";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDkefLidWStTAElDEg4wEPPyclcGkiT5Is",
    authDomain: "ecommerce-b1588.firebaseapp.com",
    projectId: "ecommerce-b1588",
    storageBucket: "ecommerce-b1588.appspot.com",
    messagingSenderId: "457885353517",
    appId: "1:457885353517:web:532325036c41935e5f5aa4"
  };



const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export { auth, googleProvider, facebookProvider, githubProvider};
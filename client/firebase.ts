// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK-oCiyoYxr0Il_pYKdUTcGBwpAA3h7DE",
  authDomain: "mvi1-d45cc.firebaseapp.com",
  projectId: "mvi1-d45cc",
  storageBucket: "mvi1-d45cc.firebasestorage.app",
  messagingSenderId: "1052248458113",
  appId: "1:1052248458113:web:451c4c4f4894c9f5b69e80"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export { db, auth, googleProvider, githubProvider };

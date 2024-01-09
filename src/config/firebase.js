import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsG2MtdCE7iQNoJLy1fmMcs99MfVQLKTM",
  authDomain: "smart-flow-9200e.firebaseapp.com",
  projectId: "smart-flow-9200e",
  storageBucket: "smart-flow-9200e.appspot.com",
  messagingSenderId: "446099215018",
  appId: "1:446099215018:web:21df73140f77352e7576d3",
  measurementId: "G-TM5CEKGVEL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

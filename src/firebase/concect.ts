import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDpYkLoJm4ZMkeLUkBjNsqn28wVa-yFGNM",
  authDomain: "barber-2fc0f.firebaseapp.com",
  projectId: "barber-2fc0f",
  storageBucket: "barber-2fc0f.firebasestorage.app",
  messagingSenderId: "359493291606",
  appId: "1:359493291606:web:443a8fc115fb5eb455b5f7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db =getFirestore(app)

export {auth,db}
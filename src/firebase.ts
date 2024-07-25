import {getApps, initializeApp} from 'firebase/app';
import {getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "chat-with-pdf-challenge-d46a7.firebaseapp.com",
    projectId: "chat-with-pdf-challenge-d46a7",
    storageBucket: "chat-with-pdf-challenge-d46a7.appspot.com",
    messagingSenderId: "142152699550",
    appId: "1:142152699550:web:9a8a1bdc1625cf4f67f58f"
  };
  
  const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export {db, storage}
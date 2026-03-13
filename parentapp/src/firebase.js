// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"; // 👈 Ye missing tha


const firebaseConfig = {
  apiKey: "AIzaSyCtqR_fg2MA_Y7wgovacy-nNFzKC3BLRFI",
  authDomain: "central-school-d7403.firebaseapp.com",
  projectId: "central-school-d7403",
  storageBucket: "central-school-d7403.firebasestorage.app",
  messagingSenderId: "914232246581",
  appId: "1:914232246581:web:e51c3fe3de1adf35a80c7c",
  measurementId: "G-30RLH4TJWN"
};

const app = initializeApp(firebaseConfig);

// 👇 Teeno cheezein export karni zaroori hain
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app); // 👈 Isko add kiya
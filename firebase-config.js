// SHAMA INTERIOR - Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where, orderBy, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB695t6NDQDgmFntvcG4G5ew2abUGb5k1g",
  authDomain: "shama-interior.firebaseapp.com",
  projectId: "shama-interior",
  storageBucket: "shama-interior.firebasestorage.app",
  messagingSenderId: "834491161705",
  appId: "1:834491161705:web:0b34e656788ad12cbc56f8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const SITE = {
  name: "SHAMA INTERIOR",
  whatsapp: "918658712172",
  adminEmail: "muntasirahmad96@gmail.com",
  facebook: "https://www.facebook.com/share/18Gb26vMMT/",
  instagram: "https://www.instagram.com/shamainterior",
  youtube: "https://youtube.com/@muntasirahmad5668"
};

export { db, auth, SITE, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where, orderBy, onSnapshot, serverTimestamp, signInWithEmailAndPassword, signOut, onAuthStateChanged };

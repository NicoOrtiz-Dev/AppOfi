// firebase-config.js
// Este archivo configura y autentica Firebase, y exporta las funciones necesarias.

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { 
  getAuth, 
  signInWithCustomToken, 
  signInAnonymously, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  onSnapshot, 
  query, 
  where, 
  getDocs, 
  addDoc,
  getDoc 
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// ✅ Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBs8ZhHPfKe0CPhiomvsX5PexhAAyddj94",
  authDomain: "miappoficial.firebaseapp.com",
  projectId: "miappoficial",
  storageBucket: "miappoficial.firebasestorage.app",
  messagingSenderId: "103932979001",
  appId: "1:103932979001:web:8a206cb7044b0dfaf16ae8"
};

// Inicializa la app de Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// 🔑 Si tienes un token personalizado úsalo, si no, login anónimo
if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
  signInWithCustomToken(auth, __initial_auth_token).catch(e => {
    console.error("Error al iniciar sesión con token personalizado: ", e);
  });
} else {
  signInAnonymously(auth).catch(e => {
    console.error("Error al iniciar sesión anónimamente: ", e);
  });
}

// Exporta lo que usará tu app
export { 
  db, 
  auth, 
  onSnapshot, 
  collection, 
  doc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  getDoc, 
  addDoc, 
  onAuthStateChanged 
};

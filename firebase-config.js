// Este archivo configura y autentica Firebase, y exporta las funciones necesarias.

// Importa las funciones y variables de los módulos de Firebase.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInWithCustomToken, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
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
    getDoc // Se agregó esta importación faltante.
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Variables globales proporcionadas por el entorno.
// Usamos 'default-app-id' y '{}' como valores por defecto si no existen.
const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

// Inicializa la aplicación de Firebase.
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Maneja la autenticación del usuario.
// Usamos el token personalizado si está disponible, si no, nos autenticamos de forma anónima.
if (initialAuthToken) {
    signInWithCustomToken(auth, initialAuthToken).catch(e => {
        console.error("Error al iniciar sesión con token personalizado: ", e);
    });
} else {
    signInAnonymously(auth).catch(e => {
        console.error("Error al iniciar sesión anónimamente: ", e);
    });
}

// Exporta las variables y funciones de Firebase para que otros archivos (como app.html) puedan usarlas.
// NOTA: Se ha agregado 'onAuthStateChanged' y 'getDoc' a la lista de exportación para solucionar los errores de importación.
export { 
    db, 
    auth, 
    appId, 
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

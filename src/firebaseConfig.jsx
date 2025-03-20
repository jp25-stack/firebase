// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Aquí debes colocar las credenciales de tu proyecto de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDjcAPk9oU9QLFvbNQ3AR1K2Q4MPh5dGeM",
    authDomain: "trabajo1-75bdb.firebaseapp.com",
    projectId: "trabajo1-75bdb",
    storageBucket: "trabajo1-75bdb.firebasestorage.app",
    messagingSenderId: "248343999082",
    appId: "1:248343999082:web:d5f4f99512f3069c6d5013"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la instancia de Firestore
const db = getFirestore(app);

export { db };

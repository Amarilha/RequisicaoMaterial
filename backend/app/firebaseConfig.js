
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {getDatabase, ref, get  } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyC7qUo7sEber6OQWMtPCYJ-mDdo62z8j9Q",
    authDomain: "sistema-requisicao-de-material.firebaseapp.com",
    databaseURL: "https://sistema-requisicao-de-material-default-rtdb.firebaseio.com",
    projectId: "sistema-requisicao-de-material",
    storageBucket: "sistema-requisicao-de-material.firebasestorage.app",
    messagingSenderId: "1009099765338",
    appId: "1:1009099765338:web:7d9d7a6cb845683a148a63",
    measurementId: "G-EQ16W4LTF5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  export { app, db, getDatabase, ref, get };
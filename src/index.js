import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDzzElUI1GtElEgWVSJ3IK1b5Tg2LIegCQ",
  authDomain: "ceramiclove-944c1.firebaseapp.com",
  projectId: "ceramiclove-944c1",
  storageBucket: "ceramiclove-944c1.appspot.com",
  messagingSenderId: "949579259585",
  appId: "1:949579259585:web:dd4eebf561bc56b096fe40"
};
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

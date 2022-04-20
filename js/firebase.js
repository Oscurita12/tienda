// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPDN5JG0gqPuAM0mI8GzGjd79bWBDsZIg",
  authDomain: "claratiendacesde.firebaseapp.com",
  projectId: "claratiendacesde",
  storageBucket: "claratiendacesde.appspot.com",
  messagingSenderId: "997105924760",
  appId: "1:997105924760:web:1a5e2a5c3ad80301a2eeed",
  measurementId: "G-JTC90MTML4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
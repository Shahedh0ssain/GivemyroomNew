

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyAW1Ox3kkQb1BfdpsqSjvNUe-410oErRZQ",
  // authDomain: "first-auth-project-55f0e.firebaseapp.com",
  // projectId: "first-auth-project-55f0e",
  // storageBucket: "first-auth-project-55f0e.appspot.com",
  // messagingSenderId: "202768492596",
  // appId: "1:202768492596:web:8f62576ce30317a10a0261"

  apiKey: "AIzaSyD0JoV7YKa9kV63QHVz7XG2Ij1on6SLjB8",
  authDomain: "givemyroom-b1b54.firebaseapp.com",
  projectId: "givemyroom-b1b54",
  storageBucket: "givemyroom-b1b54.appspot.com",
  messagingSenderId: "1075476916492",
  appId: "1:1075476916492:web:1d393c954bf953eece4129"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app;
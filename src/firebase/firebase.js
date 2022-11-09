import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBMY61eczIRJQWJ9Wk1yalKwrmaxbyAfK0",
  authDomain: "tiendagema.firebaseapp.com",
  projectId: "tiendagema",
  storageBucket: "tiendagema.appspot.com",
  messagingSenderId: "387291671708",
  appId: "1:387291671708:web:e0901a3322042b31611159"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
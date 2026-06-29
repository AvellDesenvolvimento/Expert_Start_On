import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoFi0gwhQodxZDDue1whbP-aywS1XyWog",
  authDomain: "start-onlogin.firebaseapp.com",
  databaseURL: "https://start-onlogin-default-rtdb.firebaseio.com",
  projectId: "start-onlogin",
  storageBucket: "start-onlogin.firebasestorage.app",
  messagingSenderId: "859600403267",
  appId: "1:859600403267:web:b07c3a1341501edd254df6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyA_yaIVWnWk8XNTmMW_pTc2OdEKzVvB30w",
  authDomain: "the-ux-manual.firebaseapp.com",
  projectId: "the-ux-manual",
  storageBucket: "the-ux-manual.appspot.com",
  messagingSenderId: "34229624456",
  appId: "1:34229624456:web:b03bf6c4f087db6f88c93d",
  measurementId: "G-5GRTYYWWE5"
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");

// export utils/refs
export { db, auth, usersCollection };

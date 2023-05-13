// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";
// Your web app's Firebase configura  tion
const firebaseConfig = {
  apiKey: "AIzaSyBc0M0xkbYdP3Vrt_rkPW7kDfh5eAR_bcY",
  authDomain: "phoneauth-7a05a.firebaseapp.com",
  projectId: "phoneauth-7a05a",
  storageBucket: "phoneauth-7a05a.appspot.com",
  messagingSenderId: "924888448316",
  appId: "1:924888448316:web:729eefd69c85a20ba07239"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
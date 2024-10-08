import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIVfNjTMnKI7JC2tmUxgx_kIr1F_tEHl4",
  authDomain: "dreamsleep-b26a1.firebaseapp.com",
  projectId: "dreamsleep-b26a1",
  storageBucket: "dreamsleep-b26a1.appspot.com",
  messagingSenderId: "818410906098",
  appId: "1:818410906098:web:2ad6849566959d29f78b6b",
  measurementId: "G-7VYTTD9SZH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}
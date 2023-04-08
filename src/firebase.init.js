// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnvxjSO72t158FxGiHYaBaK56aaLhKEcU",
  authDomain: "fristauth-40508.firebaseapp.com",
  projectId: "fristauth-40508",
  storageBucket: "fristauth-40508.appspot.com",
  messagingSenderId: "181199775322",
  appId: "1:181199775322:web:14153c1654be97d1671a63",
  measurementId: "G-XFE1DQJH1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)

export default app
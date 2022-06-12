// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpobg7yvyu6ylVSZPLsQCODprhjeH4ZGI",
  authDomain: "tutorlab-cbc12.firebaseapp.com",
  projectId: "tutorlab-cbc12",
  storageBucket: "tutorlab-cbc12.appspot.com",
  messagingSenderId: "139698875677",
  appId: "1:139698875677:web:b1cf5521f436152d7085f4"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBcZsipY_qIW1__rMPZ0htO894uuRwAqPc",
  authDomain: "care-finder-affd0.firebaseapp.com",
  projectId: "care-finder-affd0",
  storageBucket: "care-finder-affd0.appspot.com",
  messagingSenderId: "556805837385",
  appId: "1:556805837385:web:207684a15d12c2b7d52598",
  measurementId: "G-V86BVDQG8Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
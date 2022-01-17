import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCBJi0e8uFlaFCnw0LT6JzkYlTsiPMhl4k",
  authDomain: "blogspostvue3.firebaseapp.com",
  projectId: "blogspostvue3",
  storageBucket: "blogspostvue3.appspot.com",
  messagingSenderId: "175415049255",
  appId: "1:175415049255:web:c121d4fd402cfdc34a2202",
};
// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp };

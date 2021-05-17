import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC4jAwqco-AQgo_vLHmLuKQEgjEyH3ISUk",
  authDomain: "ogef-298719.firebaseapp.com",
  projectId: "ogef-298719",
  storageBucket: "ogef-298719.appspot.com",
  messagingSenderId: "396027172740",
  appId: "1:396027172740:web:14fd283ada71c01e01efd1",
  measurementId: "G-R4EVFT5LV4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const firestore = () => firebase.firestore();

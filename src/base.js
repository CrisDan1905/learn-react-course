import Rebase from "re-base"; // for mirroring our state to Firebase changes
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBreFNxZ1Cwp80AZqy4bIFQsHM4Eh1sRng",
    authDomain: "catch-of-the-day-danilo.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-danilo.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// The named export
export { firebaseApp };

// The default export
export default base;

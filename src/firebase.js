import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyDDRIyZDkQnGjomZXiHh2_aZw6jMDB8tVg",
    authDomain: "bookings-90992.firebaseapp.com",
    databaseURL: "https://bookings-90992.firebaseio.com",
    projectId: "bookings-90992",
    storageBucket: "bookings-90992.appspot.com",
    messagingSenderId: "610859990087",
    appId: "1:610859990087:web:1ae54b94c9568b2e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseDB = firebase.database();
const firebaseUsers = firebaseDB.ref('users');
const firebaseBooking = firebaseDB.ref('booking');
var storage = firebase.storage();

export {
    firebase,
    firebaseDB,
    firebaseBooking,
    firebaseUsers,
    storage
}
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
	apiKey: "AIzaSyDhmfybsogcrNFQqS9bidJEt7CKB1jVy9c",
	authDomain: "iface-project.firebaseapp.com",
	databaseURL: "https://iface-project.firebaseio.com",
	projectId: "iface-project",
	storageBucket: "",
	messagingSenderId: "751458774556",
	appId: "1:751458774556:web:bb262337ec139f5f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
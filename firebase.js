import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore,collection, addDoc , getDocs,deleteDoc,updateDoc ,doc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm9NRuD40xcI-Q-j-Itv01i489IHWOF4I",
  authDomain: "my-todo-project-01.firebaseapp.com",
  projectId: "my-todo-project-01",
  storageBucket: "my-todo-project-01.appspot.com",
  messagingSenderId: "94147972445",
  appId: "1:94147972445:web:5a6783af3af0fa2b006cb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export {
    app,
    db,
collection,
addDoc,
getDocs,
deleteDoc,
updateDoc
,doc
}
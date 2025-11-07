import {
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("logged in user UID ==>" , uid);
    
  } else {
    window.location = "./../index.html";
  }
});

const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location = "./../index.html";
    })
    .catch((error) => {
      alert("error occured");
      console.log(error)
    });
});
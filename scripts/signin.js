import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js"

const form = document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById("password")

// sign in via email
form.addEventListener("submit", (event) => {
    event.preventDefault()
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            window.location = "./../pages/homePage.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
})

// sign in via google

// sign in via github

// show-hide password
const showPassword = document.getElementById("show-password")

showPassword.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text"
        showPassword.innerText = "🙈"
    }
    else {
        password.type = "password"
        showPassword.innerText = "🙉"

    }
})
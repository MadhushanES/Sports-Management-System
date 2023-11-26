
	  // Import the functions you need from the SDKs you need
	  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
	  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
	  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
	  // TODO: Add SDKs for Firebase products that you want to use
	  // https://firebase.google.com/docs/web/setup#available-libraries

	  // Your web app's Firebase configuration
	  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
	  const firebaseConfig = {
        apiKey: "AIzaSyAxXyIbcZAca6n7L93WUZx24GC6Bd31Gmk",
        authDomain: "mini-project-fc5d1.firebaseapp.com",
        projectId: "mini-project-fc5d1",
        storageBucket: "mini-project-fc5d1.appspot.com",
        messagingSenderId: "921359304072",
        appId: "1:921359304072:web:1c99607fa7d83f2ecf663d",
        measurementId: "G-G3NJ0JP4XY"

	  };

	  // Initialize Firebase
	  const app = initializeApp(firebaseConfig);
	  const analytics = getAnalytics(app);
	  const auth = getAuth();
	  console.log(app);

      document.getElementById("logout").addEventListener("click", function() {
		  signOut(auth).then(() => {
			  // Sign-out successful.
			//   console.log('Sign-out successful.');
			  alert('Sign-out successful.');
              window.location.href = "signin.html";

			  document.getElementById('logout').style.display = 'none';
			}).catch((error) => {
			  // An error happened.
			  console.log('An error happened.');
              alert(error);
			});		  		  
	  });
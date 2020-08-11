// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

const provider = new firebase.auth.GoogleAuthProvider();

/* Log In con Google */
export const loginGoogle = () => {
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('user', user);
    // ...
    })
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log('error', errorMessage);
    // ...
    });
};

/* Sign Up con correo y password */
export const signUp = (email, password) => {
  console.log(email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('creaste tu cuenta exitosamente');
      firebase.auth().currentUser.sendEmailVerification().then(() => {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      });
    })
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    // [END_EXCLUDE]
    });
};

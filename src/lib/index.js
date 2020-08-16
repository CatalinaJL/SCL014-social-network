// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

/* Agregamos funcion de firestore, db será el database en que vamos a guardar información */
const db = firebase.firestore();

/* Inicio Sesión con Google */

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log('user', user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    console.log('error', error);
    // ...
  });
};

/* Función para registrar usuarios nuevos con correo y password */
export const signUpMailPass = (email, password) => {
  console.log(email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() =>{
      /* Va a enviar un correo electrónico solicitando verificar mail */
      firebase.auth().currentUser.sendEmailVerification().then(() => {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Correo de verificación enviado!');
        // [END_EXCLUDE]
      });
    })
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('La contraseña es muy débil');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    // [END_EXCLUDE]
    });
};

/* Función para loguearse con correo y password */

export const loginMailPass = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      /* Cuando se conecten los lleve a la página de personajes y puedan postear */
      window.location.hash = '#/personajes';
    })
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      document.getElementById('quickstart-sign-in').disabled = false;
    // [END_EXCLUDE]
    });
};

/* Para agregar información a colección de firestore/database */
export const response = () =>{
  db.collection('tasks').doc().set({

  });
  console.log();
};

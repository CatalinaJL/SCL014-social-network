/* Se importa función que permite loginGoogle */
import { loginGoogle, signUpMailPass, loginMailPass } from '../index.js';

export const home = () => {
/* Se crea un Div que contenga lo que vamos a crear */
  const divHome = document.createElement('div');
  /* Constante que tiene lo que se quiere agregar a divHome */
  const viewHome = `
  <h1>Hola Mundirijillo!</h1>
  <p>Puedes iniciar sesión, o crear una cuenta si quieres</p>
  <p> Para iniciar sesión con Google aprieta acá<p>
  <button id="googleLogin">Log In google</button>
  <p> Para iniciar sesión con correo y password o crear tu cuenta, ingresa tus datos y aprieta el boton que quieras </p>  
  <input type="email" id="txtEmail" placeholder="E-mail">
  <input type="password" id="txtPassword" placeholder="Contraseña">
  <button id="btnLogin" class="btn btn-action">Login</button>
  <button id="btnSignUp" class="btn btn-secondary">Registrarse</button>

  `;
  /* Se pasa a divHome el contenido de viewHome */
  divHome.innerHTML = viewHome;
  /* Se crea constante que permita buscar id btn */
  const btn = divHome.querySelector('#googleLogin');
  /* Se asocia evento a btn login Google */
  btn.addEventListener('click', () => {
    console.log('estoy escuchando');
    loginGoogle();
  });
  /* Creamos constantes para aplicar función de entrar y registrarse con correo */
  const txtEmail = divHome.querySelector('#txtEmail');
  const txtPassword = divHome.querySelector('#txtPassword');
  const btnLogin = divHome.querySelector('#btnLogin');
  const signUp = divHome.querySelector('#btnSignUp');
  /* Se asocia evento a btn signUp */
  signUp.addEventListener('click', () => {
    /* creación de constantes email y password con atributo value */
    const email = txtEmail.value;
    const password = txtPassword.value;
    signUpMailPass(email, password);
  });
  /* Se asocia evento a btn Login con correo y password */
  btnLogin.addEventListener('click', () => {
    /* Creación de constantes email y password con atributo value */
    const email = txtEmail.value;
    const password = txtPassword.value;
    loginMailPass(email, password);
  });

  /* Se retorna el divHome con lo que contiene ahora */
  return divHome;
};

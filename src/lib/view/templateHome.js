import { loginGoogle, signUp } from '../index.js';

export const home = () => {
  /* Creamos un DIV que contenga lo que creamos */
  const divHome = document.createElement('div');
  const viewHome = `
  <h1>Hola Mundirijillo</h1>
  <button id="loginGoogle">Log In con Google</button>

  <input type="email" name="email" id="txtEmail" placeholder="E-mail">
  <input type="password" name="password" id="txtPassword" placeholder="Contraseña">
  <button id="btnLogin" class="btn btn-action">Login</button>
  <button id="btnSignUp" class="btn btn-secondary">Registrarse</button>
  <button id="btnLogout" class="btn btn-action hide">Logout</button>
  
  `;
  /* pasar al div creado con div home el viewHome */
  divHome.innerHTML = viewHome;
  const btn = divHome.querySelector('#loginGoogle');
  btn.addEventListener('click', () => {
    loginGoogle();
  });
  /* Tomar ID de inputs y botones para usarlos despues */
  const mail = divHome.querySelector('#txtEmail');
  const pass = divHome.querySelector('#txtPassword');
  const btnLogin = divHome.querySelector('#btnLogin');
  const btnSignUp = divHome.querySelector('#btnSignUp');
  const btnLogout = divHome.querySelector('#btnLogout');

  /* Añade evento a btn SignUp */
  btnSignUp.addEventListener('click', () => {
    const email = mail.value;
    const password = pass.value;
    signUp(email, password);
  });
  return divHome;
};

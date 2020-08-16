/* Se importa función que permite loginGoogle */
import { loginGoogle } from '../index.js';

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
  
  `;
  /* Se pasa a divHome el contenido de viewHome */
  divHome.innerHTML = viewHome;
  /* Se crea constante que permita buscar id btn */
  const btn = divHome.querySelector('#googleLogin');
  /* Se asocia evento a btn */
  btn.addEventListener('click', () => {
    console.log('estoy escuchando');
    loginGoogle();
  });
  /* Se retorna el divHome con lo que contiene ahora */
  return divHome;
};

import { login } from '../index.js';

export const home = () => {
  /* Creamos un DIV que contenga lo que creamos */
  const divHome = document.createElement('div');
  const viewHome = `
  <h1>Hola Mundirijillo</h1>
  <button id="loginGoogle">Log In con Google</button>
  `;
  /* pasar al div creado con div home el viewHome */
  divHome.innerHTML = viewHome;
  const btn = divHome.querySelector('#loginGoogle');
  btn.addEventListener('click', () => {
    login();
  });
  return divHome;
};

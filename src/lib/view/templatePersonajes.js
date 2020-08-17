import { posteame, leeme } from '../index.js';

export const personajes = () => {
  /* Se crea un Div que contenga lo que vamos a crear */
  const divPersonajes = document.createElement('div');
  /* Constante que tiene lo que se quiere agregar a divHome */
  const viewPersonajes = `
      <h3>Hola Flanders!</h3>
      <p>Acá podrás postear y ver posts: </p>
      <h3> Crea tu post </h3>
      <textarea id="inputPost"> Ingresa tu post </textarea>
      <button type= "button" id="enviaPost"> Enviar Post </button>
      <p id="outputPost"></p>
    `;
  divPersonajes.innerHTML = viewPersonajes;
  /* PAra tomar elementos de input y ocupar funcion posteame */
  divPersonajes.querySelector('#enviaPost').addEventListener('click', () => {
    console.log('estoy escuchando');
    const input = divPersonajes.querySelector('#inputPost').value;
    posteame(input);
  });
  /* Para mostrar post y usar funcion leeme  */
  const verPost = divPersonajes.querySelector('#outputPost');
  
  return divPersonajes;
};

// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
import { menu } from './lib/view/templateMenu.js';
import { changeRoute } from './lib/router.js';
// import { home } from './lib/view/templateHome.js';

myFunction();

//
/* Si llamo de esta forma al div creado se imprime [object HTMLDivElement] */
/* document.getElementById('root').innerHTML += home(); */
/* document.getElementById('root').appendChild(home()); */

/* Creamos función init que va a inicializar app */
const init = () => {
  /* Acá se va a pasar parametro a router.js */
  document.getElementById('root').innerHTML = menu();
  /* Window.addeventlistener va a ser el evento para cuando se cargue la pantalla */
  window.addEventListener('hashchange', () => {
    myFunction();
    console.log(window.location.hash);
    changeRoute(window.location.hash);
  });
};

window.addEventListener('load', init);

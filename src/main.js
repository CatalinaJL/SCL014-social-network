// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { menu } from './lib/view/templateMenu.js';
// import { home } from './lib/view/templateHome.js';
import { changeRoute } from './lib/router.js';

myFunction();

/* Muestra template Menu en HTML */
// document.getElementById('root').innerHTML = menu();
/* Para mostrar template Home en HTML */
/* document.getElementById('root').innerHTML += home(); */
/* Si se ocupa innerHTML cuando se crea un DIV en template, */
/* se va a mostrar como un objeto pero no el contenido */
/* En cambio si se ocupa appendChild, se muestra */
// document.getElementById('root').appendChild(home());

/* Creamos constante init que va a inicializar nuestra app */
const init = () => {
  /* Se debe cargar la página antes de que haga el cambio */
  document.getElementById('root').innerHTML = menu();
  /* Se va a pasar parametro a router */
  window.addEventListener('hashchange', () => {
    myFunction();
    /* para llamar al hash se hace con window.location.hash */
    console.log(window.location.hash);
    /* se llama a funcion changeRoute */
    changeRoute(window.location.hash);
  });
};

/* Ahora llamamos a constante init con window */
window.addEventListener('load', init);

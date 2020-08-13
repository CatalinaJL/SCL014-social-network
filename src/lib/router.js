/* Acá se van a llamar a los componentes que se van a ir mostrando */
import { home } from './view/templateHome.js';
import { personajes } from './view/templatePersonajes.js';
import { menu } from './view/templateMenu.js';

/* Creamos constante showTemplate, que permita cambiar la página en sí */
const showTemplate = (hash) => {
  /* Constante de div root en HTML */
  const containerRoot = document.getElementById('root');
  /* Cada vez que se "limpie" la página, lo va a hacer incorporando el menú */
  containerRoot.innerHTML = menu();
  /* se hace un switch para cada caso del hash */
  switch (hash) {
    case '#/':
      containerRoot.appendChild(home());
      break;
    case '#/personajes':
      containerRoot.appendChild(personajes());
      break;
    default:
      containerRoot.innerHTML = `
        <h2> no existe </h2>
        `;
  }
};

/* Creamos constante que cambiara la ruta si se le entrega el parametro hash */
export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } else if (hash === '#/personajes') {
    return showTemplate(hash);
  } else {
    return showTemplate(hash);
  }
};

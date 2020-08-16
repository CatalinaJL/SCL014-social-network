/* Se llamaran a los componentes que se quieren ir mostrando */
import { home } from './view/templateHome.js';
import { menu } from './view/templateMenu.js';
import { personajes } from './view/templatePersonajes.js';


/* Se crea funcion showTemplate */
const showTemplate = (hash) => {
  /* Se llama al div Root */
  const containerRoot = document.getElementById('root');
  /* Ahora cada vez que se "limpie" se hara pasando el menu */
  containerRoot.innerHTML = menu();
  /* Ahora se hara un switch para cada caso de hash */
  switch (hash) {
    case '#/':
      containerRoot.appendChild(home());
      break;
    case '#/personajes':
      containerRoot.appendChild(personajes());
      break;
    default:
      containerRoot.innerHTML = `
      <h2> No existe </h2>
      `;
  }
};


/* Se crea constante que cambiara las rutas, se le pasara el hash */
export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } else if (hash === '#/personajes') {
    return showTemplate(hash);
  } else {
    return showTemplate(hash);
  }
};

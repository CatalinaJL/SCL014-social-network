<<<<<<< HEAD
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
=======
/* Nos va a dar la ruta, llamamos componentes que queremos ir mostrando */

import { welcome } from './view/WelcomeTemplate.js';
import { recover } from './view/RecoverpassTemplate.js';
import { register } from './view/SignUpTemplate.js';
import { home } from './view/homeTemplate.js';
import { post } from './view/postTemplate.js';

/* Exportamos una constante que nos va cambiando las rutas, al cual le pasaremos el hash */
const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '#/':
      containerRoot.appendChild(welcome());
      break;
    case '#/SignUp':
      containerRoot.appendChild(register());
      break;
    case '#/home':
      containerRoot.appendChild(home());
      break;
    case '#/Recoverpass':
      containerRoot.appendChild(recover());
      break;
    case '#/post':
      containerRoot.appendChild(post());
      break;
    default:
      containerRoot.innerHTML = '<h2>Aca no hay nada, solo una nebulosa negra</h2>';
  }
};


export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } if (hash === '#/Welcome') {
    return showTemplate(hash);
  } if (hash === '#/home') {
    return showTemplate(hash);
  } if (hash === '#/SignUp') {
    return showTemplate(hash);
  } if (hash === '#/RecoverPass') {
    return showTemplate(hash);
  } if (hash === '#/post') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
>>>>>>> 7506efe2f85522096abf8fa64464465a3380f29b
};

export const personajes = () => {
  /* Se crea un Div que contenga lo que vamos a crear */
  const divPersonajes = document.createElement('div');
  /* Constante que tiene lo que se quiere agregar a divHome */
  const viewPersonajes = `
      <h3>Hola Flanders!</h3>
      <p>Acá podrás postear y ver posts: </p>
      `;
    /* Se pasa a divHome el contenido de viewHome */
  divPersonajes.innerHTML = viewPersonajes;
  /* Se retorna el divHome con lo que contiene ahora */
  return divPersonajes;
};

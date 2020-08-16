export const home = () => {
/* Se crea un Div que contenga lo que vamos a crear */
  const divHome = document.createElement('div');
  /* Constante que tiene lo que se quiere agregar a divHome */
  const viewHome = `
  <h1>Hola Mundirijillo!</h1>
  <p>Puedes iniciar sesión, o crear una cuenta si quieres</p>
  `;
  /* Se pasa a divHome el contenido de viewHome */
  divHome.innerHTML = viewHome;
  /* Se retorna el divHome con lo que contiene ahora */
  return divHome;
};

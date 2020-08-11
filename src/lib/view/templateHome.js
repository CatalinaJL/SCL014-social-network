export const home = () => {
  /* Creamos un DIV que contenga lo que creamos */
  const divHome = document.createElement('div');
  const viewHome = `
  <h1>Hola Mundirijillo</h1>
  `;
  /* pasar al div creado con div home el viewHome */
  divHome.innerHTML = viewHome;
  return divHome;
};

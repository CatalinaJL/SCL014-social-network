/* Aquí las publicaciones (TimeLine) Muro */

export const home = () => {
  const divHome = document.createElement('div');
  const viewHome = `
  <!--Header, que contiene el logo y el buscador -->
  <header>
      <!--Div que contiene el logo-->
      <div id="logoContainer">
          <input id="logo1" type="image" src="../imagenes/witLogo1.png">
      </div>
      <nav>
         <li><a href="#/home">Home</a></li>
         <li><a href="#/post">Post</a></li>
         <li><a href="#/"></a>Nada</li>
      </nav>
      <!--Div que contiene el buscador-->
      <div class="search">
          <input id="search" type="search" placeholder="Buscar">
      </div>
     
  </header>
  <section class= "posts">
      <!--Div que contiene el post ya publicado-->
      <div class="verPost">
          <input id="job" type="image" src="../imagenes/iconos/iconHandJob.png" value="job">
          <div class = "containerpost">
              <h3>Hola Hola, ratón con cola! </h3>
          </div>
      </div>
  </section>

    `;
  divHome.innerHTML = viewHome;
  return divHome;
};

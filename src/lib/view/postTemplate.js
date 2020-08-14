/* Aqui van los post de los usuarios */
export const post = () => {
  const viewPost = `
  <!--Header, que contiene el logo y el buscador -->
  <header>
      <!--Div que contiene el logo-->
      <div id="logoContainer">
          <input id="logo1" type="image" src="../imagenes/witLogo1.png">
      </div>
      <!--Div que contiene el buscador-->
      <div class="search">
          <input id="search" type="search" placeholder="Buscar">
      </div>
      <nav>
          <li><a href="#/home">Home</a></li>
          <li><a href="#/post">Post</a></li>
          <li><a href="#/"></a>Nada</li>
     </nav>
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
  return viewPost;
};

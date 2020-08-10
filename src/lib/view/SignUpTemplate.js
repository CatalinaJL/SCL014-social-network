/* creacion de nueva cuenta con  mail -contraseña */
export const register = () => {
  const divRegister = document.createElement('div');
  const viewRegister = `
    <div class="containerLogIn">
    <div id="logoContainer">
    <img id="logo" src="imagenes/witLogo.png" alt="logo"> 
    </div>
    <h1>Crea tu cuenta y accede a WiT</h1>
    <br> <br>
    <p>Nombre Completo</p>
    <input type="text" id="name" class="infoBox" required></input>
    <br> <br>
    <p>Correo Electrónico</p>
    <input type="email" id="email" class="infoBox" required></input>
    <br> <br>
    <p>Fecha de Nacimiento</p>
    <input type="date" id="birthdate" class="infoBox" required></input>
    <br> <br>
    <p>Contraseña</p>
    <input type="password" id="password" class="infoBox" required></input>
    <br> <br>
    <p>Confirmar Contraseña</p>
    <input type="password" id="password" class="infoBox" required></input>
    <br> <br>
    
    <input type="checkbox" id="conditions" required> Acepto condiciones de uso y reglas de comunidad </input>
    <br> <br>
    <input type="submit" id="createaccount" value="Crear Cuenta"></input>
    </div>
  `;
  divRegister.innerHTML = viewRegister;
  return divRegister;
};

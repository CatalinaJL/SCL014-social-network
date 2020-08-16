import { response } from '../index.js';

export const personajes = () => {
  /* Se crea un Div que contenga lo que vamos a crear */
  const divPersonajes = document.createElement('div');
  /* Constante que tiene lo que se quiere agregar a divHome */
  const viewPersonajes = `
      <h3>Hola Flanders!</h3>
      <p>Acá podrás postear y ver posts: </p>
      <div class="container p-4">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <form id="task-form">
                  <div class="div form-group">
                    <input type="text" id="task-title" class="form-control" placeholder="Task Title" autofocus>
                  </div>
                  <div class="div form-group">
                    <textarea id="task-description" rows="3" class="form-control" placeholder="Task Description"></textarea>
                  </div>
                  <button class="btn btn-primary" id="btn-task-form">SAVE</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
    /* Se pasa a divHome el contenido de viewHome */
  divPersonajes.innerHTML = viewPersonajes;
  /* Se crean constantes para obtener información de formulario */ 
  const taskForm = divPersonajes.querySelector('#task-form');
  const taskTitle = divPersonajes.querySelector('#task-title');
  const taskDescription = divPersonajes.querySelector('#task-description');
  /* se asocia evento a form */ 
  taskForm.addEventListener('submit', e => {
    e.preventDefault();
    /* Se obtienen valores de inputs dentro del form */
    const title = taskTitle.value;
    const description = taskDescription.value;

    console.log('submiting');
    console.log(title, description);
    response(title, description);
    console.log(response);
  });
  /* Se retorna el divHome con lo que contiene ahora */
  return divPersonajes;
};

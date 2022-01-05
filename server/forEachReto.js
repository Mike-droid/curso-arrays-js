const app = document.getElementById('app');
const tarea = document.getElementById('tarea');
const completada = document.getElementById('completada');
const botonAgregarTarea = document.getElementById('botonAgregarTarea');
const botonMostrarTareas = document.getElementById('botonMostrarTareas');
const allTasks = document.getElementById('allTasks');
const arrayTareas = [];

botonAgregarTarea.addEventListener('click', () => {
  arrayTareas.push({
    tarea: tarea.value,
    completada: completada.checked
  });

  alert(`Tarea ${tarea.value} agregada`);
});

botonMostrarTareas.addEventListener('click', () => {
  allTasks.innerHTML = '';
  arrayTareas.forEach(element => {
    allTasks.innerHTML += `<li>${element.tarea} - ¿Completada? -> ${element.completada} </li>`
  });
});

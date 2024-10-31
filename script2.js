// Clase ListaTareas
class ListaTareas {
    constructor() {
        this.contador = 0;
    }

    // Método para agregar una nueva tarea a la lista
    agregarTarea(tarea) {
        // Crear un nuevo elemento <li>
        const nuevaTarea = document.createElement("li");
        this.contador += 1;
        nuevaTarea.id = `tarea-${this.contador}`; // Identificador único
        nuevaTarea.textContent = tarea;

        // Agregar un icono para eliminar la tarea
        const iconoEliminar = document.createElement("span");
        iconoEliminar.textContent = "🗑️";
        iconoEliminar.classList.add("icono-eliminar");

        // Añadir evento para eliminar la tarea al hacer clic en el icono de papelera
        iconoEliminar.addEventListener("click", () => {
            nuevaTarea.remove();
        });

        // Añadir el icono al <li>
        nuevaTarea.appendChild(iconoEliminar);

        // Agregar el nuevo <li> al <ul> en el DOM
        document.getElementById("listaTareas").appendChild(nuevaTarea);
    }
}

// Instancia de la clase ListaTareas
const listaTareas = new ListaTareas();

// Seleccionamos los elementos necesarios del DOM
const inputTarea = document.querySelector("#tareaInput");
const btnAgregar = document.querySelector("#btnAgregar");
const listaTareasDOM = document.querySelector("#listaTareas");

// Función para agregar la tarea desde el input
function agregarTarea() {
    const tareaTexto = inputTarea.value.trim();

    if (tareaTexto) {
        listaTareas.agregarTarea(tareaTexto);
        inputTarea.value = ""; // Limpiar el campo de entrada
    } else {
        alert("Por favor, escribe una tarea.");
    }
}

// Evento de clic para agregar tarea
btnAgregar.addEventListener("click", agregarTarea);
class AdministradorDeTareas {
    constructor(listaId) {
        this.lista = document.getElementById(listaId);
        this.tareas = [];
    }

    agregarTarea(nombre, persona) {
        const tarea = { nombre, persona };
        this.tareas.push(tarea);
        this.mostrarTareas();
    }

    modificarTarea(index, nuevoNombre, nuevaPersona) {
        if (index >= 0 && index < this.tareas.length) {
            this.tareas[index].nombre = nuevoNombre;
            this.tareas[index].persona = nuevaPersona;
            this.mostrarTareas();
        }
    }

    eliminarTarea(index) {
        if (index >= 0 && index < this.tareas.length) {
            this.tareas.splice(index, 1);
            this.mostrarTareas();
        }
    }

    mostrarTareas() {
        this.lista.innerHTML = ''; // Limpiar la lista antes de mostrar
        this.tareas.forEach((tarea, index) => {
            const li = document.createElement('li');
            li.textContent = `${tarea.nombre} - Asignada a: ${tarea.persona}`;

            // Botón de Editar
            const btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            btnEditar.onclick = () => this.editarTarea(index);

            // Botón de Eliminar
            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.onclick = () => this.eliminarTarea(index);

            li.appendChild(btnEditar);
            li.appendChild(btnEliminar);
            this.lista.appendChild(li);
        });
    }

    editarTarea(index) {
        const nuevoNombre = prompt("Nuevo nombre de la tarea:", this.tareas[index].nombre);
        const nuevaPersona = prompt("Nueva persona asignada:", this.tareas[index].persona);
        this.modificarTarea(index, nuevoNombre, nuevaPersona);
    }
}

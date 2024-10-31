class Evento {
    constructor(nombre, fecha, hora, lugar) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.hora = hora;
        this.lugar = lugar;
    }
}

class Planificador {
    constructor(listaId) {
        this.lista = document.getElementById(listaId);
        this.eventos = [];
    }

    agregarEvento(nombre, fecha, hora, lugar) {
        const evento = new Evento(nombre, fecha, hora, lugar);
        this.eventos.push(evento);
        this.mostrarEventos();
    }

    eliminarEvento(index) {
        if (index >= 0 && index < this.eventos.length) {
            this.eventos.splice(index, 1);
            this.mostrarEventos();
        }
    }

    mostrarEventos() {
        this.lista.innerHTML = ''; // Limpiar la lista antes de mostrar
        this.eventos.forEach((evento, index) => {
            const li = document.createElement('li');
            li.textContent = `${evento.nombre} - ${evento.fecha} a las ${evento.hora} en ${evento.lugar}`;

            // Botón de Eliminar
            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.onclick = () => this.eliminarEvento(index);

            // Agregar botón al elemento de la lista
            li.appendChild(btnEliminar);
            this.lista.appendChild(li);
        });
    }
}

const planificador = new Planificador('listaEventos');

document.getElementById('formularioEvento').addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar el envío del formulario
    const nombre = document.getElementById('nombreEvento').value;
    const fecha = document.getElementById('fechaEvento').value;
    const hora = document.getElementById('horaEvento').value;
    const lugar = document.getElementById('lugarEvento').value;
    planificador.agregarEvento(nombre, fecha, hora, lugar);
    e.target.reset(); // Limpiar el formulario
});

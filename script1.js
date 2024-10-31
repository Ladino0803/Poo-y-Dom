// Clase padre Usuario
class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

// Clase hija Administrador
class Administrador extends Usuario {
    mostrarInfo() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Rol: Administrador`;
    }
}

// Clase hija Comercial
class Comercial extends Usuario {
    mostrarInfo() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Rol: Comercial`;
    }
}

// Crear instancias de cada clase
const admin = new Administrador("Carlos", 35);
const comercial = new Comercial("Ana", 28);

// Funciones para mostrar la información en el DOM
function mostrarInfoAdmin() {
    document.getElementById("informacion").innerText = admin.mostrarInfo();
}

function mostrarInfoComercial() {
    document.getElementById("informacion").innerText = comercial.mostrarInfo();
}

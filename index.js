//Iteraciones Pair Programming

//Objetos

//Declaración
const Coche = {
    marca: "Seat",
    modelo: "Ibiza",
    matricula: "234567H",
};

const Casa = {
    codPostal: 28080,
    calle: "Pimientos",
    portal: 2,
    piso: 4,
};

const FullStackDeveloper = {
    lenguajes : ["HTML", "CSS", "JavaScript"],
    proyectos : ["Web", "Repositorio", "Aplicación"],
};

const Perro = {
    nombre: "Chopito",
    raza: "Pastor alemán",
    color: "Blanco",
    edad: 12,
    ladrar: function () {
        console.log ("GUAU GUAU");
    },
    popo: function (){
       return Math.random()*3;
    }
}

//Lectura de propiedades
let marcaPortatil = Portatil.marca;

let marcaPortatil2 = Portatil["marca"];

let grupos = Concierto.grupos;

let arrayRGB = [Led.Rojo, Led.Verde, Led.Azul];

//Modificación de propiedades

Portatil.modelo = "P345";

Concierto.cartelera.push = ("Guns N Roses");

Concierto.fecha = new Date();

Impresora.imprimiendo = {
    nombreArchivo: "Receta",
    copias: 3,
    numPaginas: 2
};

//Iteraciones

//Pair Programming

//Objetos

//Declaración

const Noticia = {
    titular: "Playa inundada",
    cuerpo: "Se ha inundado una playa en Gijón"
};

const Persona = {
    nombre: "Dolly",
    apellidos: "Parton Sánchez",
    edad: 67,
};

const Avion = {
    numPasajeros: 285,
    despegar: function () {
        console.log ("Despegando");
    },
    volar: function () {
        console.log ("Llegando al destino");
    },
    aterrizar: function () {
        console.log ("Aterrizando");
    }
};

const Paquete = {
    arrayContenido: ["Caja", "Corchopán", "Cinta aislante"]
}

const Pais = {
    numHabitantes: 5,
    continente: "Raticulín",
    gentilicio: "Raticulinos"
};

//Lectura de propiedades

let codError = O_Error.codigo;

let integrantes = grupos.integrantes;

let nivelesTinta = Impresora.tinta;

let pixeles = Pantalla.pixeles;

let especificaciones = Movil["especificaciones"];

//Modificacion de propiedades

grupos.numIntegrantes = 5;

Pantalla.dimensiones = "1920x1080";

if (Led.encendido) {
    Led.encendido = false;
} else {
    Led.encendido = true;
}

Movil.temperatura = "20º";
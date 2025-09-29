//Iteraciones Pair Programming

//Objetos

//Declaración
const Coche = {
    marca: "Seat",
    modelo: "Ibiza",
    matrícula: "234567H",
};

const Casa = {
    codPostal: 28080,
    calle: "Pimientos",
    portal: 2,
    piso: 4,
};

const FullStackDeveloper = {
    arrayLenguajes : ["HTML", "CSS", "JavaScript"],
    arrayProyectos : ["Web", "Repositorio", "Aplicación"],
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

const marcaPortatil = portatil.marca;

const marcaPortatil2 = Portatil["marca"];

const grupos = Concierto.grupos;

const RGB = [Led.Rojo, Led.Verde, Led.Azul];

//Modificación de propiedades

Portatil.modelo = "P345";

Concierto.cartelera.push = ("Guns N Roses");

Concierto.fecha = newDate();

Impresora.imprimiendo = {
    nombreArchivo: "Receta",
    copias: 3,
    numPaginas: 2
};

//Iteraciones

//Pair Programming

//Objetos

//Declaración

Noticia = {
    titular: "Playa inundada",
    cuerpo: "Se ha inundado una playa en Gijón"
};

Persona = {
    nombre: "Dolly",
    apellidos: "Parton Sánchez",
    edad: 67,
};

Avion = {
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

Paquete = {
    arrayContenido: ["Caja", "Corchopán", "Cinta aislante"]
}

Pais = {
    numHabitantes: 5,
    continente: "Raticulín",
    gentilicio: "Raticulinos"
};

//Lectura de propiedades

const codError = O_Error.codigo;

const integrantes = grupos.integrantes;

const nivelesTinta = Impresora.tinta;

const pixeles = Pantalla.pixeles;

const especificaciones = Movil["especificaciones"];

//Modificacion de propiedades

grupos.numIntegrantes = 5;

Pantalla.dimensiones = "1920x1080";

if (Led.encendido) {
    Led.encendido = false;
} else {
    Led.encendido = true;
}

Movil.temperatura = "20º";
let resultado = 0;

//console.log("Valor de la variable GLOBAL resultado: " + resultado);

function sumar(n1, n2) {
  resultado = n1 + n2;
  return resultado;
}

const resta = (n1, n2) => {
  let resultado = 0;
  console.log("Valor de la variable LOCAL resultado: " + resultado);
  resultado = n1 - n2;
  console.log("Valor de la variable LOCAL resultado: " + resultado);
  return resultado;
};

/* let resSuma= sumar(4,7)
console.log(resSuma);

console.log("Valor de la variable GLOBAL resultado: " + resultado);

resta(2,4) */

//objeto literal {}
/* const contacto1 = {
  nombre: "Dani",
  apellido: "Lopez",
  telefono: "123456789",
  direccion: "Calle falsa 123",
};
const contacto2 = {
  nombre: "Maria",
  apellido: "Perez",
  telefono: "0987654",
  direccion: "Calle falsa 1234",
  email: "maria@mail.com",
};

console.log(contacto1);
console.log(contacto1.nombre);//notacion de punto
console.log(contacto1.email);//undefined
console.log(contacto2);
console.log(contacto2.nombre);
console.log(contacto2.email);
console.log(contacto2["telefono"]);//notacion de corchetes
contacto2.direccion="Nueva direccion 765";
console.log(contacto2["direccion"]);
contacto1.email="eldani@mail.com"
console.log(contacto1.email); */

//funcion constructora
function Personaje(nombre, direccion,edad, avatar) {
  this.nombre = nombre;
  this.direccion = direccion;
  this.edad = edad;
  this.avatar = avatar;//probar quitar el this

  this.decirFrase= function (frase){
        return "Hola soy "+ this.nombre + " mi frase es: " + frase
  }
}

const personaje1= new Personaje("Homero","Av. Siempre Viva 742", 39, "fotoh.png")
/* console.log(personaje1); */
const personaje2= new Personaje("Bart","Av. Siempre Viva 742", 10,"foto.jpg")
/* console.log(personaje2.nombre);
console.log(personaje2.apellido="burns");
console.log(personaje2); */

//Crea una funcion que me permita instanciar tres personajes de los simpsons los tiene crear el usuario. 

//metodos

/* let saludo= "Hola Tarola"
console.log(saludo.length);
console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase()); */
//console.log(toUpperCase());da error
//alert("Hola atrola")
//prompt("Ingresa tu nombre")

//console.table(personaje1)
/* console.log(personaje1.decirFrase("MMMMM... croquetas"));
let frase=prompt("Di lo tuyo")
//console.log(personaje1.decirFrase(frase));
console.log(personaje2.decirFrase(frase)); */
//Operador in
console.log("nombre" in personaje1)
console.log("email" in personaje1)
//bucle for in
for(const key in personaje1){
    //console.log(key);
    console.log(key +": " + personaje1[key]);
}
for(const papas in personaje2){
    //console.log(papas);
    console.log(papas +": " + personaje2[papas]);
}

//class
class Libro{
    constructor(titulo, autor, edicion){
        this.titulo= titulo;
        this.autor=autor;
        this.edicion=edicion;
    }
    /* mostrarInfo= ()=> "Titulo: " + this.titulo + " Autor " + this.autor */
    mostrarInfo() {
        return "Titulo: " + this.titulo + " Autor " + this.autor
    }
}

const libro1= new Libro("Los tres mosqueteros", "Alejandro Dumas", "De oro")
for(const propiedad in libro1){
    console.log(propiedad + ": " + libro1[propiedad]);
}

console.log(libro1.mostrarInfo());
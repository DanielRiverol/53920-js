//Variable
let nombre; //declaracion de variable
let apellidoMaterno;
let apellidoPaterno;
let edad;
let temp;
//console.log(temp);
//asignar valores
nombre = "Dani"; //asignacion
apellidoMaterno = "Riv";
apellidoPaterno = "Lopez"; //string
edad = 41; //numerico
temp = 24.6;
//console.log(temp);
//reasignacion
temp = 30.1;
//console.log(temp);

//inicializacion de variable
let num1 = 89; //inicializando
const PI = 3.1415; //obligatorio inicializar
const GRAVEDAD = 9.8;
//GRAVEDAD = 10;

temp = 12;

let nombreCompleto = nombre + " " + apellidoPaterno; //concatenacion de variables

let nombreCompleto2 = nombre + " Perez";
let sensacionTerm = temp + "grados";

let suma = num1 + GRAVEDAD;
let resta = num1 - -10;
let mult = num1 * -10;
let div = num1 / 10 + PI;
//Metodos de entrada y salida
/* console.log(suma);

console.log("El nombre completo es:" + nombreCompleto);
console.log(3 + "3"); */

//alert
//alert("Hola tarola " + nombre);
/* let usuario= prompt("Ingresa tu nombre")
let edadUsuario= prompt("Ingresa tu edad")
console.log(usuario);
console.log(edadUsuario);

num1=prompt("Ingresa un numero")
alert(num1); */

let numero1 = prompt("Ingresa un numero");
let numero2 = parseFloat(prompt("Ingresa un numero"));
numero1 = parseFloat(numero1);

let resultado = numero1 + numero2; //concatenacion
alert(resultado);

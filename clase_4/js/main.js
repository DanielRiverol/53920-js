/* let ingreso = prompt(
  "Selecciona una bebida \n 1-Café \n 2- Té \n 3- Agua caliente"
); */

/* if (ingreso == "1" || ingreso === "UNO") {
  alert("Seleccionaste Café");
} else if (ingreso == "2") {
  alert("Seleccionaste Té");
} else if (ingreso == "3") {
  alert("Seleccionaste Agua caliente");
} else {
  alert("No seleccionaste una bebida");
} */
//Cambiar un switch
/* switch (ingreso) {
  case "1":
    alert("Seleccionaste Café");
    break;
  case "2":
    alert("Seleccionaste Té");
    break;
  case "3":
    alert("Agua Caliente");
    break;
    default:
      alert("No seleccionaste una bebida");
      break;
}
 */

//declaracion de funciones
function saludar() {
  //bloque de ejecucion
  console.log("hola tarola");
}
//llamado a la funcion
/* for(let i=0; i <3;i++){
  saludar()
}
saludar() */

/* function saludarConParametros(nombre){
  console.log("Hola " + nombre);
}
 let nom= prompt("ingres tu nombre")
 saludarConParametros(nom); */ //introducirlo en un for
/* saludarConParametros("Dani")
saludarConParametros("Ignacio")
saludarConParametros("Maria")
saludarConParametros("Flor") */
/* function saludarConNonbreYMomento(nombre, momento){
  console.log("Hola " + nombre + ", buenos/as " + momento);
}
saludarConNonbreYMomento("Dani", "dias")
saludarConNonbreYMomento("Pablo", "tardes")
saludarConNonbreYMomento("noches", "Claudia") */

function sumar(num1, num2) {
  //console.log(num1 + num2);
  return num1 + num2;
}
/* 
console.log(sumar(2, 45));
console.log(sumar(45, 45));
let resSuma=sumar(-89, 45)
console.log("El resutlado guarddo en resSuma es "+ resSuma); */

function div(num1, num2) {
  return num1 / num2;
  console.log(num1 / num2);
}
let resDiv = div(4, 2);
/* console.log(resDiv); */

/* console.log(sumar(4, resDiv)); */

function calculadora(num1, num2, op) {
  switch (op) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;

    default:
      return "Opcion no valida";
  }
}
/* 
console.log(calculadora(3,6,"+"));
console.log(calculadora(3,6,"-"));
console.log(calculadora(3,6,"*"));
console.log(calculadora(3,6,"/"));
console.log(calculadora(3,"+",6));
 */
//Scope

//let resultado = 0;//global
function restar(n1, n2) {
 let resultado = n1 - n2; //local
 //console.log("Soy la variable resultado dentro de la funcion "+resultado);
  return resultado;
}
function mult(n1, n2) {
 let resultado = n1 * n2; //local
 //console.log("Soy la variable resultado dentro de la funcion "+resultado);
  return resultado;
}

//console.log("Soy la variable resultado fuera de la funcion "+resultado);
/* restar(40,10)
mult(40,10) */
//console.log(resultado);

/* if(resultado < 10){
  let resultado= 10;
  console.log(resultado);
  console.log("Es menor a 10");
}else{
  console.log("NO Es menor a 10");
} */

//funcion anonima

const saludo= function (nombre){
  return "HOla tarola " + nombre}
console.log(saludo("Dani"));
//funcion flecha


const saludo2 = ()=> "hola Taroloa"
console.log(saludo2());


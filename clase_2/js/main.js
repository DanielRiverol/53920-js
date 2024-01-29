//Variables
let nombre; //declaración => no números ni caracteres especiales salvo _ o $
nombre = "Pablo"; //asignación
let apellido = "López"; //inicialización

const CLAVE = "oruga"; //las constantes siempre se inicializan

//nombre=prompt("ingresa tu nombre")
//alert(nombre)
//console.log(nombre);

//si condicion entonces algo

let temp = 29;
// operador = asiagnacion
//operador de comparacion == < > <= >= !=

/* if (temp >= 30) {
  //bloque de ejecucion
  console.log("Es mayor o igual");
}else{
    console.log("Es menor");

}
 */

/* let decision = prompt("Para donde vamos? arcoiris o cascada?");

if (decision == "arcoiris") {
  console.log("Nos salvamos");
} else {
  console.log("Nos caimos");
} */

//if anidado
let usuarioGuardado = "Dani";
let passGuardado = "12345";

//let usuario = prompt("Ingresa tu usuario");

/* let usuarioValido= usuario == usuarioGuardado//variable booleana
console.log(usuarioValido);
if (usuario == usuarioGuardado) {
  let passUsuario = prompt("Ingresa tu password");
  //if anidado
  if (passGuardado == passUsuario) {
    alert("Bienvenido/a " + usuarioGuardado);
  } else {
    alert("Credeneciales incorrectas");
  }
} else {
  alert("Usuario no encontrado");
} */

//if concatenados

/* let talle= 100
;

if (talle >= 100) {
  console.log("XL");
} else if (talle >= 80) {
  console.log("L");
}else if(talle >= 60){
    console.log("MD");
}else if(talle >= 40){
    console.log("S");
}else{
    console.log("XS");
} */

//console.log(5 === "5");
//&& devuelve true cuando condicion && condicion sean true
/* 
let usuario = prompt("Ingresa tu usuario");
let pass = prompt("Ingresa tu password"); */

/* let usuarioValido = usuario === usuarioGuardado;
console.log("Usuario " + usuarioValido);
let passValido = passGuardado === pass;
console.log("Password " + passValido);
let inicioSesion = usuarioGuardado === usuario && passGuardado === pass;
console.log("inicio " + inicioSesion);

if (usuarioGuardado === usuario && passGuardado === pass) {
  alert("Bienvenido " + usuarioGuardado);
} else {
  alert("Credenciales invalidas");
} */
/* 
console.log("Fin del proceso");

// || OR devuelve true cuando condicion || condicion es true 

if((usuario === usuarioGuardado || usuario === 'dani')&& passGuardado === pass ){
alert("Bienvenido "+ usuarioGuardado)
}else{
    alert("Credenciales incorrectas")
} */

let edadObligatoria = 18;
let edadOptativa = 16;
let edadLimite = 69;

let edadUsuario = parseInt(prompt("Ingresá tu edad"));

if(edadUsuario >= edadObligatoria && edadUsuario <=edadLimite){
    alert("Estas obligado a votar")
}else if(edadUsuario >= edadOptativa || edadUsuario >edadLimite){
alert("Podes votar si queres")
}else{
    alert("No podes votar todavia")
}

// for (desde;hsta; actualizacion)

/* for (let i = 0; i < 10; i = i + 1) {
  console.log("Conteo: " + i);
}
 */

/* for (let i = 1; i <= 3; i++) {
  alert("Ya llegamos a la India?");
  alert("No");
}
alert("mmmm a ver... ya!!!!"); */
/* 
for (let i = 10; i > 0; i--) {
  //i = i- 1
  console.log("Conteo: " + i);
}
console.log("Despegamos"); */
/* 
for (let i = 0; i < 20; i = i + 2) {
  console.log(i);
} */

//let ingreso = parseInt(prompt("Ingresa un número"));
/* let ingreso = prompt("Ingresa un número");
ingreso= parseInt(ingreso)

for (let i = 0; i <= 10; i++) {
  let resultado = ingreso * i;
  console.log(
    "El resultado de la multiplicación de " +
      ingreso +
      " X " +
      i +
      " es : " +
      resultado
  );
}
 */

//break

let palabraClave = "oruga";

/* for (let i = 1; i <= 3; i++) {
  let ingreso = prompt("Ingresa la palabra clave");
  if (ingreso == palabraClave) {
    alert("Adivinaste");
    break;
  } else {
    alert("Error te quedan" + i + " intentos");
  }
} */

//continue

/* for (let i = 0; i <= 10; i++) {
  if (i == 3 || i == 5) {
    console.log("Oruga");
    continue;
  }

  console.log(i);
} */
//Hagamos un script que me devuela los multipos de 3
/* for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log("Impar");
    continue;
  }
  console.log(i);
}
 */

//While
/* let contador = 0;

while (contador < 10) {
  console.log(contador);

  //condicion de salida
  contador++;
}
 */

/* let ingreso = prompt("Ya llegamos a la India?");

while (ingreso != "si") {
  //condicion de salida
  ingreso = prompt("Ya llegamos a la INDIA?");
}

alert("A ver ya!!!!"); */

/* let ingreso = prompt("no llevas a monte splah?");

while (ingreso != "si") {
  if (ingreso == "si digo si...") {
    alert("Claro");
    alert("Por supuesto");
  }

  ingreso = prompt("no llevas a monte splah?");
}

alert("Gracias papá"); */
/* let ingreso = prompt("Ingresa un producto. Para salir ingrese 0");

while (ingreso != "0") {
  alert("Ingresaste " + ingreso);
  //condicion de salida
  ingreso = prompt("Ingresa un producto. Para salir ingrese 0");
} */

//dowhile
/* while (false) {
  alert("No lo vals a ver porque la condicion es false");
} */

/* do {
  alert("Lo vas ver aunque la condicion sea false al inicio");
} while (false); */

let ingreso = "";

do {
  ingreso = prompt("Ingresa un producto. Para salir ingrese 0");
  alert("Ingresaste " + ingreso);
} while (ingreso != "0");

/* let ingreso = prompt("Ingresa un producto. Para salir ingrese 0");

while (ingreso != "0") {
  alert("Ingresaste " + ingreso);
  //condicion de salida
  ingreso = prompt("Ingresa un producto. Para salir ingrese 0");
} */

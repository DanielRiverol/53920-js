/* let prod1 = prompt("Ingresa Producto1");
let prod2 = prompt("Ingresa Producto2");
let prod3 = prompt("Ingresa Producto3");
let prod4 = prompt("Ingresa Producto4");

if (prod1 != "" && prod2 != "" && prod3 != "" && prod4 != "") {
  console.log(
    "El producto 1 es: " +
      prod1 +
      "\nEl producto  2 es : " +
      prod2 +
      "\nEl producto  3 es : " +
      prod3 +
      "\nEl producto  4 es : " +
      prod4
  );
} else {
  alert("Error debes cargar todos los productos");
} */

//El cajero automático
//Debemos generar un script para la operación de un cajero automático
/* El mismo tiene que: 
1- Mostrar un mensaje de bienvenida
2- Permitir hasta 3 intentos de ingreso con el PIN del cliente
  2a- Si ingresa correctamente dar mensaje de Bienvenida
  2b- Terminados los intentos informar al cliente que se comunique con el banco
3- Una vez ingresado mostrar las siguientes opciones en pantalla: 
  a- Saldo
  b- Retiro
  c- Depósito
  d- Salir 
4- Al finalizar mostrar mensaje
*/

alert("Bienvenido al banco");
//intentos de ingreso
let pinGuardado = "5701";
let ingresar = false;
for (let i = 2; i >= 0; i--) {
  let ingreso = prompt("Ingresa tu PIN");
  if (pinGuardado == ingreso) {
    alert("Bienvenido Cliente. Ya podes operar");
    ingresar = true;
    break;
  } else {
    alert("Error");
  }
}

//mostrar el menu
if (ingresar) {
  let saldo = 20000;

  let opcion = prompt(
    "Elegí una opción: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
  );

  while (opcion != "x") {
    if (opcion == "1") {
      alert("Tu saldo es: $" + saldo);
    } else if (opcion == "2") {
      let retiro = parseInt(prompt("Ingresa el monto a retirar"));
      //comprobar si no hay saldo suficiente
      saldo = saldo - retiro;
      alert("Retiro exitoso, tu saldo es: $" + saldo);
    }else if (opcion == "3") {
      let deposito = parseInt(prompt("Ingresa el monto a depositrar"));
      //comprobar si excede el monto permitido por cajero
      saldo = saldo + deposito;
      alert("Deposito exitoso, tu saldo es: $" + saldo);
    }else{
      alert("opcion no valida")
    }

    //condicion de salida
    opcion = prompt(
      "Elegí una opción: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
    );
  }

} else {
  alert("Retendremos tu tarjeta. Comunicate con el Banco");
}

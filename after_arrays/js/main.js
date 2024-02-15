function redondear(decimal) {
  return Math.round(decimal);
}
let resultado = 0;
/* for(let i=0; i <5; i++){
    //validarlo si el ingreso no es un numero
    let ingreso=prompt("Ingresa un Numero decimal")
    if(isNaN(ingreso)){
        console.log("El ingreso no es un numero");
        continue
    }
    resultado =redondear(ingreso)
    console.log(resultado);
    //usar while
} */

const listaProductos = [{ nombre: "Peras" }, 3, true,4];
console.log(listaProductos);
let limite = 4;

function Producto(nombre, cantidad) {
  this.nombre = nombre;
  this.cantidad = cantidad;
}

/* do {
  let nombre = prompt("Ingresa el nombre del producto");
  let cantidad = prompt("Ingresa cuantos productos");
  
  listaProductos.push(new Producto(nombre, cantidad));
  
} while (listaProductos.length != limite); */

// crear una funcion que me permita trabajar con cualquier array
while(listaProductos.length != limite){
    let nombre = prompt("Ingresa el nombre del producto");
    let cantidad = prompt("Ingresa cuantos productos");
    
    listaProductos.push(new Producto(nombre, cantidad));
}

console.log(listaProductos);

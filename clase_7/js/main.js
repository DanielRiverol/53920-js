function sumarRango(inicio, fin) {
  let total = 0;
  for (let i = inicio; i <= fin; i++) {
    total = total + i;
  }
  return total;
}

const nums = [1, 3, 2, 5, 1, 3, 10];


let total = 0;
for (let i = 1; i <= 10; i++) {
  total = total + i;
  //console.log("Valor de total = "+ total);
}
/* console.log(total);
console.log(sumarRango(1,10));
console.log(sumarRango(3,50));
console.log(sumarRango(10,20)); */

function mayorQue(n){
  //return (m)=> m > n;
  return function (m){
    return m > n
  }
}

const mayorQueDiez= mayorQue(10)// (m)=> m > 10
//console.log(mayorQueDiez(12));//(12)=> 12 > 10
//console.log(mayorQueDiez(-10));//(-10)=> -10 > 10

function asignarOperacion(operacion){
  switch (operacion) {
    case "+":
      return (n1,n2)=> n1 + n2; 
      
    case "-":
      return (n1,n2)=> n1 - n2; 
      
    default:
      return "Operacion no valida"
  }
}

const sumar= asignarOperacion("+")
const restar= asignarOperacion("-")
//console.log(sumar(1, 10));
//console.log(restar(1, 10));

function porCadaUno(arr, fn){
  for (const element of arr) {//arr=nums
    fn(element)//console.log(element)
  }
}

/* porCadaUno(nums, console.log)
porCadaUno(nums, alert) */
const cuadruple= []
function porCuatro(n){
  return cuadruple.push(n * 4)
}
/* console.log(nums);
console.log(cuadruple); */

/* porCadaUno(nums, porCuatro)
console.log(cuadruple); */
//porCadaUno(servicios, console.log)
porCadaUno(nums, (el)=>{
    cuadruple.push( el * 4)
})
//console.log(cuadruple);
const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1300, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  { id: 8, nombre: "mascarillas", precio: 2300, img: "mascarilla.jpeg" },
];
//forEach
nums.forEach((el)=>{
return cuadruple.push(el * 4)
})
//console.log(cuadruple);
//find
//let ingreso= prompt('Ingresa el servicio')

/* const encontrado=servicios.find((servicio)=>{
  return servicio.nombre == ingreso
}) */

//console.log(encontrado);
//filter devuelve un array
const filtrado = servicios.filter((el)=>{
  return el.precio > 12000
})
const filtradoPorNombre = servicios.filter((el)=>{
  //return el.nombre == "masajes"
  return el.nombre.includes("masaje")
})

/* console.log(filtradoPorNombre); */
//map devuelve un nuevo array
const precioActualizado= servicios.map(el=>{
    return {
      id: el.id,
      nombre: el.nombre,
      precio: el.precio * 1.50, 
      img: el.img
    }
})
console.log(servicios);
console.log(precioActualizado);
//reduce
console.log(nums);
const acumulado= nums.reduce((acc,el)=>{
  return acc = acc + el
},100)
console.log(acumulado);

const totalPrecios= servicios.reduce((acc,el)=>{
  return acc = acc + el.precio
},0)

console.log(totalPrecios);

const filtrado2= servicios.filter(el=>{
  return el.nombre.includes("mas")
})

console.log(filtrado2);
const carrito= []
const masaje= filtrado2.find(el=>{
  return el.precio < 2000
})
console.log(masaje);
carrito.push(masaje)
console.log(carrito);
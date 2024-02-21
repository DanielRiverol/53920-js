const tickets3D = [
  { id: 1, pelicula: "ant-man quantunmania", precio: 2400 },
  { id: 2, pelicula: "super mario bros, la película", precio: 2300 },
  { id: 3, pelicula: "john wick 4", precio: 2600 },
  { id: 4, pelicula: "the wale", precio: 2200 },
  { id: 5, pelicula: "shazam, la furia de los dioses", precio: 2575 },
  { id: 6, pelicula: "creed 3", precio: 2389 },
  { id: 7, pelicula: "the marvels", precio: 1500 },
];

/* function asignarOperacion(operacion) {
  switch (operacion) {
    case "+":
      return (a, b) => a + b;
    case "-":
      return (a, b) => a - b;
    default:
      return ()=>"El operador no es válido";
  }
}
let sumar = asignarOperacion('l')
console.log(sumar(3,5)); */

/* console.log(tickets3D.find((el)=>{
  return el.pelicula.includes("john")
})); */
// function buscarPelicula(arr, titulo){
//   return arr.find((el)=>el.pelicula.includes(titulo))
// }

// let encontrado= buscarPelicula(tickets3D,"john")
// let encontrado2= buscarPelicula(tickets3D,"cre")
// /* console.log(encontrado);
// console.log(encontrado2); */

// const ticketsReservados=[]
// function reservar(arr, pelicula){
//   arr.push(pelicula)
//   return arr;
// }
// reservar(ticketsReservados,encontrado)
// reservar(ticketsReservados,encontrado)
// console.log(ticketsReservados);

// function comprarTickets(tickets, recargo){
//   return tickets.reduce((acc, el)=>{
//       return acc= acc + el.precio
//   },recargo)
// }
// let cargoFijo= 2000
// console.log(comprarTickets(ticketsReservados,cargoFijo));

/* console.log(Math.PI);
console.log(Math.E);
console.log(Math.min(2,-4,1,0,5,4,-Infinity));
console.log(Math.max(2,-4,1,0,5,4,Infinity));
console.log(Math.sqrt(125)); */
//console.log(Math.cbrt(125));

function asignarOperacion(operacion) {
  switch (operacion) {
    case "+":
      return (a, b) => a + b;
    case "-":
      return (a, b) => a - b;
    case "raiz2":
      return (a) => {
        if (a < 0) {
          return "error";
        } else {
          return Math.sqrt(a);
        }
      };
    default:
      return () => "El operador no es válido";
  }
}
let sumar = asignarOperacion("raiz2");
//console.log(sumar(-16));
/* console.log(Math.ceil(3.0000000000000004));
console.log(Math.round(3.49));
console.log(Math.floor(3.99));

console.log(Math.round(Math.random()*100 + 50)); */

const hexa = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
//
let color = "";

for (let i = 0; i < 6; i++) {
  let aleatorio = Math.round(Math.random() * hexa.length);
  color = color + hexa[aleatorio];
  //console.log(color);
}
// console.log(hexa[15]);
// console.log("El color hexadecimal generado es: #" + color);
//crear una funcion que genere un token numerico

//Date
const fecha = new Date();
// console.log(fecha.getFullYear());
// console.log(fecha.getMonth()+1);
// console.log(fecha.getDate());
// //console.log(fecha.getDay());
// console.log(fecha.toString());
// console.log(fecha.toDateString());
// console.log(fecha.toLocaleDateString());
// console.log(fecha.getTime());
// console.log(fecha.getHours());
// console.log(fecha.getMinutes());
// console.log(fecha.getSeconds());
// console.log(fecha.toLocaleTimeString());

function calcularEstadia(ingreso, egreso) {
  let fechaIngreso = new Date(ingreso).getTime();
  let fechaEgreso = new Date(egreso).getTime();
  //validar que ingreso no sea mayor a egreso
  const milisegundoPorDia = 86400000;
  let cantidadDias = (fechaEgreso - fechaIngreso) / milisegundoPorDia;
  return cantidadDias;
}

let dias = calcularEstadia("2024, 1, 23", "2024,01, 28");
console.log(
  "La cantidad de días que vas a ocupar la habitación son: " + dias + " días"
);

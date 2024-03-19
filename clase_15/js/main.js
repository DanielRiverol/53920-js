// setTimeout(() => {
//   console.log("Mitad del proceso");
// }, 3000);
const card = document.querySelector(".card");
const btn = document.querySelector("#btn"),
  contenedor = document.querySelector(".contenedor");

const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
];

//asincronía
function square(num) {
  return num * num;
}

function logSquare(num) {
  console.log(square(num));
}

//logSquare(4);
//1s = 1000ms
// setTimeout(() => {
//   console.log("Soy una instruccion asincrona");
// }, 3000);
// console.log("Inicio del proceso");

// console.log("Final del proceso");

btn.addEventListener("click", () => {
  setTimeout(() => {
    card.classList.remove("active");
  }, 2500);
  card.classList.add("active");
});

// setTimeout(() => {
//   for (const letra of "Hola") {
//     console.log(letra);
//   }
// }, 3000);
// setTimeout(() => {
//   for (const letra of "Santiago") {
//     console.log(letra);
//   }
// }, 2000);

// setTimeout(() => {
//   console.log("Mitad del proceso");
// }, 0);
// console.log("Inicio del proceso");
// console.log("Final del proceso");
//setInterval
// let contador = 0;
// let detener = false;
// const intervalo = setInterval(() => {
//   contador++;
//   if (contador == 10) {
//     clearInterval(intervalo);
//   }
//   console.log("El valor de contador es :" + contador);
// }, 1000);

//Promesas
new Promise((resolve, reject) => {
  //cuerpo de la promesa
});

const eventoFuturo = (valor) => {
  return new Promise((resolve, reject) => {
    if (valor == true) {
      resolve("Promesa resuelta");
    } else {
      reject("Promesa rechazada");
    }
  });
};
// console.log(eventoFuturo(true)); //Resuelta
// console.log(eventoFuturo(false)); //Rechazada
// console.log(eventoFuturo()); //Rechazada

// //Métodos then y catch
// eventoFuturo(true).then((res) => {
//   console.log(res); //capturo el valor del resolve
// });
// eventoFuturo(false).catch((error) => {
//   console.log(error); //capturo el valor del reject
// });

//Pedir CD
const devolverCd = (respuesta) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (respuesta === "si") {
        resolve("Si! Gracias por prestalo");
      } else {
        reject("No, lo perdí :(");
      }
    }, 3000);
  });
};
//Prueba
console.log("Hola! ¿Te acordás que te presté un cd hace un tiempo?");
devolverCd()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

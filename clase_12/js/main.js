const btnSearch = document.querySelector("#btnSearch"),
  inputIngreso = document.querySelector("#ingreso"),
  contenedor = document.querySelector("#contenedor");

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

//Funciones de búsqueda
function buscarServicio(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro);
  });
  return encontrado;
}
function filtrarServicio(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}

// Función para crear estructura html
function crearHtml(arr) {
  contenedor.innerHTML = "";
  //validar qué pasa cuando no recibo ningun array
  let html;
  for (const el of arr) {

const {img, nombre, precio, id}= el

    html = `<div class="card">
                <img src=" ./img/${img}" alt="${nombre}">
                <hr>
                <h3>${nombre}</h3>
                <p>Precio: $${precio} </p>
                  <div class="card-action">
                    <button class="btn btn-success" id="${id}">Agregar</button>
                  </div>
              </div>`;
    //se la agrego al contenedor
    contenedor.innerHTML += html;
  }
}
crearHtml(servicios)
//Crear una funcion que guarde la preferencia del usuario si desea recordar o no susudatos
const inputUser = document.querySelector("#user"),
  inputPass = document.querySelector("#pass"),
  checkbox = document.querySelector("#check"),
  form = document.querySelector("form");
//console.log(form);
function guardarEnLS(storage) {
  //funcionalidad
  const user = {
    usuario: inputUser.value,
    pass: inputPass.value,
  };
  // if (storage == "local") {
  //   localStorage.setItem("usuario", JSON.stringify(user));
  // }
  // if (storage == "session") {
  //   sessionStorage.setItem("usuario", JSON.stringify(user));
  // }
  storage == "local" && localStorage.setItem("usuario", JSON.stringify(user));
  storage == "session" &&
    sessionStorage.setItem("usuario", JSON.stringify(user));
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  // if (checkbox.checked) {
  //   guardarEnLS("local");
  // } else {
  //   guardarEnLS("session");
  // }
  checkbox.checked ? guardarEnLS("local") : guardarEnLS("session");
});

let temp = 29;
// if (temp > 29) {
//   console.log("Dia caluroso");
// } else {
//   console.log("Dia agradable");
// }
// //condicion ? true : false
// temp > 29 ? console.log("Dia caluroso") : console.log("Dia agradable");
const persona = {
  nombre: "Juanito",
  apellido: "Arcoiris",
  edad: 18,
  activo: false,
};
// let permiso;
// if (persona.edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if(permiso){
//   console.log("Podes entrar al casino");
// }else{
//   console.log("NO Podes entrar al casino");
// }
let permiso = persona.edad >= 18 ? true : false;
//console.log(permiso);
// permiso
//   ? console.log("Podes entrar al casino")
//   : console.log("NO Podes entrar al casino");
//op AND
let carrito = [0];
// if(carrito.length === 0){
//   contenedor.innerHTML= "El carrito esta vacio"
// }
carrito.length === 0 && (contenedor.innerHTML = "El carrito esta vacio");

let estado = persona.activo && "Cuota al dia";

//console.log(estado);
const persona1 = {
  nombre: "Juanito",
  apellido: "Arcoiris",
  edad: 18,
  activo: false,
};
let n1 = null;
const persona2 = {
  id_persona: 1,
  nombre: "Lisa",
  apellido: "Simpson",
  edad: 8,
};

// localStorage.setItem("carrito", JSON.stringify({ nombre: "Juan" }));
// const carrito2= JSON.parse(localStorage.getItem('carrito')) || [];
// console.log(localStorage.getItem("carrito"));
// console.log(carrito2);

// console.log(persona2?.nombre || "la persona no existe");
// console.log(persona1.nombre || "la persona no existe");
//Destructuring
// let nombre= persona1.nombre
// let edad= persona1.edad

const { nombre, apellido, activo, edad } = persona1;
const { nombre: nombre_pers , id_persona:id} = persona2; //alias

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre_pers);
console.log(id);

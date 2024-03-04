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
    html = `<div class="card">
                <img src=" ./img/${el.img}" alt="${el.nombre}">
                <hr>
                <h3>${el.nombre}</h3>
                <p>Precio: $${el.precio} </p>
                  <div class="card-action">
                    <button class="btn btn-success" id="${el.id}">Agregar</button>
                  </div>
              </div>`;
    //se la agrego al contenedor
    contenedor.innerHTML = contenedor.innerHTML + html;
  }
}
//crearHtml(servicios)

// btnSearch.addEventListener("click", () => {
//   const filtrados = filtrarServicio(servicios, inputIngreso.value);
//   console.log(filtrados);
//   crearHtml(filtrados);
// });

//localStorage
localStorage.setItem("saludo", "Soy un mensaje almacenado en LS");
localStorage.setItem("darkMode", true);
localStorage.setItem("edad", 42);
localStorage.setItem('conjunto', [1,2,3,4,5,6,7,8,9])
//recuperar info
const saludo = localStorage.getItem("saludo");
console.log(typeof saludo);
const modoOscuro = localStorage.getItem("darkMode") == "true";
console.log( modoOscuro);
const edad = parseInt(localStorage.getItem("edad"));
console.log(edad);
const conjunto= localStorage.getItem('conjunto').split(',')
console.log(conjunto);
//localStorage.setItem('carrito',[])
//remover items
localStorage.removeItem('saludo')
localStorage.removeItem('conjunto')

localStorage.clear();

const usuario = { nombre: "Dani", edad: 41 };

const usuarioEnJson= JSON.stringify(usuario)
localStorage.setItem('obj',usuarioEnJson)

const recuperoUsuario = JSON.parse(localStorage.getItem("obj"));
console.log(recuperoUsuario);
//guardar carrito en el LS

const carrito=[]
let carritoLS = JSON.parse(localStorage.getItem("carrito"));
localStorage.setItem('carrito',JSON.stringify(carrito))
btnSearch.addEventListener('click', ()=>{
  const encontrado= buscarServicio(servicios, inputIngreso.value)
  console.log(encontrado);
  carrito.push(encontrado)
  localStorage.setItem('carrito',JSON.stringify(carrito))
  console.log(carrito);
  carritoLS= JSON.parse(localStorage.getItem('carrito'))
  console.log(carritoLS);
})
const btnMostrar= document.querySelector("button.btn-success"),
 btnEliminar= document.querySelector("button.btn-delete")

 btnMostrar.addEventListener('click', ()=>{
  crearHtml(carritoLS)
 })

 btnEliminar.addEventListener("click", ()=>{
  localStorage.removeItem('carrito')
  //donde debe ir este mensaje?
  contenedor.innerHTML="No tienes productos en el carrito";
 })

 //Crear una funcion que guarde la prefencia del usuario si desea recordar o no susu datos
 const inputUser = document.querySelector("#user"),
   inputPass = document.querySelector("#pass"),
   checkbox = document.querySelector("#check"),
   form = document.querySelector('form');

   function guardarEnLS(storage){
    //funcionalidad
   }

   form.addEventListener('submit',(e)=>{
        e.preventDefault()
        guardarEnLS('')
   })
const paises = [
  "Argentina",
  "Colombia",
  "Brasil",
  "México",
  "Uruguay",
  "Venezuela",
  "Perú",
  "Chile",
  "Polonia",
  "Canadá",
];
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

const titutlo = document.getElementById("titulo");
const titutloSec = document.querySelectorAll("h2#tres.hola");

const caja = document.querySelector("div.caja#caja"),
  texto = document.querySelector("#pais"),
  btnSearch = document.querySelector("#btnSearch");
//console.log(caja);
//addEventListener
/* caja.addEventListener("click",()=>{
  console.log("Hiciste click en la caja");
}) */

//profijo ON
caja.onclick = () => {
  //console.log("Hiciste click y usaste el prefijo ON");
};
/* caja.addEventListener('mousedown', ()=>{
  console.log('Presionaste el boton del mouuse');
})
caja.addEventListener('mouseup', ()=>{
  console.log('Soltaste el boton del mouuse');
}) */
/* caja.addEventListener("mouseenter", () => {
  caja.style.backgroundImage = "url(./img/estados.jpg)";
  texto.innerHTML="ESTADOS"
});
caja.addEventListener("mouseleave", () => {
  console.log("saliste de la caja");
  caja.style.backgroundImage = "url(./img/australia.jpg)";
  texto.innerHTML="AUSTRALIA"
});

caja.addEventListener('click', ()=>{
  caja.style.backgroundImage = "url(./img/pum.png)";
  //texto.className="destacado"
  texto.innerHTML="<h1 class='destacado'>PUM</h1>"
}) */

const inputs = document.querySelectorAll("input");
//console.log(inputs);
const inputSearch = inputs[0];

/* inputSearch.addEventListener('keydown',()=>{
  console.log(inputSearch.value);
}) */
/* inputSearch.addEventListener("keyup", () => {
  const encontrado = buscarServicio(servicios, inputSearch.value);
  console.log(encontrado);
}); */

//console.log(buscarServicio(servicios, "mani"));

btnSearch.addEventListener("click", () => {
  const encontrado = buscarServicio(servicios, inputSearch.value);
  console.log(encontrado);
});
//change
const inputNombre = inputs[1];
const inputEdad = inputs[2];

/* inputNombre.addEventListener('change', ()=>{
  console.log("Cambio");
})
inputEdad.addEventListener('change', ()=>{
  console.log("Cambio");
}) */
const select = document.querySelector("select#paises");
for (const pais of paises) {
  const option = document.createElement("option");
  option.value = pais;
  option.innerText = pais;
  select.append(option);
}

select.addEventListener("change", () => {
  const pais = select.options[select.selectedIndex].value;
  document.querySelector("#info").innerText = pais;
  console.log(pais);
});

//submit
const formulario = document.querySelector("form");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  console.log(e.target[0].value);
  console.log(e.target[1].value);

  console.log("formulario enviado");
});

// caja.addEventListener('mousemove',(e)=>{
//     const x= e.clientX
//     const y= e.clientY
//     console.log(`Puntero en x: ${x} y en y: ${y}`);
// })

inputSearch.addEventListener("keyup", (e) => {
  console.log(e.key);
  if (e.key == "Enter") {
    const encontrado = buscarServicio(servicios, inputSearch.value);
    console.log(encontrado);
  }
});
window.addEventListener('keydown', (e)=>{
console.log(e.key);
})
const productos = [
  { id: 1, nombre: "arroz integral", precio: 360 },
  { id: 2, nombre: "papa", precio: 195 },
  { id: 3, nombre: "tomate", precio: 525 },
  { id: 4, nombre: "morrón", precio: 1800 },
  { id: 5, nombre: "pan", precio: 570 },
  { id: 6, nombre: "aceitunas", precio: 480 },
  { id: 7, nombre: "fideo", precio: 525 },
  { id: 8, nombre: "arroz", precio: 1050 },
  { id: 9, nombre: "avena", precio: 600 },
  { id: 10, nombre: "cebolla", precio: 135 },
  { id: 11, nombre: "zanahoria", precio: 270 },
  { id: 12, nombre: "brócoli", precio: 675 },
  { id: 13, nombre: "lechuga", precio: 180 },
  { id: 14, nombre: "espaguetis", precio: 525 },
];

const personas = [
  "Juan",
  "Emma",
  "Carlos",
  "Olivia",
  "Pedro",
  "Sophia",
  "Luis",
  "Diego",
  "Isabella",
  "Miguel",
  "Liam",
  "María",
  "Lucas",
  "Ana",
  "Elena",
  "Laura",
  "Isabel",
  "Sofía",
  "Oliver",
  "Amelia",
  "Pedrito",
];

//console.dir(document.body)
//Acceso a los nodos por id
const titulo = document.getElementById("titulo");
titulo.innerHTML = "<span>Clase 9</span>";
//console.log(titulo)
//Acceso al nodo por clase
//const paises = document.getElementsByClassName('pais')
const paises = document.getElementsByTagName("li");

//console.log(paises[0].innerHTML="<em>ARGENTINA</em>");
for (const elemento of paises) {
  //console.log(elemento.innerHTML);
}
//Agregar estilos
//paises[0].className="pais box"
//titulo.style.backgroundColor="red"
//Crear elementos
const parrafo = document.createElement("p");

parrafo.innerText = "Soy un parrafo creado desde JS";
//Agregar al body
//document.body.append(parrafo)
const contenedor = document.getElementById("contenedor");
contenedor.append(parrafo);

const listaNombres = document.getElementById("nombres");
for (const nombre of personas) {
  const li = document.createElement("li");
  li.innerText = nombre;
  listaNombres.append(li);
}
//Remover elementos
//titulo.remove()
titulo.style.display = "block";
//Template literals

const producto = {
  nombre: "Papas",
  precio: 230,
};

let concatenado =
  "Producto: " + producto.nombre + ", precio: $" + producto.precio;
contenedor.innerText = concatenado;
console.log(concatenado);
let template = `Producto: 
${producto.nombre}, precio:
u$s ${producto.precio}`;
console.log(template);
contenedor.innerText = template;
 
const cardProducto = `<div class="card">
                        <h3>Producto: ${producto.nombre}</h3>
                        <p>Precio: u$s ${producto.precio}</p>
                      </div>`;

contenedor.innerHTML = `<div class="card">
                        <h3>Producto: ${producto.nombre}</h3>
                        <p>Precio: u$s ${producto.precio}</p>
                      </div>`;

for (const producto of productos) {
  const cardProducto = `<div class="card">
                        <h3>Producto: ${producto.nombre}</h3>
                        <p>Precio: u$s ${producto.precio}</p>
                      </div>`;
  contenedor.innerHTML = contenedor.innerHTML + cardProducto;
}

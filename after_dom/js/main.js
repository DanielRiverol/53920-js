const inputNombre = document.querySelector("#nombre"),
  inputDescripcion = document.querySelector("#descripcion"),
  inputPrecio = document.querySelector("#precio"),
  inputImg = document.querySelector("#img"),
  inputTalle = document.querySelector("#select-talle"),
  btnGuardar = document.querySelector("#btnGuardar"),
  contenedor = document.querySelector("#contenedor");

const productos = [];
const talles = ["xs", "s", "m", "xl", "xxl"];

//cargar opciones en select
for (const talle of talles) {
  const option = document.createElement("option");
  option.value = talle;
  option.innerText = talle;
  inputTalle.append(option);
}

//constructor Producto
function Producto(nombre, descripcion, precio, talle, img) {
  this.id = productos.length + 1;
  this.nombre = nombre;
  this.descripcion = descripcion;
  this.precio = parseFloat(precio);
  this.talle = talle;
  if (img == "") {
    this.img = "https://via.placeholder.com/250";
  } else {
    this.img = img;
  }
}

//función crearHtml
function crearHtml(arr){
  let html;
  for (const producto of arr) {
    html = `
        <div class="col"> 
            <div class="card">
              <div class="card-image">
                <img class="responsive-img" src=${producto.img} />
              </div>
            <div class="card-content">
                <span class="card-title">${producto.nombre}</span>
                <p>${producto.descripcion}
                  <p>Size: ${producto.talle}</p>
                </p>
                <p>$${producto.precio}</p>
            </div>
            <div class="card-action">
              <input type= "button" class="btn" id=${producto.id} value="Comprar">
            </div>
          </div>
        </div>`;
  }
  contenedor.innerHTML = contenedor.innerHTML + html;
}

//console.log(inputDescripcion.value);
//Evento para guardar
btnGuardar.addEventListener('click', ()=>{
  const nuevoProducto= new Producto(inputNombre.value,inputDescripcion.value, inputPrecio.value, inputTalle.value, inputImg.value)
  
  console.log(nuevoProducto);
  productos.push(nuevoProducto)
  console.log(productos);
  crearHtml(productos)
})
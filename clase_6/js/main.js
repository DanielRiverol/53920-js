//objeto literal
const dracula = {
  titulo: "Drácula",
  autor: "Bram Stoker",
  anioPublicacion: 1897,
  genero: "Novela gótica",
  idioma: "Inglés",
};

//funcion constructora
function Libro(titulo, autor, anioPublicacion, genero, idioma) {
  this.titulo = titulo;
  this.autor = autor;
  this.anioPublicacion = anioPublicacion;
  this.genero = genero;
  this.idioma = idioma;

  // Método para mostrar información
  this.mostrarInformacion = function () {
    return (
      "Título: " +
      this.titulo +
      "\n" +
      "Autor: " +
      this.autor +
      "\n" +
      "Año de Publicación: " +
      this.anioPublicacion +
      "\n" +
      "Género: " +
      this.genero +
      "\n" +
      "Idioma: " +
      this.idioma
    );
  };
}
const frankentein = new Libro(
  "Frankenstein",
  "Mary Shelley",
  1818,
  "Novela gótica",
  "Inglés"
);
//array
const nums = [1, 30, 5, 1, 27, -34, 6.45, 0, 1];
/* console.log(nums[0]);
console.log(nums[1]);//posiciones
console.log(nums[2]);
console.log(nums[3]);
console.log(nums[6]);

let resultado= nums[1] + nums[5]
console.log(resultado); */
const nombres = ["Dani", "Pablo", "Anna", "Flor"];

//console.log(nombres[2]);
const frutas = ["Manzana", "Naranja"];

//console.log(frutas[0]);
const mixto = [true, "Hola mundo", 12, { nombre: "Pedro", edad: 33 }, nums];
/* console.log(mixto[4][0]);
const arrayNums= mixto[4]
console.log(arrayNums[1]); */

//console.log(nums.length);
for (let i = 0; i < nums.length; i++) {
  //console.log(nums[i]);
}
//metodos
//push agrega elemnto al final del array
/* let ingreso=prompt("Ingresa un numero") */
nums.push(-98, 3, 5, 9);
//elimina elementos de array al final pop
nums.pop();
nums.pop();
nums.pop();

//agregar al principio
nums.unshift(34, 54);

//eliminar elem del principio
nums.shift();

//quitar de determinada posicion splice(posicion,cant elementos)

//nums.splice(3,1)
//console.log(nums[0]=0);//reasignar el valor a una posicion específica
console.log(nums);
//console.log(nums.join("*"));
//Unir arrays
const nuevoArray = nombres.concat(frutas);
//console.log(nuevoArray.length);

/* console.log(nums.indexOf(1));
console.log(nums.indexOf(7)) */
/* console.log(nums.includes(-34));
console.log(nums.indexOf(-34));
console.log(nombres.includes("Maria"));
console.log(nombres.indexOf("Maria")); */
const tresMosqueterois = new Libro(
  "Los tres mosqueteros",
  "Alejandros Dumas",
  1600,
  "Novela",
  "Frances"
);
const biblioteca = [];

biblioteca.push(frankentein, dracula, tresMosqueterois)

console.log(biblioteca);
//for of
for (const elemento of biblioteca) {
    /* console.log(elemento.titulo);
    console.log(elemento.autor);
    console.log(elemento.idioma); */
    console.log(elemento)
} //crear una funcion que reciba un array y recorra todos sus elementos

/* for (const iterator of frutas) {
    console.log(iterator);
} */


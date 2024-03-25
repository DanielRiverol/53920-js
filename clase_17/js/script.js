const fs= require('fs')
const http= require('http')
// const frase =
//   "Dentro de cada hombre hay una lucha entre el bien y el mal que nunca se resuelve..!";
// fs.writeFile('./archivo.txt', frase,()=>{
//     try {
//         console.log("Exito");
//     } catch (error) {
//         console.log(error);
//     }
// })
http.createServer((req, res)=>{
res.write("<h1>Hola desde NODE</h1>")
res.end()
}).listen(4500)
// window es un objeto que se refiere a la pantalla

console.log(location);

console.log(location.href); ///Esta es la url de la página

console.log(location.hostname); ///Es el hostname de la página dominio de la página que compramos

console.log(location.host); /// devuelve el puerto en nuestro caso es el 5500

console.log(location.pathname); /// Esta es la ruta o camino (path) o nombre de ruta

console.log(location.protocol) ///conjunto de reglas que sirve para enviar y recibir información HTTP


let contador = 0;
let intervalo = setInterval(() =>{
    console.log("Hola Mundo")
    if (contador === 6) {
        clearInterval(intervalo);
    }    
    contador++
    
}, 2000)


setTimeout(()=> {
    console.log("ejecucion de time out")
}, 3000);


window.localStorage.setItem("contrasenhas","1234");

let contra = window.localStorage.setItem("contrasenhas");

console.log(contra);

let profile = window.localStorage.setItem("tema", "claro");

window.localStorage.removeItem("contra"); // remueve lo creado

window.localStorage.clear();  /// limpia el local storage


if (
    window.confirm(
      "Deseas eliminar todas las variables guardadas en el local storage?"
    )
  ) {
    alert("Hey , las variables fueron eliminadas");
  
    window.localStorage.clear();
  }
  
// function suma(5,4){
//     let total = numero1 + numero2;
//     console.log(total)
//     return total;
// }


// function ecuacionCuadratica (a,b,c){
//     let discriminante = b ** 2 - 4*a*c;
//     let x = 0
    
//     if (discriminante > 0) {
//         x = -b + Math.sqrt(discriminante)/2*a;
//         let escribir_formula = document.write(`<h1>${x}</h1>`)
        
//         return escribir_formula;
//      }//else{
//     //     return "Error, ingresa valores positivos";  
//     // }     
// }
// ecuacionCuadratica(5,2,3);

function ecu_cuadratica(a, b, c) {
    let discriminante = b ** 2 - 4 * a * c;
    let x = 0;
    if (discriminante > 0) {
      x = -b + (Math.sqrt(discriminante) / 2) * a;
      let escribir_formula = document.write(`
      <div style="display: flex; flex-direction: column;">
          <h1>${x}</h1>
          <p>${a}</p>
          <p>${b}</p>
          <p>${c}</p>
      </div>
      `);
      return escribir_formula;
    } else {
      return "Error, ingresa valores validos";
    }
  }
  
  ecu_cuadratica(56, 34, 5);


  // recursividad

  //bucle-while

  let contador = 0;

  while(contador<10) {
      console.log(contador)
      contador++;
  }

  //funcion recursiva
  function recursividad(contador){
      if (contador>=10) {
          return;
      }
      console.log(contador)
      return recursividad(contador + 1)
  }
//   recursividad(0)




//funciones anidadas

function sumarCuadrados (a,b){
    function cuadrado(x){
        return x * x;
    }
    return cuadrado(a) + cuadrado(b);
}
console.log(sumarCuadrados (4,5))


//funcion binomio

function binomio_cuarta(){

    function suma_cuarta(a,b){
        return a**4 + b**4
    }
    function suma_cubo(a,b) {

      }
}



//typeof

const mi_peticion_de_servidor = [
    {
        nombre : "nombre1",
        edad : "35",
        altura : 1.85,
    },
    {
        nombre : "nombre2",
        edad : "33",
        altura : 1.75,
    },
    {
        nombre : "nombre3",
        edad : "30",
        altura : 1.80,
    }
]

//tengo que implementar  
//una funcionalidad  donde voy a generar  un id en base al nombre y la edad multiplicada x2

function generarId(nombre, edad) {
    return nombre + edad*2
}
//generarId(mi_peticion_de_servidor[0].mi_peticion_de_servidor[0].edad)

console.log(
    generarId(mi_peticion_de_servidor[0].mi_peticion_de_servidor[0].edad)
    );
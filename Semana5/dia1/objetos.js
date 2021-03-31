/// OBJETOS

//ES UNA COLECCION DE PROPEIDADES

//QUE ES UN PROPIEDAD? ESTA COMPUESTA DE LLAVES (key) Y VALORES (value)

//ES UN TIPO DE DATOS

// let array_de_ejemplo =[]

// MiObjeto.nombreDeLaPropiedad //asi es como yo accedo a una propiedad en mi objeto
// let miObjeto2 = {
//     propiedad1 : '....',
//     propiedad2 : '....',
//     propiedad3 : '....',
//     "propiedad4" : 4,

// }
// miObjeto.propiedad10000  // cuando vaya a imprimir me dará undifined

// let MiObjeto = new Object();   // esto se le llama mas un constructor.

// miObjeto.propiedad1 = 'es un objeto'
// miObjeto.propiedad2 = 'es otra propiedad'
// miObjeto.propiedad3 = 'es otra otra propiedad'

//A la antigua

// let comida_favorita = new Object();

// comida_favorita.nombre = "lomo saltado";

// comida_favorita.costo = 20.45;

// comida_favorita.rating = [1,2,3,4,5];

// comida_favorita.estaDisponible = true;

// comida_favorita["nombre"] = "pizza"

// console.log(comida_favorita["nombre"])

// function mostrarPropiedades(objeto,propiedadObjeto){
//     let resultado = "";

//     for (let elemento in objeto){
//         if(objeto.hasOwnProperty(elemento)){
//             resultado += `${propiedadObjeto}.${elemento} = ${objeto[elemento]} \n`}
//         }
//     }

let miPerro = {
  nombre: "Tyson",
  raza: "Labrador",
  edad: 5,
};

function mostrarObjetos(perro) {
  let resultado = "";
  for (let elemento in perro) {
    resultado += `${perro[elemento]} \n`;
  }
  return resultado;
}
console.log(mostrarObjetos(miPerro));

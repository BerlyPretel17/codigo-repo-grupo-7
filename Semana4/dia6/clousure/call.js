//
//SCOPE  - ESPACIO DISPONIBLE QUE ESTA ENTRE LLAVES {}

function ejemplo(){
    let texto = "texto inicial";

    function mostrarTexto(){
        alert(texto);
    }
    mostrarTexto();
}
ejemplo();


function crearFunction(){
    let nombre = 'Pablo';

    function mostrarNombre(){
        //scope espacio disponible para poner codigo en mi función
        alert(nombre)
        return;
    } 
    // mostrarNombre();
    // return;
    return mostrarNombre;
}
let llamarFuncion = crearFunction();
llamarFuncion();


function sumadorDeNumeros(x){
    return function(y){
        return x + y;
    }    
    return (y) => x + y;
}

let suma5 = sumadorDeNumeros(5);

console.log(suma5(2));
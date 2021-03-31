function mostrarAlerta(){
    alert('Hola!!')
}

const boton = document.querySelector('button');

boton.addEventListener("click", mostrarAlerta);


let segundos = 30;

function empezarCuentaAtras(){
   let intervalo = setInterval(function(){
        segundos--;
        if (segundos === 0) {
            clearInterval(intervalo);
            return;
        }
        imprimirSegundos();

    }, 1000);
}

function imprimirSegundos(){
    console.log(segundos);
}

empezarCuentaAtras();
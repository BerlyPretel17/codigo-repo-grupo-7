// let mi_nombre = prompt("Adivina mi nombre!")

// while (mi_nombre.toLowerCase() !== 'berly' ) {      
//     // let match = prompt('sigue intentando')
//     if (mi_nombre.toLowerCase() === 'berly') {
//         alert('Hey adivinaste mi nombre');
//         break        
//     }else{
//         let match = prompt('sigue intentando');
//         if (match === 'berly') {
//             alert('Hey adivinaste mi nombre');
//             break
//         }
//     }   
// }

// let mi_nombre = prompt("Adivina mi nombre!")
// while (mi_nombre.toLowerCase() !== 'berly' ){
//     mi_nombre = prompt('sigue intentando');
//     break
// }
// alert('hey! adivinaste mi nombre')


//DO WHILE

// let mi_nombre = prompt("Adivina mi nombre!")

// do {
//     mi_nombre = prompt('sigue intentando');
// } while (mi_nombre.toLowerCase() !== 'berly');

// alert('hey! adivinaste mi nombre');


//  RECURSIVIDAD
    

function adivina_mi_nombre(mi_nombre){ 
    mi_nombre = prompt("Adivina mi nombre!");   
    if (mi_nombre === 'berly') {
        alert('hey! adivinaste mi nombre');
        return;
    }        
        adivina_mi_nombre(mi_nombre);       
}
adivina_mi_nombre()
console.log('Hola mundo');

for (let i = 0; i < 300; i+=2) {
    console.log(i);    
}

for (let i = 0; i<1000 && i % 3 === 0 || i % 5 === 0 || i % 7 === 0; i++){
    console.log('i')
}


//console.log('Hola Mundo');

// FOR

// for(let pasos = 0; pasos < 5; pasos++){
//     console.log('Camina de frente')
// }

for (let i = 0; i<1000 && i % 3 === 0 || i % 5 === 0 || i % 7 === 0; i++){
    console.log(i)
}

for (let i = 0; i<=1000 ; i++){
    if((i % 3 === 0)||(i % 5 === 0)||(i % 7 === 0) ){
        console.log(i)
    }
      
}

let total = 0
for (i=0; i<1000;i++){
    if((i%3===0 || i%5===0)){
        total+= i; //total = total + i
    }
}
console.log(total)

/// while
let counter = 0;

while (counter < 10) {
    console.log(counter)
    counter++;    
}
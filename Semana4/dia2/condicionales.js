// //CONDICIONALES


// //condición básica
// if (condicion es true){
//     //hago algo acá
// }else{
//     //hago otra cosa aca si la condición es diferente
// }


// //condición múltiple
// if(si se cumple esta condición){
//     //mi código se ejecuta si la condición es verdadera
// }else if{
//     //Si se cumple esta otra condición
// }else if{
//     //Si se cumple esta otra condición
// }else {
//     //Si ninguna condición se cumple
// }


// let condicion = false;

// if(condicion === true){
//     console.log("Hola amigos, bienvenido")
// }else {
//     console.log("Que estas esperando")
// }

// let a = 0;
// let b = 0;

// let a = 5;
// let b = 4;


//ejemplo de condicional multiple


// let lenguaje_de_programacion = "php";

// if(lenguaje_de_programacion == "python"){
//     console.log("Python es genial")
// }else if(lenguaje_de_programacion == "javascript"){
//     console.log("También lo es")
// }else if(lenguaje_de_programacion == "php"){
//     console.log("Apaga tu computador, xD")
// }else{
//     console.log("Te recomiendo aprender algo")
// }


// let cancion_favorita="hells bells";

// if(cancion_favorita == "thunderstruck"){
//     console.log(" In the middle of a railroad track I looked round")
// }else if(cancion_favorita == "shoot to thrill"){
//     console.log("Just keep a-comin', and put your hand out to me")
// }else if(cancion_favorita == "hells bells"){
//     console.log("Your mind on the fantasy")
// }else {
//     console.log("Aprender mas canciones")
// }



// ////FUNCIONES

// function miFuncion (){
//     console.log("Mi Pimera función es la mejor del mundo");
//     console.log("Las funciones sirven para no repetir mi código");
//     console.log("Las funciones me ayudan a escribir mejor código");
// }


// function temperatura(clima){
//     if (clima == "lluvioso"){
//         return "debes usar paraguas"
//     }if (clima == "nublado"){
//         return "es un día muy gris"
//     }if (clima == "seco"){
//         return "fabulos día"
//     }    
// }

// console.log(temperatura("lluvioso"))
// console.log(temperatura("nublado"))

let seleccionar = document.querySelector("select");
let titulo = document.querySelector("h1");
let parrafo = document.querySelector("p");

seleccionar.addEventListener('change', musicaVarias);

function musicaVarias() {
    
    let eleccion = seleccionar.value;

    if (eleccion == "thunderstruck") {
        titulo.textContent = "Thunderstruck";
        parrafo.textContent = "Thunder, thunder, thunder, thunder I was caughtIn the middle of a railroad track I looked round And I knew there was no turning back My mind raced And I thought what could I do And I knew There was no help, no help from you Sound of the drums     Beating in my heart The thunder of guns  Tore me apart You've been Thunderstruck  Rode down the highway Broke the limit, we hit the town Went through to Texas, yeah Texas, and we had some fun We met some girls Some dancers who gave a good time Broke all the rules Played all the fools Yeah yeah they, they, they blew our minds And I was shaking at the knees Could I come again please Yeah them ladies were too kind You've been Thunderstruck I was shaking at the knees Could I come again please Thunderstruck, Thunderstruck, Thunderstruck, Thunderstruck It's alright, we're doin' fine It's alright, we're doin' fine, fine, fine  Thunderstruck, yeah, yeah, yeah Thunderstruck, Thunderstruck Thunderstruck, baby, baby     Thunderstruck, you've been Thunderstruck Thunderstruck, Thunderstruck You've been Thunderstruck";        
    }else if (eleccion == "helssbells"){
        titulo.textContent = "Helss Bells"
        parrafo.textContent = "I'm rolling thunder, pouring rain I'm coming on like a hurricane My lightning's flashing across the sky You're only young, but you're gonna die I won't take no prisoners, won't spare no lives Nobody's putting up a fight I got my bell, I'm gonna take you to hell I'm gonna get ya, Satan get ya Hells bells Hells bells, you got me ringing Hells bells, my temperature's high Hells bells I'll give you black sensations up and down your spine If you're into evil, you're a friend of mineee the white light flashing as I split the night 'Cos if good's on the left, then I'm sticking to the right I won't take no prisoners, won't spare no lives Nobody's puttin' up a fight I got my bell, I'm gonna take you to hell   I'm gonna get ya, Satan get ya  Hells bells  Hells bells, you got me ringing Hells bells, my temperature's high Hells bells Hells bells, Satan's coming to you Hells bells, he's ringing them now  Those hells bells, the temperature's high Hells bells, across the sky Hells bells, they're taking you down Hells bells, they're dragging you down Hells bells, gonna split the night Hells bells, there's no way to fight Hells bells";
    }else if (eleccion == "shoottothrill"){
        titulo.textContent = "Shoot To Thrill"
        parrafo.textContent = "All you women who want a man of the street But don't know which way you wanna turn Just keep a-comin', and put your hand out to me 'Cause I'm the one who's gonna make you burn I'm gonna take you down Oh, down, down, down So, don't you fool around I'm gonna pull it, pull it, pull the trigger  Shoot to thrill, play to kill Too many women with too many pills, yeah Shoot to thrill, play to kill I got my gun at the ready, gonna fire at will, yeah I'm like evil, I get under your skin  Just like a bomb that's ready to blow 'Cause I'm illegal, I got everything That all you women might need to know"
    }
}
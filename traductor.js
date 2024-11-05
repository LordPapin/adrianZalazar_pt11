// var palabra = "";

var prompt = require('prompt-sync')();
console.log(`Bienvenidos a esta aplicacion de traduccion para niños aprendamos algunas paralbras
    puede ingresar algunas de las siguientes para ver su forma de escribir en ingres

    1_perro
    2_gato
    3_zorro
    4_puerta
    5_ventana
    6_mama
    7_papa
    `);
let palabra = prompt("ingrese una de las palabras de arriba por favor ", null);

switch (palabra) {
    case "perro":
        console.log("dog");
            
        break;
    case "gato":
        console.log("cat");
            
        break;
    case "zorro":
        console.log("fox");
            
        break;
    case "puerta":
        console.log("door");
            
        break;
    case "ventana":
        console.log("window");
            
        break;
    case "mama":
        console.log("mom");
            
        break;
    case "papa":
        console.log("dad");
            
        break;
    default:
        console.log("no tenemos esa palabra en nuestros datos lo sentimos ");
            
        break;
}



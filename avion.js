var velocidad = 0
var altura = 0
var prompt = require("prompt-sync")();
console.log(`
    Hola Bienvenidos al sistema de asistencia de vuelo 
    mi funcion principal es detectar si estan listos para el aterrizaje
    dependiendo de los valores que me den cuando se los solicite
    `);

function aterrizaje() {
    velocidad = prompt("podria decimr a que velocidad va el avion, solo los numeros",null)
    if (268<=velocidad && velocidad<=278) {
        console.log("La velocidad del avion es optima para iniciar el aterrizaje");
        altura = prompt("ahora propocioneme la altura en la que se encuentra el avion para detectar si es la correcta",null)
        
        if (150<= altura && altura <=300) {
            console.log(`
                su altura es de ${altura}m y su velocidad es de ${velocidad}km/hs,
                segun mis datos almacenados esta en condiciones de inicial el aterrizaje
                sin ningun problema
                `);
            
        } else {
            console.log("su altura no es la correspondiente para iniciar el aterrisaje corrijala y luego vuelva a ingresar los datos");
            
            
        }
    } else {
        altura = prompt("ahora propocioneme la altura en la que se encuentra el avion para detectar si es la correcta",null)
        if (150<=altura && altura<=300) {
            console.log(`
                Su altura es optima para el aterrizaje pero su velocidad no esta dentro del margen
                optimo para iniciarlo, corrija la velocidad y vuelva a ingresar los datos en el sistema
                `);
            
            
        } else {
            console.log(`
                ni su velocidad y altura son viables para inciar el aterrizaje corrija 
                la altura y la velocidad e intente ingresar nuevamente los datos en el sistema
                muchas gracias 
                `);
            
        }
        
    }

}
console.log(aterrizaje());

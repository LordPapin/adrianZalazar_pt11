var num1 = 0
var num2 = 0
var resultado = 0
var operador = ""
var prompt = require("prompt-sync")()

operador = prompt(`Hola bienvenido ¿cual operacion desea resolver?
    sumar
    restar
    multiplicar
    dividir
    `,null

);
num1 = prompt("dime un primer numero para la operacion",null);
num2 = prompt("dime un segundo numero para la operacion",null);
isNaN(+num1);
isNaN(+num2);
isNaN(+resultado);
num1 = +num1
num2 = +num2
resultado = +resultado
switch (operador) {
    case "sumar":
        resultado = num1+num2
        console.log(`El resultado de sumar ${num1} y ${num2} es = ${resultado}`);
        
        break;
    case "restar":
        resultado = num1 - num2
        console.log(`El resultado de su restar ${num1} - ${num2} es = ${resultado}`);
        
        break;
    case "multiplicar":
        resultado = num1 * num2
        console.log(`El resultado de multiplicar ${num1} x ${num2} es = ${resultado}`);
        
        break;
    case "dividir":
        resultado = num1 / num2
        console.log(`El resultado de dividir ${num1} / ${num2} es = ${resultado}`);
        
        break;
    default:
        console.log("no seleccino una operacion valida ");
        
        break;
}

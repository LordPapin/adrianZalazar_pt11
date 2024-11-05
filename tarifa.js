var pagoMes = 10000
var consumoKWH = 290
function consumo(pagoMes,consumoKWH) {
    if (consumoKWH > 300) {
        pagoFinal = (pagoMes * 0.2) + pagoMes
        console.log(`debido a que su hogar tubo un consumo de ${consumoKWH}kwh en base al ajuste 
            tarifario(hogares con consumo mayor a 300kwh por mes tendran un aumento del 20%),
            cumplimos con informarle que se ha ajustado el total a pagar, que sera de $ ${pagoFinal}
            
        `);
        
    } else {
        console.log(`usted no a superado el limite maximo de 300kwh por mes, por lo que 
            se le mantendra el subsidio y su monto a pagar sera de $ ${pagoMes}`);
        
        
    }
    
}
console.log(consumo(pagoMes,consumoKWH));

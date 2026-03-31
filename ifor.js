//tienda cerrada

let tienda = "Domingo";

if (tienda=== "Domingo" || tienda==="Dia festivo" ){
    console.log(" Esta cerrada ")
}else{
    console.log(" Abierta")
}


//descuento
let pasajero = "normal";

if (pasajero=== "estudiante" || pasajero==="adulto mayor") {
    console.log("Tiene descuento");
} else if(pasajero==="normal") {
    console.log("no tiene descuento");
}


// bateria
let bateria=10;
let horasb=8;

if (bateria<=10 || horasb>=8) {
    console.log("conecta tu celular");
    
} else {
    console.log("No pasa nada");
}



//Validacion de boleto
let boleto= true;
let paseVip= true;

if (boleto || paseVip) {
    console.log("Puedes pasar");
} else {
    console.log("No puedes pasar");
    
}


//fuera del rango
let numero= 300
if (numero<1 || numero>100) {
    console.log("Fuera de rango");
    
} else {

    console.log("Dentro del rango");
}
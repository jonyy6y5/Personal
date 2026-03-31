
//Practica 1
let animal= "Zorra"

switch (animal) {
    case "Perro":
        console.log("Guau");
        break;
    case "Gato":
    console.log("Miau");
        break;
    case "Vaca":
        console.log("Muuu");
        break;
        default:
            console.log("Desconosco ese animal");
}

//Practica 2

let menu = 1

switch (menu) {
    case 1:
        console.log("Café");
           break;
    case 2:
        console.log("Té");
        break;
    case 3:
        console.log("Jugo");
        break
    case 4:
        console.log("Agua");
        break        
    default:
        console.log("Opción no valida");
}

//Practica 3

let mes = 1;
switch (mes) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break
    case 4:
        console.log("Abril");
        break;        
    default:
        console.log("No se admiten más meses");
}



//Practica 4

let semaforo= "Verde"

switch (semaforo) {
    case "Verde":
       console.log("Sigue avanzando");        
       break;
    case "Amarillo":
       console.log("Ir lento");
       break;
    case "Rojo":
       console.log("Detenerse");
       break
    default:
       console.log("error");
    }


    //Super Tienda

    // categorias
    /*
    -Electronica
    -Ropa
    -Comida
    -Entre más productos 
    */

   let categorias = "Electronica"
   switch (categorias){
    case "Electronica":
        console.log("10% de descuento");
        break;
    case "Ropa":
        console.log("20% de descuento");    
        break;
    case "Comida":
    console.log("5% de descuento");
        break;
    default:
        console.log("No hay descuento para este producto");   
   } 
   
//Proyecto
        //Programa que te avisa en que momento la tienda esta cerrada o abierta.
let hora = 8
let DiaFestivo = true
let Tienda = "Abierto"

switch(Tienda){
    case "Cerrado":
      if(DiaFestivo){
        console.log("Tienda cerrada por dia festivo");
      }else if(hora>20){
        console.log("Tienda cerrada, no cuenta con horario nocturno");
      }else{
        console.log("La tienda esta cerrada a esta hora");
    }
    break
    case "Abierto":
      if (hora>=9 && hora<=19){
        console.log("Tienda abierta en esta hora");
      }else{
        console.log("Consulte el apartado de Cerrado por favor");
        }
        break
      default:
        console.log("Solo puede escribir Cerrado o Abierto");
    }
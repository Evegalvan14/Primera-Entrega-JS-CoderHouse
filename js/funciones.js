// definimos el interés
const interes = 0.679

// Funcion para ingresar Monto solicitado
function importeSolicitado(){
    let importeSolicitado = parseInt(prompt("ingresar el monto que desea solicitar"));
    if(importeSolicitado != "" && importeSolicitado >= 0){
        alert("El monto solicitado es = $" + importeSolicitado)  
        return importeSolicitado
    }else{
        alert("Por favor ingresa un monto para continuar")
    } 
}

// Función para ingresar cantidad de cuotas
function cuotasSolicitadas(){
    let cuotasSolicitadas = parseInt(prompt("En cuantas cuotas (meses) quiere pagar su préstamo, elija de 1 a 12"));
    if(cuotasSolicitadas != "" && cuotasSolicitadas <= 12){
        alert("Desea el prestamo en " + cuotasSolicitadas + " cuotas?");
        return cuotasSolicitadas     
    }else{
        alert("Por favor ingrese un número de cuotas válido")
    }
}

 let importe = importeSolicitado();
 let cantidadCuotas = cuotasSolicitadas();

 console.log("Detalle del préstamo solicitado:")
 console.log("El monto solicitado es = $" + importe); 
 console.log("La cantidad de cuotas solicitadas son = " + cantidadCuotas);


//Funcion para calcular el monto de las cuotas
 

 function MostrarCuotas(){
    for( let i = 1 ; i <= cantidadCuotas; i++){
        console.log("Su monto a pagar en la cuota " + i + " es de : $" + importe * interes / i);
    }
}

MostrarCuotas();

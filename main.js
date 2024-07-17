//ESTA CALCULADORA VA TENER LAS FUNCIONES DE:
//+ SUMAR
//- RESTAR
//* MULTIPLICAR
// -//- DIVIDIR
// % DEVOLVER EL RESTO DE UN NUMERO

//FUNCIONES

//CREAMOS LAS FUNCIONES QUE VA A TENER NUESTRA CALCULADORA

function pedirValores(){
    let valor1 = parseInt(prompt("INGRESE SU PRIMER VALOR: "));
    if(valor1 === null ) return null;
    valor1 = parseInt(valor1);

    let valor2 = parseInt(prompt("INGRESE SU SEGUNDO VALOR:  "));
    if(valor2 === null ) return null;
    
    valor2 = parseInt(valor2);
    return [valor1, valor2]; 
}

function sumar(valor1, valor2){ 
    return valor1 + valor2
}

function restar(valor1, valor2){
    return valor1 - valor2
}

function multiplicar(valor1, valor2){
    return valor1 * valor2
}

function division(valor1, valor2){
    return valor1 / valor2
}

function resto(valor1, valor2){
    return valor1 % valor2
}


//CICLO WHILE CON SWITCH

let entrada = prompt("Ingrese la funcion que desea utilizar: \n 1- sumar \n 2- restar \n 3- multiplicar \n 4- dividir \n 5- resto \n 0- salir. ");


while(entrada != "0" && entrada !== null){
    let [valor1, valor2] = pedirValores();
    let resultado;

    switch(entrada){
        case "1": 
            resultado = sumar(valor1, valor2);
            alert("El resultado es: " + resultado);
            break;

        case "2":
            resultado  = restar(valor1, valor2);
            alert("El resultado es: " + resultado);
            break;

        case "3":
            resultado  = multiplicar(valor1, valor2);
            alert("El resultado es: " + resultado);
            break;


        case "4":
            resultado  = division(valor1, valor2);
            alert("El resultado es: " + resultado);
            break;

        case "5":
            resultado  = resto(valor1, valor2);
            alert("El resultado es: " + resultado);
            break;

        default:
            alert("ERROR, Vuelva a intentarlo o ingrese salir para terminar.");
            break;

        
    }

    entrada = prompt("Ingrese la funcion que desea utilizar: \n 1- sumar \n 2- restar \n 3- multiplicar \n 4- dividir \n 5- resto \n 0- salir. ");
    
}

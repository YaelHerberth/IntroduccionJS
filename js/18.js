// funciones con parametros y argumentos

function sumar(n1=0, n2=0){ //n1 y 2 son parametros
    console.log(n1+n2);
}
sumar(10,12); //argumentos
sumar(10);

//Expresion de la funcion
const sumar2 = function(numero1, numero2) {
    console.log(numero1+numero2);
}
sumar2(2,10); 
// Declaracion de funcion
sumar();
function sumar(){
    console.log(10+10);
}

//Expresion de la funcion
sumar2(); 
const sumar2 = function() {
    console.log(2+2);
}

//La diferencia entre estas 2 funciones es que la primera funcion la puedo mandar a llamar en cualquier parte del codigo y no va marcar error en cambio la segunda funcion si va marcar error

//IIFE
(function(){
    console.log('Esto es una funcion que se ejecuta sola sin necesidad de mandarla a llamar')
})();
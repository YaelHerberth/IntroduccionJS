// function sumar(n1,n2){
//     return n1 + n2;
// }

// const resultado = sumar(2,4);
// console.log(resultado);

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(500);

console.log(total);

const totalPagar = calcularImpuesto(total);

console.log('El total a pagar con impuestos es de: ' + totalPagar);
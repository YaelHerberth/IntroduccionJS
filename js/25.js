const carrito = [
    { nombre: "Monitor", precio: 500 },
    { nombre: "Monitor2", precio: 500 },
    { nombre: "Monitor3", precio: 500 },
    { nombre: "Monitor4", precio: 500 },
    { nombre: "Monitor5", precio: 500 },
    { nombre: "Monitor6", precio: 500 },
    { nombre: "Monitor7", precio: 500 }
]

//ForEach
carrito.forEach(function (producto) {
    console.log(producto);
})

carrito.forEach(producto => console.log(producto.nombre));
const arreglo1 = carrito.forEach(producto => producto.nombre); //Foreach no crea un nuevo arreglo, es mejor imprimir en consola o iterar


//Map
carrito.map(function (producto) {
    console.log(producto);
})

const arreglo2 = carrito.map(producto => producto.nombre); //Map crea un nuevo arreglo

console.log(arreglo1);
console.log(arreglo2);
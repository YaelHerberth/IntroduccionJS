// Metodos con arrays

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio', 'Julio'); //Crear arreglo con constructor

const carrito = [
    { nombre : "Monitor", precio : 500},
    { nombre : "Monitor2", precio : 500},
    { nombre : "Monitor3", precio : 500},
    { nombre : "Monitor4", precio : 500},
    { nombre : "Monitor5", precio : 500},
    { nombre : "Monitor6", precio : 500},
    { nombre : "Monitor7", precio : 500}
]

// console.log(carrito);

// For each
meses.forEach(function(mes){
 if (mes == 'Marzo'){
    console.log("Marzo existe :D");
 }else {
    console.log("Mes no existe");
 }
});

// Includes
let resultado = meses.includes('Marzo');


//Some ideal para arreglos de objetos
resultado = carrito.some(function(producto){
   return producto.nombre == "Monitor"
})

//Reduce
resultado =  carrito.reduce(function(total,producto){
   return total + producto.precio
}, 0)

//Filter
resultado = carrito.filter(function(producto){
   return producto.precio > 400
})
console.log(resultado);

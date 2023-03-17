// POO

// Object literal
const producto = {

}

//Object constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto('Monitor curvo de 49"', 800);
const producto3 = new Producto('Laptop', 500);

//Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

function formatearProducto(producto){
    return `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
}

console.log(producto2.formatearProducto());
console.log(producto3);

console.log(formatearProducto(producto2))


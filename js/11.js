const Producto = {
    nombreProducto : "Monitos de 49 pulgadas",
    precio : 359,
    disponible : true

}
// Asignar valor a una variable en donde el valor provenga de una propiedad de un objeto
//Primera forma de hacerlo
const precioProducto = Producto.precio;
console.log(precioProducto);

// Segunda forma de hacerlo (DESTRUCTURING)
// const {precio} = Producto;
// const {nombreProducto} = Producto;
const {disponible, nombreProducto, precio} = Producto;

console.log(precio);
console.log(nombreProducto);
console.log(disponible);
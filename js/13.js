// Unir 2 objetos

const Producto = {
    nombreProducto : "Monitos de 49 pulgadas",
    precio : 359,
    disponible : true

}

const Medidas = {
    peso : "1kg",
    medida : "1m"
}

const nuevoProducto = {
    ... Producto, ... Medidas
}

console.log (Producto);
console.log (nuevoProducto);
clg
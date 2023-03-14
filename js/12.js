//"use strict"; // Esta es la forma de hacer que el codigo pase a un modo estricto

const Producto = {
    nombreProducto : "Monitos de 49 pulgadas",
    precio : 359,
    disponible : true

}

Object.freeze(Producto); // La funcion freeze sirve para que no se le puede agregar/modificar/eliminar las propiedades de los objetos

Object.seal(Producto); // Esto es lo mismo que freeze pero con la diferencia que si lo puedes editar las propiedades existentes

Producto.imagen = "imagen.png";

//console.log(Object.isFrozen(Producto)) // Para verificar si el objeto esta frezzeado
console.log(Producto)
//Objetos

const nombreProductos = "Monitor de 20 pulgadas";
const precio = 300;
const disponible = true;

const Producto = {
     nombreProducto : "Monitos de 49 pulgadas",
     precio : 359,
     disponible : true

}

// Imprimir objeto
console.log(Producto);

// Imprimir propiedad especifica del objeto
console.log(Producto.nombreProducto);

// Agregar propiedad a un objeto
Producto.imagen = "imagen.png";

// Eliminar propiedad
delete Producto.disponible;
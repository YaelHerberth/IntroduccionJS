//Classes

class Producto{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }

    precioProducto(){
        return this.precio;
    }
}

const producto2 = new Producto('Monitor curvo de 49"', 800);
const producto3 = new Producto('Laptop', 500);

// Herencia
class Libro extends Producto{
    constructor(nombre,precio,isbn){
        super(nombre,precio);
        this.isbn = isbn;
    }

    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`;
    }
}

const libro = new Libro('La revolucion', 120, '233244563463');
console.log(libro.formatearProducto());

console.log(producto2.formatearProducto());
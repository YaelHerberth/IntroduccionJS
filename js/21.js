//Arrow Functions

const sumar2 = (n1,n2) => console.log(n1+n2);

sumar2(5,10); 

const aprendiendo = tecnologia => console.log('aprendiendo ' + tecnologia);

aprendiendo('javascript');

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
meses.forEach( mes => {
 if (mes == 'Marzo'){
    console.log("Marzo existe :D");
 }else {
    console.log("Mes no existe");
 }
});


//Some ideal para arreglos de objetos
resultado = carrito.some( producto =>  producto.nombre == "Monitor");

//Reduce
resultado =  carrito.reduce((total,producto) => total + producto.precio, 0)

//Filter
resultado = carrito.filter(producto => producto.precio > 400 )

console.log(resultado);


// Arreglos / Arrays

const numeros = [1,2,3,4,5,6];

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio', 'Julio'); //Crear arreglo con constructor

console.table(meses);

const arreglo = ["texto", 34, null, {Nombre : "Yael", Trabajo : "Programador"}, [1,2,3,4]];

console.log(arreglo);

//Acceder a los valores de un arreglo
console.log(numeros[5]);

// Conocer la extencion de un arreglo
console.log(meses.length);

numeros.forEach(function(num){
    console.log(num);
});

meses.forEach(function(mes){
    console.log(mes)
});

// Metodos para los arrays
// Formas de agregar elementos en un array

numeros[5] = 60; // Para agregar hay que saber la posicion final de array, si ocupamos unos que ya esta definido lo remplazara 
numeros.push(69);// Esta es otra forma de agregar elementos a un array pero sin la necesidad de saber la posicion final
numeros.unshift(-10,-20); // Esta es la forma de agregar elementos al inicio

console.table(numeros);

// meses.pop(); // Para eliminar el ultimo elemento del array
// meses.shift(); // Elimina el primer elemento del array
//meses.splice(1,2); // Para eliminar un elemento segun su posicion, tomando en cuenta la posicion inicial y la posicion que se quiera eliminar a partir del primer valor

console.table(meses);

// Rest Operator o Spread Operator

const nuevoArreglo  = [...meses, 'Agosto'];

console.table (nuevoArreglo);
// Tipos de datos

//string o cadenas de texto
const producto = "Monitor de 20 pulgadas";
const producto1 = "Monitor de 20\"";
const producto2 = String('Monitor de 30 pulgadas');
const producto3 = new String('Monitor de 30 pulgadas');

// console.log(producto1);
// console.log(producto2);
// console.log(producto3);

const tweet = "Aprendiendo javascript con un curso :D";

console.log(tweet.length);

//index of SIRVE PARA ENCONTRAR UNA PALABRA EN UNA CADENA DE TEXTO
// Me revela la posicion de la palabra
console.log(tweet.indexOf ('javascript'));

// Includes retorna un TRUE o un FALSE
console.log(tweet.includes('javascript'))
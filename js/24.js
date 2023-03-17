// For Loops

// for(let i=0; i<=10 ;i++){
//     if(i % 2 === 0){
//         console.log('El numero ' + i + ' es par')
//     }else{
//         console.log('El numero ' + i + ' es impar')
//     }
// }

const carrito = [
    { nombre: "Monitor", precio: 500 },
    { nombre: "Monitor2", precio: 500 },
    { nombre: "Monitor3", precio: 500 },
    { nombre: "Monitor4", precio: 500 },
    { nombre: "Monitor5", precio: 500 },
    { nombre: "Monitor6", precio: 500 },
    { nombre: "Monitor7", precio: 500 }
]

for (let i = 0; i <= carrito.length; i++) {
    console.log(carrito[i]);
}

// While Loop

let i = 0

while (i < 10) { //Si se cumple la condicion se ejecuta el codigo

    if (i % 2 === 0) {
        console.log('El numero ' + i + ' es par');
    }
    i++;
}

// Do While Lopp

let ii = 0;

do{
    console.log(ii)
    ii++;
}while(ii<10)  //el codigo se ejecuta una vez y luego evalua si la condicion se cumple

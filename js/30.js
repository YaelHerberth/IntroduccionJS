// Promises

const usuarioAutenticado = new Promise( (resolve, reject) =>{
    const auth = true;

    if(auth){
        resolve('Usuario autenticado'); //El promise se cumple
    } else {
        reject('Usuario no autenticado') //El promise no se cumple
    }
});

usuarioAutenticado
    .then((resultado) =>console.log(resultado))
    .catch((error) => console.log(error))


// El los promises existen 3 valores posibles
// Pending: No se ha cumplido pero tampoco se ha rechazado
// Fullfilled: Ya se cumplio
// Reject:  Se ha rechazado o no se pudo cumplir
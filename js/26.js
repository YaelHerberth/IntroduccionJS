// This

const reservacion = {
    nombre : 'yael',
    apellido : 'sanchez',
    total : 500,
    pagado : false,
    informacion : function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    }
}

reservacion.informacion()
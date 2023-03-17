
//Metodos de propiedad
const reproductor = {
    reproducir : function(id){
        console.log('reproduciendo cancion con el id: ' + id)
    },
    pausar: function(){
        console.log('pausando...')
    },
    crearPlaylist : function(nombre){
        console.log('Creando la playlist: ' + nombre)
    },
    reproducirPlaylist : function(nombre){
        console.log('Reproduciendo la playlist: ' + nombre)
    }
}

reproductor.borrarCancion = function(id){
    console.log('Eliminando cancion: ' + id)
}

reproductor.reproducir(345);
reproductor.pausar();
reproductor.borrarCancion(5);
reproductor.crearPlaylist('Kpop');
reproductor.reproducirPlaylist('Kpop');
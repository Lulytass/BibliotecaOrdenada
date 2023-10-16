const { createApp } = Vue;

createApp({
    data() {
        return {
            libroDetallado: {},
            url: '../Js/datos.json',
            error: false,
            idLibroClickeado: 0,
        };
    },
    methods:{
        fetchdata(url){
            fetch(url)
            .then(resp => resp.json())
            .then(data => {
                for(libro of data.libros){
                    if(libro.id == this.idLibroClickeado){
                        this.libroDetallado = libro;
                    }
                }
            }) 

        },
    },
    created() {
        // Recuperar el ID del libro del almacenamiento local
        this.idLibroClickeado = parseInt(localStorage.getItem('idLibroClickeado'), 10);
        
        // Cargar los detalles del libro desde datos.json basado en el ID proporcionado
        this.fetchdata(this.url);
    },
}).mount("#app");

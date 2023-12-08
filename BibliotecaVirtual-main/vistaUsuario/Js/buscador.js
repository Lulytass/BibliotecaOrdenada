const { createApp } = Vue;

createApp({
    data(){
        return {
            url: '../Js/datos.json',
            error: false,
            datos: [],
            palabraUsuario: "",
            resultados:[],
        }
    },
    methods:{
        fetchdata(url){
            fetch(url)
            .then(resp => resp.json())
            .then(data =>{
              this.datos = data.libros;              
            }) 
        },
      buscar(){
        // reiniciamos el arreglo a 0 siempre que ejecutamos buscar()
        this.resultados = [];
        for(libro of this.datos){
          // tomamos lo que ingresa el usuario quitando espacios en blanco al principio y final 
         this.palabraUsuario = this.palabraUsuario.trim();
         //  guardamos el tamaño de lo ingresado
         var tampalabraUsuario = this.palabraUsuario.length;
         //  con el for vamos recorriendo el array de objetos que tomamos de ArrayDeLibros.js

         //tomamos el nombre del primer libro
         var nombre = libro.nombre;
         //en str guardamos el nombre del libro pero solo tomando desde la primer letra (0) hasta el tamaño del string que ingreso el usuario. EJEMPLO libro JavaScript Inspirate
         //  el usuario ingresa tres letras eso .length da 3. Asique en esa variable str se guarda jav
         var str = nombre.substring(0,tampalabraUsuario);
         // aca comparamos que lo ingresado por el usuario no sea mas largo que el titulo del libro ni que no haya letras tanto en lo ingresado por el usuario como en el .nombre del objeto
         if(tampalabraUsuario <= nombre.length && tampalabraUsuario != 0 && nombre.length != 0){
           // igualamos ambos a minuscula para compararlas y asi ir creando los elementos html y dando valor a lo que corresponde (los td)
           if(this.palabraUsuario.toLowerCase() == str.toLowerCase()){
             this.resultados.push(libro)
            }
          }
        }
      },
      // redireccion al hacer click en la fila y guardamos el id para completar la info en la vista 
      clickImagen(idLibro) {
        // Guarda el ID del libro en localStorage para usarlo en la página de detalles
        localStorage.setItem('idLibroClickeado', idLibro);
        // Redirige a la página de detalles del libro
        window.location.href = '../Html/libros.html';
    },
    },
    created(){
        this.fetchdata(this.url)
    },
    watch: {
      palabraUsuario: function () {
        this.buscar();
      }
    }

}).mount('#app')







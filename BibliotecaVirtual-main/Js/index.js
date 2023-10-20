const { createApp } = Vue;

createApp({
    data(){
        return {
            url: '../Js/datos.json',
            error: false,
            datos: [],
            novelas: [],
            recomendados:[],
            ficciones: [],
            currentIndex1: 0,
            currentIndex2: 0,
            currentIndex3: 0,
        }
    },
    computed: {
        imagenWidth() {
          // La anchura de las imágenes en píxeles
          return 250; 
        },
      },
    methods:{
        fetchdata(url){
            fetch(url)
            .then(resp => resp.json())
            .then(data =>{
                for(libro of data.libros){
                    if(libro.genero == 'novela'){
                        this.novelas.push(libro);
                    }else if(libro.genero == 'ficcion'){
                        this.ficciones.push(libro);
                    }else{
                        this.recomendados.push(libro)
                    }
                }
                this.datos = data.libros;
                
            }) 
        },
        // funciones primer carousel
        prevSlide1() {
          
            this.currentIndex1 = (this.currentIndex1 - 1 + this.recomendados.length) % this.recomendados.length;
             
        
        },
        nextSlide1() {
         
            this.currentIndex1 = (this.currentIndex1 + 1) % this.recomendados.length;
             
        
        },
        carouselStyle1() {
           
              const offset = -this.currentIndex1 * (this.imagenWidth + 16); // Ajusta imagenWidth según tus necesidades
              return `transform: translateX(${offset}px); transition: transform 0.5s;`;
            
        },
        // funciones segundo carousel
        prevSlide2() {
            
              this.currentIndex2 = (this.currentIndex2 - 1 + this.novelas.length) % this.novelas.length;
               
            
        },
        nextSlide2() {
            
              this.currentIndex2 = (this.currentIndex2 + 1) % this.novelas.length;
               
            
        },
        carouselStyle2() {
            
                const offset = -this.currentIndex2 * (this.imagenWidth + 16); // Ajusta imagenWidth según tus necesidades
                return `transform: translateX(${offset}px); transition: transform 0.5s;`;
            
        },
        //   funciones tercer carousel
        prevSlide3() {
           
              this.currentIndex3 = (this.currentIndex3 - 1 + this.ficciones.length) % this.ficciones.length;
             
            
        },
        nextSlide3() {
            
              this.currentIndex3 = (this.currentIndex3 + 1) % this.ficciones.length;
             
            
        },
        carouselStyle3() {
              
                const offset = -this.currentIndex3 * (this.imagenWidth + 16); // Ajusta imagenWidth según tus necesidades
                return `transform: translateX(${offset}px); transition: transform 0.5s;`;
              
        },
        // redireccion al hacer click en la imagen del libro y guardamos el id para completar la info en la vista 
        clickImagen(idLibro) {
            // Guarda el ID del libro en localStorage para usarlo en la página de detalles
            localStorage.setItem('idLibroClickeado', idLibro);
            // Redirige a la página de detalles del libro
            window.location.href = './Html/libros.html';
        },
    },
    created(){
        this.fetchdata(this.url)
    }
}).mount('#app')
  







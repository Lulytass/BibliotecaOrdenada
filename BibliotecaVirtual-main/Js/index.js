// consumimos de arrayDeLibros asi cargamos los libros del carousel 1

let misterioLibros = ``;
let novelaLibros = ``;
let suspensoLibros = ``;

libros.forEach(item => {
    
    
    if(item.genero == "misterio"){
        misterioLibros += `<div class="carousel-item-1"><img id="${item.id}" class="libro" src="../imagenes/${item.imagen}" alt="${item.nombre}">
        </img></div>`;
    }else if(item.genero == "novela"){
        novelaLibros += `<div class="carousel-item-2"><img id="${item.id}" class="libro" src="../imagenes/${item.imagen}" alt="${item.nombre}">
        </img></div>`;
    }else if(item.genero == "suspenso"){
        suspensoLibros += `<div class="carousel-item-3"><img id="${item.id}" class="libro" src="../imagenes/${item.imagen}" alt="${item.nombre}">
        </img></div>`;
    }
    

});
// insertamos los registros en el carousel que corresponde
document.getElementById("carousel1").innerHTML = misterioLibros;
document.getElementById("carousel2").innerHTML = novelaLibros;
document.getElementById("carousel3").innerHTML = suspensoLibros;


//CAROUSEL 1
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-1");
  const carouselItems = document.querySelectorAll(".carousel-item-1");
  const prevButton = document.querySelector(".prev-button-1");
  const nextButton = document.querySelector(".next-button-1");
  let currentIndex = 0;

  function showSlide(index) {
      const offset = -index * (carouselItems[0].clientWidth + 16); // Incluye la separación
      carousel.style.transform = `translateX(${offset}px)`;
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showSlide(currentIndex);
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showSlide(currentIndex);
  }

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  

  showSlide(currentIndex);


});


//CAROUSEL 2

document.addEventListener("DOMContentLoaded", function () {
const carousel = document.querySelector(".carousel-2");
const carouselItems = document.querySelectorAll(".carousel-item-2");
const prevButton = document.querySelector(".prev-button-2");
const nextButton = document.querySelector(".next-button-2");
let currentIndex = 0;

function showSlide(index) {
    const offset = -index * (carouselItems[0].clientWidth + 16); // Incluye la separación
    carousel.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);



showSlide(currentIndex);
});


//CAROUSEL 3
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-3");
  const carouselItems = document.querySelectorAll(".carousel-item-3");
  const prevButton = document.querySelector(".prev-button-3");
  const nextButton = document.querySelector(".next-button-3");
  let currentIndex = 0;
  
  function showSlide(index) {
      const offset = -index * (carouselItems[0].clientWidth + 16); // Incluye la separación
      carousel.style.transform = `translateX(${offset}px)`;
  }
  
  function nextSlide() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showSlide(currentIndex);
  }
  
  function prevSlide() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showSlide(currentIndex);
  }
  
  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);
  
  
  
  showSlide(currentIndex);
  });


// redireccion a detalles del libro y guardamos el Id del libro clickeado

document.querySelectorAll(".libro").forEach(el => el.addEventListener("click", clickImagen));
function clickImagen(e) {
    let idLibro = this.id ;
    window.location.href = './libros.html';
}








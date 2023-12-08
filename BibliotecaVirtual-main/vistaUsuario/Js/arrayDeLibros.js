// Array de objetos con todos los libros
let libros = [
    {
      nombre: "1984",
      id : "1",
      imagen: "1984.png",
      escritor: "George Orwell",
      estrellas: 4,
      genero: "suspenso",
      editorial: "ejemplo",
      libro: "1984 - George Orwell.pdf",
      resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
    },
    {
      nombre: "Sexo ATR",
      id : "2",
      imagen: "LIBRO1.jpg",
      escritor: "Lic. Cecilia Ce",
      estrellas: 3,
      genero: "novela",
      editorial: "Planeta",
      libro: "CSS.pdf",
      resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
    },
    {
      nombre: "Caroline",
      id : "3",
      imagen: "LIBRO3.jpg",
      escritor: "Neil Gaiman",
      estrellas: 5,
      genero: "suspenso",
      editorial: "ejemplo",
      libro: "Eloquent JavaScript.pdf",
      resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
    },
    {
      nombre: "Diez Negritos",
      id : "4",
      imagen: "LIBRO4.jpg",
      escritor: "Agatha Christie",
      estrellas: 5,
      genero: "misterio",
      editorial: "ejemplo",
      libro: "JavaScript ES6.pdf",
      resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
    },
    {
      nombre: "JavaScript Inspirate",
      id : "5",
      imagen: "js_inspirate.png",
      escritor: "Pepito Apellido5",
      estrellas: 2,
      genero: "novela",
      editorial: "ejemplo",
      libro: "JavaScript Inspirate.pdf",
      resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
    },
    {
      nombre: "El cuento de la Criada",
      id : "6",
      imagen: "LIBRO5.jpg",
      escritor: "Margaret Atwood",
      estrellas: 4,
      genero: "novela",
      editorial: "ejemplo",
      libro: "1984 - George Orwell.pdf",
      resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
    },
    {
      nombre: "Fahrenheit 451",
      id : "7",
      imagen: "LIBRO6.jpg",
      escritor: "Ray Bradbury",
      estrellas: 3,
      genero: "misterio",
      editorial: "ejemplo",
      libro: "CSS.pdf",
      resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
    },
    {
      nombre: "La Ladrona de Libros",
      id : "8",
      imagen: "LIBRO7.jpg",
      escritor: "Markus Zusak",
      estrellas: 5,
      genero: "suspenso",
      editorial: "ejemplo",
      libro: "Eloquent JavaScript.pdf",
      resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
    },
    {
      nombre: "El Hobbit",
      id : "9",
      imagen: "LIBRO8.jpg",
      escritor: "J.R.R Tolkien",
      estrellas: 4,
      genero: "novela",
      editorial: "ejemplo",
      libro: "JavaScript ES6.pdf",
      resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
    },
    {
      nombre: "JavaScript Inspirate",
      id : "10",
      imagen: "js_inspirate.png",
      escritor: "Pepito Apellido5",
      estrellas: 2,
      genero: "suspenso",
      editorial: "ejemplo",
      libro: "JavaScript Inspirate.pdf",
      resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
    },
    {
      nombre: "Orgullo y Prejuicio",
      id : "11",
      imagen: "LIBRO9.jpg",
      escritor: "Jane Austen",
      estrellas: 5,
      genero: "misterio",
      editorial: "Alejandria",
      libro: "JavaScript Inspirate.pdf",
      resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
    },
    {
      nombre: "El Club de la Lucha",
      id : "12",
      imagen: "LIBRO10.jpg",
      escritor: "Chuck Palahniuk",
      estrellas: 5,
      genero: "novela",
      editorial: "ejemplo",
      libro: "JavaScript Inspirate.pdf",
      resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
    },
    {
      nombre: "Cadáver Exquisito",
      id : "13",
      imagen: "LIBRO11.jpg",
      escritor: "Agustina Bazterrica",
      estrellas: 2,
      genero: "novela",
      editorial: "Lectulandia",
      libro: "JavaScript Inspirate.pdf",
      resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
    },
    {
      nombre: "La Naranja Mecanica",
      id : "14",
      imagen: "LIBRO12.jpg",
      escritor: "Anthony Burgess",
      estrellas: 5,
      genero: "suspenso",
      editorial: "ejemplo",
      libro: "JavaScript Inspirate.pdf",
      resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
    },
    {
      nombre: "Yo, Robot",
      id : "15",
      imagen: "LIBRO13.jpg",
      escritor: "Isaac Asimov",
      estrellas: 5,
      genero: "novela",
      editorial: "ejemplo",
      libro: "JavaScript Inspirate.pdf",
      resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
    },
]
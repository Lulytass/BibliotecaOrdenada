let header= 
`
    <nav>
        <div class="logo">
            <img id="logo" src="../Imagenes/Logo.png" alt="Logo"/>
        </div>
        <div class="buscador">
        
        </div>
        <div class="secciones">
            <a id="nosotros" href="#seccionNosotros">Nosotros</a>
            <a
                href="mailto:correo1@example.com,correo2@example.com,correo3@example.com,correo4@example.com"
                ><img src="../Imagenes/sobre.png" alt="Email"/>
            </a>
            <div class="dropdown">
                <img src="../Imagenes/usuario.png" alt="Menu Usuario" onclick="abrirMenu()"/>
                <div id="opcionesMenu">
                    <a id="login" href="./login.html">Iniciar Sesión</a>
                    <a id="crearUsuario" href="./crearUsuario.html">Crear Usuario</a>
                </div>
            </div>
        </div>
    </nav>
`;

let footer =
`
    <p>Pagina creada por Clara, Omar, Pablo, Rosa, Lucía</p>
`; 

document.querySelector("header").innerHTML = header;
document.querySelector("footer").innerHTML = footer;


// si no estamos en el index no aparece la sección nosotros
var dir = location.href;
if(dir.slice(-11) !== "/index.html"){
    var nosotros = document.getElementById("nosotros");
    nosotros.style.display="none";
    
}

// si estamos en la vista crear usuario no aparece la opcion que redirecciona alli
if(dir.slice(-11) == "/login.html"){
    var nosotros = document.getElementById("login");
    login.style.display="none";   
}

// si estamos en la vista crear usuario no aparece la opcion que redirecciona alli
if(dir.slice(-18) == "/crearUsuario.html"){
    var nosotros = document.getElementById("crearUsuario");
    crearUsuario.style.display="none";   
}

// si estamos en la vista buscador.html la barra cambia
if(dir.slice(-14) !== "/buscador.html"){
    document.querySelector(".buscador").innerHTML = `
        <input class="input" type="text" name="nombreJuego" id="campo" placeholder="Buscar">
        <img src="../Imagenes/lupa.png" alt="imagen lupa" />
        
    `;  
    // redireccion a traves del buscador
    const campo = document.getElementById('campo');
    campo.addEventListener('click', function () {
    // redireccion
    window.location.href = './buscador.html';
    }); 
}else{
    document.querySelector(".buscador").innerHTML = `
        <input class="input" type="text" name="nombreJuego" id="buscar" placeholder="Buscar" onkeyup="buscador()">
        <img src="../Imagenes/lupa.png" alt="imagen lupa" />
    `; 
}

/*apertura de menu avatar*/
function abrirMenu() {
    var opcionesMenu = document.getElementById("opcionesMenu");
    opcionesMenu.style.display = (opcionesMenu.style.display === "block") ? "none" : "block";
}

// redirigir a la vista Index
const logo = document.getElementById('logo');

logo.addEventListener('click', function (){
  // redireccion
  window.location.href = './index.html';
});




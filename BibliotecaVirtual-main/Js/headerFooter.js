let headerGeneral= 
`
    <nav>
        <div class="logo">
            <a href="../index.html"><img id="logo" src="../Imagenes/Logo.png" alt="Logo"/><a>
        </div>
        <div class="buscador">
            <input class="input" type="text" name="nombreLibro" id="buscar" placeholder="Buscar">
            <img src="../Imagenes/lupa.png" alt="imagen lupa" />
        </div>
        <div class="secciones">
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

let headerBuscador= 
`
    <nav>
        <div class="logo">
            <a href="../index.html"><img id="logo" src="../Imagenes/Logo.png" alt="Logo"/><a>
        </div>
        <div class="buscador">
            <input class="input" type="text" name="nombreLibro" placeholder="Buscar" v-model.lazy="palabraUsuario">
            <img src="../Imagenes/lupa.png" alt="imagen lupa"/>
        </div>
        <div class="secciones">
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

let headerIndex= 
`
    <nav>
        <div class="logo">
            <img id="logo" src="./Imagenes/Logo.png" alt="Logo"/>
        </div>
        <div class="buscadorIndex">
            <input class="input" type="text" name="nombreLibro" id="buscar" placeholder="Buscar">
            <img src="./Imagenes/lupa.png" alt="imagen lupa" />
        </div>
        <div class="secciones">
            <a id="nosotros" href="#seccionNosotros">Nosotros</a>
            <a
                href="mailto:correo1@example.com,correo2@example.com,correo3@example.com,correo4@example.com"
                ><img src="./Imagenes/sobre.png" alt="Email"/>
            </a>
            <div class="dropdown">
                <img src="./Imagenes/usuario.png" alt="Menu Usuario" onclick="abrirMenu()"/>
                <div id="opcionesMenu">
                    <a id="login" href="./Html/login.html">Iniciar Sesión</a>
                    <a id="crearUsuario" href="./Html/crearUsuario.html">Crear Usuario</a>
                </div>
            </div>
        </div>
    </nav>
`;

let footer =
`
    <p>Página creada por Clara, Pablo, Rosa, Lucía</p>
`; 


document.querySelector("footer").innerHTML = footer;


// guardamos la ruta en la que estamos ubicados
var dir = location.href;


if(dir.slice(-11) == "/index.html"){
    document.querySelector("header").innerHTML = headerIndex;
}else if(dir.slice(-14) == "/buscador.html" || dir.slice(-8) == "buscador"){
    document.querySelector("header").innerHTML = headerBuscador;
}else{
    document.querySelector("header").innerHTML = headerGeneral;
}

// si estamos en la vista buscador.html la barra cambia
if(dir.slice(-14) !== "/buscador.html" || dir.slice(-8) !== "buscador"){
    // redireccion a traves del buscador
    // tomamos el elemento con Id buscar, al hacer click en el se redireccionara
    const campo = document.getElementById('buscar');
    campo.addEventListener('click', function () {
        if(dir.slice(-11) !== "/index.html"){
            // redireccion
            window.location.href = './buscador.html';
        }else{
            window.location.href = './Html/buscador.html';
        }
    });    
}


// si estamos en la vista crear usuario no aparece la opcion que redirecciona alli
if(dir.slice(-12) == "crearusuario" || dir.slice(-17) == "crearUsuario.html"){
    var login = document.getElementById("crearUsuario");
    login.style.display="none";   
}

// si estamos en la vista login no aparece la opcion que redirecciona alli
if(dir.slice(-11) == "/login.html" || dir.slice(-5) == "login" ){
    var login = document.getElementById("login");
    login.style.display="none";   
}

/*apertura de menu avatar*/
function abrirMenu() {
    var opcionesMenu = document.getElementById("opcionesMenu");
    opcionesMenu.style.display = (opcionesMenu.style.display === "block") ? "none" : "block";
}

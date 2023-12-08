const contraseña = document.getElementById('contraseña');
const confirmarContraseña = document.getElementById('confirmar_contraseña');
const mensajeContraseña = document.getElementById('mensaje_contraseña');
const enviar = document.getElementById('enviar');
//evaluamos con esta funcion que las contraseñas coincidan para cambiar a disable nuestro boton y pasamos un texto al div correspondiente
function coincidenContraseñas() {
    if(contraseña.value.length >= 8 && confirmarContraseña.value.length >= 8){
        if (contraseña.value !== confirmarContraseña.value) {
            mensajeContraseña.textContent = 'Las contraseñas no coinciden.';
            enviar.disabled = true;
        } else {
            mensajeContraseña.textContent = '';
            enviar.disabled = false;
        }
    }else{
        mensajeContraseña.textContent = 'La contraseña debe tener 8 o mas caracteres';
    }
    
}
//con el addEventListener le pasamos input y la funcion para ejecutar a la entrada de texto
contraseña.addEventListener('input', coincidenContraseñas);
confirmarContraseña.addEventListener('input', coincidenContraseñas);
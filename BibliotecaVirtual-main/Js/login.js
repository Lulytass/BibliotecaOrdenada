// Obtener los elementos del formulario
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('contraseña');
const submitButton = document.getElementById('enviar');
const passwordError = document.getElementById('contraseña-error');

// Agregar un evento 'input' a los campos del formulario
emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

// Función para validar el formulario
function validateForm() {
    if (emailInput.value && passwordInput.value.length >= 8) {
        passwordError.innerHTML = '';
        submitButton.disabled = false;
    } else {
        if (passwordInput.value.length < 8) {
            passwordError.innerHTML = 'La contraseña debe tener al menos 8 caracteres.';
        }
        submitButton.disabled = true;
    }
}
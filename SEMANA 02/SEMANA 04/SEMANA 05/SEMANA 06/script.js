const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

function validarNombre() {
    if (nombre.value.length < 3) {
        document.getElementById("errorNombre").textContent =
            "Debe tener al menos 3 caracteres";
        return false;
    }
    document.getElementById("errorNombre").textContent = "";
    return true;
}

function validarCorreo() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(correo.value)) {
        document.getElementById("errorCorreo").textContent =
            "Correo no válido";
        return false;
    }
    document.getElementById("errorCorreo").textContent = "";
    return true;
}

function validarPassword() {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
    if (password.value.length < 8 || !regex.test(password.value)) {
        document.getElementById("errorPassword").textContent =
            "Debe tener mínimo 8 caracteres, un número y un símbolo";
        return false;
    }
    document.getElementById("errorPassword").textContent = "";
    return true;
}

function validarConfirmacion() {
    if (password.value !== confirmar.value) {
        document.getElementById("errorConfirmar").textContent =
            "Las contraseñas no coinciden";
        return false;
    }
    document.getElementById("errorConfirmar").textContent = "";
    return true;
}

function validarEdad() {
    if (edad.value < 18) {
        document.getElementById("errorEdad").textContent =
            "Debes ser mayor de 18 años";
        return false;
    }
    document.getElementById("errorEdad").textContent = "";
    return true;
}

function validarFormulario() {
    if (
        validarNombre() &&
        validarCorreo() &&
        validarPassword() &&
        validarConfirmacion() &&
        validarEdad()
    ) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}

nombre.addEventListener("input", validarFormulario);
correo.addEventListener("input", validarFormulario);
password.addEventListener("input", validarFormulario);
confirmar.addEventListener("input", validarFormulario);
edad.addEventListener("input", validarFormulario);

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Formulario enviado correctamente");
});

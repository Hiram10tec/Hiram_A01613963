document.addEventListener("DOMContentLoaded", function () {
    // Cambiar el estilo de las letras 
    var elementoCambioEstilo = document.getElementById("cambiarEstilo");
    var botonCambiarEstilo = document.getElementById("botonCambiarEstilo");

    botonCambiarEstilo.addEventListener("click", function () {
        if (elementoCambioEstilo.style.color === "red") {
            elementoCambioEstilo.style.color = ""; // Restaura el color por defecto
            elementoCambioEstilo.style.fontWeight = ""; // Restaura el peso de la fuente por defecto
        } else {
            elementoCambioEstilo.style.color = "red";
            elementoCambioEstilo.style.fontWeight = "bold";
        }
    });

    // Agregar información extra
    var botonInfoEmail = document.getElementById("botonInfoEmail");
    var textoInfoEmail = document.getElementById("textoInfoEmail");

    botonInfoEmail.addEventListener("click", function () {
        if (textoInfoEmail.style.display === "none" || textoInfoEmail.style.display === "") {
            textoInfoEmail.style.display = "block";
        } else {
            textoInfoEmail.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".button.is-link").addEventListener("click", function () {
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmpassword").value;

        if (password === confirmPassword) {
            alert("Contraseñas iguales");
        } else {
            alert("Contraseñas diferentes");
        }
    });
});
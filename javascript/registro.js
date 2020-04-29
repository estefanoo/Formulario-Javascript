
var nombre = document.querySelector('input[name=nombre]')
var apellido = document.querySelector('input[name=apellido]')
var edad = document.querySelector('input[name=edad]')
var email = document.querySelector('input[name=email]')
var pass = document.querySelector('input[name=pass]')
var repetirPass = document.querySelector('input[name=repetirPass]')
var errores = document.getElementById("formError")
var formulario = document.getElementById("formulario")
var registrado = document.getElementById("registrado")
var expresionEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/

formulario.onsubmit = function (event){
    var mensajes = []
    if (nombre.value == "" || apellido.value == "" || edad.value == "" || email.value == "" || pass.value == "" || repetirPass.value == "") {
        mensajes.push("Rellena todos los campos")
    }

    if(nombre.value.length <3 && apellido.value.length <3){
        mensajes.push("El nombre o el apellido tiene que tener al menos 3 caracteres")

    }
    if(edad.value > 150){
        mensajes.push("La edad tiene que ser menor de 150")

    }
    if(!expresionEmail.test(email.value)){
        mensajes.push("El mail no tiene el formato correcto: ejemplo@ejemplo.com")

    }
    if(pass.value.length<8 && repetirPass.value.length<8){
        mensajes.push("La contraseña tiene que tener minimo 8 caracteres")
    }
    if(repetirPass.value != pass.value){
        mensajes.push("La contraseña tiene que ser las mismas")

    }

    if(mensajes.length > 0){
        event.preventDefault()
        errores.innerHTML = mensajes.join('<br> ')
    }
    if(mensajes.length == 0){
        event.preventDefault()
        formulario.style.display="none"
        registrado.innerHTML = "¡Registro Exitoso!"

    }
}

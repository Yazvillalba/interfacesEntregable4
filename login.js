"use strict"
function mostrarLogin() {
    document.getElementById('registro-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function mostrarRegistro() {
    document.getElementById('registro-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}
// var datosUsuario = [];
//  document.getElementById('button-registro').addEventListener('click', function(){
   
//      guardarRegistro()

//  })
// function guardarRegistro() {
//     var nombre = document.getElementById('nombre').value;
//     var email = document.getElementById('email').value;
//     var contrasena = document.getElementById('contrasena').value;
//     var datos = {
//         nombre: nombre,
//         email: email,
//         contrasena: contrasena
//     }
//     datosUsuario.push(datos);
   
// }
// console.log(datosUsuario);
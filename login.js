"use strict";

import { escribirEnStorage, obtenerDeStorage } from "./utils.js";

const errorElement = document.getElementsByClassName('error-message')[0];
const inputUsuarioLogin = document.getElementById("usuario");
const inputPasswordLogin = document.getElementById("contrasena-login");

const inputNombreRegistro = document.getElementById("nombre");
const inputEmailRegistro = document.getElementById("email");
const inputPasswordRegistro = document.getElementById("contrasena");

const btnShowRegistro = document.getElementById('show-register');
const btnShowLogin = document.getElementById('show-login');
const btnIngresar = document.getElementById('button-login');
const btnRegistro = document.getElementById('button-registro');


function mostrarLogin(e) {
    document.getElementById("registro-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

function mostrarRegistro(e) {
    document.getElementById("registro-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
}

function registrar(e) {
    const user = {
        email: inputEmailRegistro.value,
        password:  inputPasswordRegistro.value,
        nombre:  inputNombreRegistro.value,
    }

    const usuarios = obtenerDeStorage('usuarios');

    escribirEnStorage('usuarios', [...usuarios, user]);

    // para chequear que se guardo el usuario descomentar lo siguiente
    // const usuariosNuevos = obtenerDeStorage('usuarios');
    // console.log('usuariosNuevos', usuariosNuevos)
}

function iniciarSesion(e) {
    const email = inputUsuarioLogin.value;
    const password =  inputPasswordLogin.value;
    
    const usuarios = obtenerDeStorage('usuarios');
    let logueado = false;
    usuarios.forEach(user => {
        if(user.email === email && user.password === password){
            logueado = true;
            if(user.role === "admin"){
                window.location.href = 'admin.html'
            } else {
                window.location.href = 'index.html'
            }
            console.log('logueado', logueado)
            // si se pudo loguear redirecciona al usuario al admin
            console.log("inicio de sesion exitoso");
        } 
        
    });
    

    if (!logueado){
        errorElement.style.display = 'block';
        errorElement.innerHTML = 'Usuario o contraseña incorrecta';
        setTimeout(() => {
            errorElement.style.display = 'none';
        }, 3000);
    }

}



btnShowLogin.addEventListener('click', mostrarLogin);
btnShowRegistro.addEventListener('click', mostrarRegistro);
btnIngresar.addEventListener('click', iniciarSesion);
btnRegistro.addEventListener('click', registrar)

/***
 * DATOS PARA INGRESO
 */
// Tener un usuario admin que se cargue automaticamente con un script (en el index.js)
// que chequee si juan@apoa.com (que va a ser el admin ponele) esta cargado
// en localStorage y que si no, lo cargue. 

// despues en la parte de registro, tenemos una carga que cuando se agrega
// un usuario lo carga el localstorage
// de esta forma los usuarios no se persisten entre distintas
//  instancias de la pagina, sino que se mantienen usuarios diferentes
// para cada una de ellas (de acuerdo a lo cargado)

const datos = [ // son los datos que van a estar cargados por defecto
    {   
        "name": "Juan",
        email: "juan@apoa.com",
        password: "123",
        role: "admin",
    },
    {
        "name": "Pedro",
        email: "pedro@apoa.com",
        password: "123",
        role: "user",
    },
];


// siempre que se cargue el script de login (al cargar la pag de login)
// quiero que se chequee que el usuario juan@apoa.com este cargado y sea admin
function chequearJuan(){

    let usuarios = obtenerDeStorage('usuarios');
    if (usuarios != null && usuarios.length !== 0) {
        console.log('usuarios[0]', usuarios[0])
        if(usuarios[0].email != "juan@apoa.com" || usuarios[0].role != "admin"){
            
            // si no esta cargado como admin lo cargo con los datos hardcodeados
            usuarios[0] = datos[0];
            escribirEnStorage('usuarios', usuarios);
            console.log("creando a juan");
        } else {
            console.log("juan esta creado");
        }
    } else {
        escribirEnStorage('usuarios', datos);
    }

}
chequearJuan();


// funcion disparada en el onclick del boton de ingresar



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

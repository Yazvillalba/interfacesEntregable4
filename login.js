"use strict";

import { escribirEnStorage, obtenerDeStorage } from "./utils.js";
import { success } from "./Icons.js";
import { Toast } from "./Toast.js"


const errorElement = document.getElementsByClassName('error-message')[0];
const errorLogin = document.getElementsByClassName('error-message')[1];

const inputUsuarioLogin = document.getElementById("usuario");
const inputPasswordLogin = document.getElementById("contrasena-login");

const inputNombreRegistro = document.getElementById("nombre");
const inputEmailRegistro = document.getElementById("email");
const inputPasswordRegistro = document.getElementById("contrasena");

const btnShowRegistro = document.getElementById('show-register');
const btnShowLogin = document.getElementById('show-login');
const btnIngresar = document.getElementById('button-login');
const btnRegistro = document.getElementById('button-registro');

var spinner = document.getElementById("spinner-container");

// pantalla actual para saber, luego de ocultar ambas por el spinner, cual volver a poner;
// valores: ["registro", "login"]
let pantallaActual = "registro";

function mostrarSpinner() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("registro-form").style.display = "none";
    spinner.style.display = "block";
}

function ocultarSpinner(pantalla = '') {
    spinner.style.display = "none";
    document.getElementById(`${pantalla}-form`).style.display = "block";
}


function ocultarLogin(e){
    document.getElementById("login-form").style.display = "none";
}

function ocultarRegistro(e){
    document.getElementById("registro-form").style.display = "none";
}


function mostrarLogin(e) {
    ocultarRegistro(e);
    document.getElementById("login-form").style.display = "block";
}

function mostrarRegistro(e) {
    document.getElementById("registro-form").style.display = "block";
    ocultarLogin(e);
}


function validarRegistro() {
    const nombre = inputNombreRegistro.value;
    const email = inputEmailRegistro.value;
    const contrasena = inputPasswordRegistro.value;

    if (!nombre || !email || !contrasena) {
        errorElement.style.display = 'block';
        errorElement.innerHTML = 'Por favor, completa todos los campos';
        setTimeout(() => {
            errorElement.style.display = 'none';
        }, 5000);
        return false;
    }

    return true;
}



// const btn = document.getElementById('button-registro');

const body = document.querySelector('.container-form');
const container = document.createElement('div');
container.classList.add('toast-cont')

body.prepend(container)

const triggerToast = (e) => {
    const toastContainer = document.querySelector('.toast-cont');
    const toast = new Toast(toastContainer, "type is not being used", success, "Registro exitoso!", "Gracias por registrarte en nuestra base de datos.")
    toast.showUp();
}

function registrar(e) {
    if (!validarRegistro()) {
        return;
    }
    pantallaActual = 'registro';
    const user = {
        email: inputEmailRegistro.value,
        password: inputPasswordRegistro.value,
        nombre: inputNombreRegistro.value,
    }

    const usuarios = obtenerDeStorage('usuarios');

    escribirEnStorage('usuarios', [...usuarios, user]);

    mostrarSpinner();
    setTimeout(() => {
        ocultarSpinner(pantallaActual);
        triggerToast();
    }, 2000);

    // para chequear que se guardo el usuario descomentar lo siguiente
    // const usuariosNuevos = obtenerDeStorage('usuarios');

}


function iniciarSesion(e) {
    pantallaActual = "login"
    const email = inputUsuarioLogin.value;
    const password = inputPasswordLogin.value;
    const usuarios = obtenerDeStorage('usuarios');
    let logueado = false;

    const error = {
        error: false,
        message: ""
    }
    if (!email || !password) {
        error.error = true;
        error.message = 'Completa todos los campos';

    } else {
        let contador = 0;
        while (!logueado && contador < usuarios.length) {
            const user = usuarios[contador];
            if (user.email === email && user.password === password) {
                logueado = true;
                mostrarSpinner();
                setTimeout(() => {
                    // si se pudo loguear redirecciona al usuario segun sea o no admin
                    if (user.role === "admin") {
                        window.location.href = 'admin.html'

                    } else {
                        window.location.href = 'index.html'
                    }

                    ocultarSpinner();
                }, 3000);
                return;
            } 
            contador++;
        }
        if(!logueado){
            error.error = true;
            error.message = 'Usuario o contraseña incorrecta';
        }
    }
    if (error.error) {
        errorLogin.style.display = 'block';
        errorLogin.innerHTML = error.message;
        setTimeout(() => {
            errorLogin.style.display = 'none';
        }, 5000);
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
function chequearJuan() {

    let usuarios = obtenerDeStorage('usuarios');
    if (usuarios != null && usuarios.length !== 0) {

        if (usuarios[0].email != "juan@apoa.com" || usuarios[0].role != "admin") {

            // si no esta cargado como admin lo cargo con los datos hardcodeados
            usuarios[0] = datos[0];
            escribirEnStorage('usuarios', usuarios);

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

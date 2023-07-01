"use strict";

import { success } from "./Icons.js";
import { Toast } from "./Toast.js"
import { escribirEnStorage, obtenerDeStorage } from "./utils.js";

const errorElement = document.getElementsByClassName('error-message')[0];
const inputNombreMascota = document.getElementById("nombreMascota");
const inputEdadMascota = document.getElementById("edadMascota");
const imagenInput = document.getElementById("imagen");
const seccionSelect = document.getElementById("seccion");


const btnAddMascota = document.getElementById('button-agregarMascota');

btnAddMascota.addEventListener('click', guardar)
var spinner = document.getElementById("spinner-container");

function mostrarSpinner() {
    spinner.style.display = "block";
}

function ocultarSpinner() {
    spinner.style.display = "none";
}

function ocultarForm() {
    document.getElementById("agregar-mascota").style.display = "none";
}

function mostrarForm(){
    document.getElementById("agregar-mascota").style.display = "block";
}

function guardar(e) {
    const mascota = {
        nombre: inputNombreMascota.value,
        edad: inputEdadMascota.value,
        seccion: seccionSelect.value
    }
    
    ocultarForm();
    mostrarSpinner();

    setTimeout(() => {
        ocultarSpinner();
        triggerToast();
        mostrarForm();
    }, 2000);

    const imagen = imagenInput.files[0];
    const reader = new FileReader();
    
    if (imagen) {
        reader.readAsDataURL(imagen);
    } else {
        mascota.imagen = "";
        cargarMascota(mascota)
    }

    reader.addEventListener("load", function () {
        
        // convertir la imagen a stream y setearla como atributo
        // de mascota
        mascota.imagen = reader.result;
        cargarMascota(mascota);

    }, false);
}

const body = document.querySelector('.container-form');
const container = document.createElement('div');
container.classList.add('toast-cont')

body.prepend(container)

const triggerToast = (e) => {
    const toastContainer = document.querySelector('.toast-cont');
    const toast = new Toast(toastContainer, "type is not being used", success, "Registro exitoso!", "Gracias por registrarte en nuestra base de datos.")
    toast.showUp();
}

function cargarMascota(mascota = {}){
    const mascotas = obtenerDeStorage('mascotas');
    
    if(mascotas != null && mascotas.length > 0){
        escribirEnStorage('mascotas', [...mascotas, mascota]); 
    } else{
        escribirEnStorage('mascotas', [mascota]); 
    }
}


// para cargar una imagen de local storage
// const img = document.getElementById('prueba'); // elemento <img> </img>
// const masc = obtenerDeStorage('mascotas')[0];

// img.src = masc.image;
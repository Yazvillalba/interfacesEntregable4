"use strict";

import { escribirEnStorage, obtenerDeStorage } from "./utils.js";

const errorElement = document.getElementsByClassName('error-message')[0];
const inputNombreMascota = document.getElementById("nombreMascota");
const inputEdadMascota = document.getElementById("edadMascota");
const imagenInput = document.getElementById("imagen");
const seccionSelect = document.getElementById("seccion");


const btnAddMascota = document.getElementById('button-agregarMascota');

btnAddMascota.addEventListener('click', guardar)

function guardar(e) {
    const mascota = {
        nombre: inputNombreMascota.value,
        edad: inputEdadMascota.value,
        seccion: seccionSelect.value
    }

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
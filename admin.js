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
        imagen: imagenInput.files[0].name,
        seccion: seccionSelect.value
    }

    const mascotas = obtenerDeStorage('mascotas');
    console.log(mascota);
    if(mascotas != null && mascotas.length > 0){
       escribirEnStorage('mascotas', [...mascotas, mascota]); 
    } else{
        escribirEnStorage('mascotas', [mascota]); 

    }
    
    
}

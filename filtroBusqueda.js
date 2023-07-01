var btnFiltrar = document.querySelector('#boton');



var contenido = document.getElementById("searchContainer");
var boton = document.getElementById("ver");

let activo=true;
let svg1='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-left-short" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/></svg>';
let svg2='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/></svg>';
boton.addEventListener("click", function() {
  
  boton.innerHTML = `${activo ? svg2 : svg1}`
    activo = !activo;
  contenido.classList.toggle("show");  
});


function filtrarTarjetas() {
    
    const tipoAdopcion = document.getElementById('tipo-adopcion').value.toLowerCase();
    const edad = document.getElementById('edad').value.toLowerCase();
    const tamaño = document.getElementById('tamanio').value.toLowerCase();
  
    const tarjetas = document.getElementsByClassName('cardPerdido');
  
    for (let i = 0; i < tarjetas.length; i++) {
      const tarjeta = tarjetas[i];
      const h1 = tarjeta.getElementsByTagName('h1')[0].textContent.toLowerCase();
      const spanEdad = tarjeta.querySelector('.tags .tag:nth-child(1)').textContent.toLowerCase();
      const spanTamaño = tarjeta.querySelector('.tags .tag:nth-child(3)').textContent.toLowerCase();
    
      if (h1.includes(tipoAdopcion) && spanEdad.includes(edad) && spanTamaño.includes(tamaño)) {
        tarjeta.style.display = 'block'; // Mostrar la tarjeta
      } else {
        tarjeta.style.display = 'none'; // Ocultar la tarjeta
      }
    }
  }

var spinner = document.getElementById("spinner-container");
let wrapper =document.querySelector('.wrapper');
function mostrarSpinner() {
  spinner.style.display = "block";
}
function ocultarSpinner() {
  spinner.style.display = "none";
}
btnFiltrar.addEventListener("click", function() {
  mostrarSpinner();
  boton.click();
  wrapper.classList.add("show");  
  setTimeout(function() {  
    filtrarTarjetas();    
    ocultarSpinner();
    wrapper.classList.remove("show");
    
  }, 1500); // Tiempo de espera simulado: 2 segundos
});








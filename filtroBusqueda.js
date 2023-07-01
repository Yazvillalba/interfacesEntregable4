var btnFiltrar = document.querySelector('#boton');
btnFiltrar.addEventListener("click", filtrarTarjetas);


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








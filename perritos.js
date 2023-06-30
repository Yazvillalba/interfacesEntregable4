// arreglo de objetos con la información de cada elemento
var elementos = [
    {
        nombre: "Firulo",
        imagenSrc: "img/perrito1.jpeg",
        popoverTitulo: "Hola soy Firulo!",
        popoverContenido: "Edad: 2 años, Peso: 10 kg"
    },
    {
        nombre: "Otro Elemento",
        imagenSrc: "img/perrito2.jpeg",
        popoverTitulo: "Popover title 2",
        popoverContenido: "More amazing content!"
    }, {
        nombre: "Bruno",
        imagenSrc: "img/perrito3.jpeg",
        popoverTitulo: "Bruno",
        popoverContenido: "More amazing content!"
    }, {
        nombre: "Otro Elemento",
        imagenSrc: "img/perrito4.jpeg",
        popoverTitulo: "Popover title 2",
        popoverContenido: "More amazing content!"
    }, {
        nombre: "Otro Elemento",
        imagenSrc: "img/perrito5.jpeg",
        popoverTitulo: "Popover title 2",
        popoverContenido: "More amazing content!"
    },
    {
        nombre: "Otro Elemento",
        imagenSrc: "img/perrito6.jpg",
        popoverTitulo: "Popover title 2",
        popoverContenido: "More amazing content!"
    },{
        nombre: "Otro Elemento",
        imagenSrc: "img/perrito7.jpg",
        popoverTitulo: "Popover title 2",
        popoverContenido: "More amazing content!"
    }
];

var html = "";
for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];
    html += `
      <div class="card border-secondary mb-3" style="max-width: 18rem; margin-left: 5%; margin-top:2%">
        <div class="card-header">${elemento.nombre}</div>
        <img src="${elemento.imagenSrc}" class="card-img-top" alt="...">
        <div class="card-body text-secondary">
          <button type="button" class="btn btn-secondary" data-bs-toggle="popover" data-bs-title="${elemento.popoverTitulo}" data-bs-content="${elemento.popoverContenido}">Informacion</button>
        </div>
      </div>
    `;
}
document.getElementById("contenedor").innerHTML = html;


var popoverList = [];

document.addEventListener("DOMContentLoaded", function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        var popover = new bootstrap.Popover(popoverTriggerEl);
        popoverTriggerEl.addEventListener('shown.bs.popover', function () {
            cerrarPopovers(popover);
        });
        return popover;
    });

    document.addEventListener("click", function (event) {
        var clickedElement = event.target;

        // Cerrar los popovers abiertos excepto si se hizo clic en el botón que los abre
        if (!clickedElement.matches('[data-bs-toggle="popover"]')) {
            popoverList.forEach(function (popover) {
                popover.hide();
            });
        }
    });
});

function cerrarPopovers(popoverActual) {
    popoverList.forEach(function (popover) {
        if (popover !== popoverActual) {
            popover.hide();
        }
    });
}


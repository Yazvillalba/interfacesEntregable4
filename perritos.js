// arreglo de objetos con la información de cada elemento
var elementos = [
    {
        nombre: "Firulo",
        imagenSrc: "img/perrito1.jpeg",
        edad: "Hola soy Firulo!",
        tipo: "Adopcion"
    },
    {
        nombre: "Otro Elemento",
        imagenSrc: "img/perrito2.jpeg",
        edad: "Popover title 2",
        tipo: "Transito"
    }, {
        nombre: "Bruno",
        imagenSrc: "img/perrito3.jpeg",
        edad: "Bruno",
        tipo: "Adopcion"
    }, {
        nombre: "Otro Elemento",
        imagenSrc: "img/perrito4.jpeg",
        edad: "Popover title 2",
        tipo: "Adopcion"
    }, {
        nombre: "Otro Elemento",
        imagenSrc: "img/perrito5.jpeg",
        edad: "Popover title 2",
        tipo: "Adopcion"
    },
    {
        nombre: "Otro Elemento",
        imagenSrc: "img/perrito6.jpg",
        edad: "Popover title 2",
        tipo: "Transito"
    },{
        nombre: "Otro Elemento",
        imagenSrc: "img/perrito7.jpg",
        edad: "Popover title 2",
        tipo: "Adopcion"
    }
];

var html = "";
for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];
    html += `
    <div class="wrapper">
        <div class="cardPerdido">
                    <div class="poster"><img src="${elemento.imagenSrc}" alt="Location Unknown"></div>
                    <div class="details">
                        <h1>${elemento.tipo}</h1>
                        <h2>${elemento.nombre}</h2>
                        <div class="rating">
                            <span>${elemento.edad}</span>
                        </div>
                        <div class="tags">
                            <span class="tag">Cachorro</span>
                            <span class="tag">Mestizo</span>
                            <span class="tag">Chico</span>
                        </div> 
                       
                    </div>
                   
                </div>
    </div>
      
    `;
}
document.getElementById("contenedor").innerHTML = html;
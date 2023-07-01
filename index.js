import { construirNavbar } from "./navbar.js";

const location = window.location;
const body = document.getElementsByTagName("body");

const direcciones = [
    { navName: "Home", path: "index", active: false },
    { navName: "Perdidos", path: "perdidos", active: false },
    { navName: "Noticias", path: "noticias", active: false },
    { navName: "Adopciones", path: "perritos", active: false },
    {
        navName: `<img src="img/acceso.png" alt=""
    class="img-access">`,
        path: "login",
        active: false,
    },
];

function getHTMLFileName(path = "") {
    return path.replace("/", "").replace(".html", "");
}

const path = getHTMLFileName(location.pathname);

const direcc = direcciones.map((direccion) => {
    if (direccion.path === path) {
        direccion.active = true;
    }
    return direccion;
});

const navElements = construirNavbar(direcc);


const navListItemContainer = document.getElementById("nav-list");
navListItemContainer.innerHTML = navElements;

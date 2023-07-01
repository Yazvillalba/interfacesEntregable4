import { construirNavbar } from "./navbar.js";

const location = window.location;
const body = document.getElementsByTagName("body");

console.log("location", location);

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
console.log("direcc", direcc);

const navElements = construirNavbar(direcc);

console.log("navElements", navElements);

const navListItemContainer = document.getElementById("nav-list");
navListItemContainer.innerHTML = navElements;

console.log("body", body);

const htmlBody = body.innerHTML;

console.log('htmlBody', htmlBody)

console.log('banner', banner)

body.innerHTML = banner + htmlBody

// body[0].innerHTML = navbar;
console.log("body", body);


import { construirNavbar } from "./navbar.js";
import { escribirEnStorage, obtenerDeStorage } from "./utils.js";

const location = window.location;
const body = document.getElementsByTagName("body");

const direcciones = [
    { navName: "Home", path: "index", active: false },
    { navName: "Perdidos", path: "perdidos", active: false },
    { navName: "Noticias", path: "noticias", active: false },
    { navName: "Adopciones", path: "perritos", active: false },
    
];

function getHTMLFileName(path = "") {
    return path.replace("/", "").replace(".html", "");
}

const path = getHTMLFileName(location.pathname);

// TODO: 
// preguntar si hay usuario logueado y si esta agregar un boton de cerrar sesion
const user = obtenerDeStorage('usuarioLogueado');

if(user){
    //mostrar el logout
    // si ademas es admin agregar (antes del logout) el nav item de administrar
    if(user.role === "admin"){
        direcciones.push({
            navName: `Administrar`,
            path: "admin",
            active: false,
        })
    }
    
    // agregamos el boton de logout
    direcciones.push({
        navName: `Cerrar sesión`,
        path: "logout",
        active: false,
    })

} else {
    direcciones.push({
        navName: `<img src="img/acceso.png" alt=""
    class="img-access">`,
        path: "login",
        active: false,
    })
}



const direcc = direcciones.map((direccion) => {
    if (direccion.path === path) {
        direccion.active = true;
    }
    return direccion;
});

const navElements = construirNavbar(direcc);


const navListItemContainer = document.getElementById("nav-list");
navListItemContainer.innerHTML = navElements;

//TODO agarrar listener al boton de logout
const logout = document.getElementById('logout');
logout?.addEventListener('click', () => {

    escribirEnStorage('usuarioLogueado', false);
    window.location.href = 'index.html';
})

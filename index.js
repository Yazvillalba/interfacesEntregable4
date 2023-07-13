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
        // navName: `Cerrar sesión`,
        navName: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
      </svg>`,
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

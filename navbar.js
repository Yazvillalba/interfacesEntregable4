

/*  
 <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">APOAA</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav" id="nav-list">
                        <!-- <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Sobre nosotros</a>
                        </li> -->
                        <li class="nav-item">
                            <a class="nav-link" href="noticias.html">Noticias</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="perritos.html">Adopciones</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="perdidos.html">Perdidos</a>
                        </li>
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="#">Colaborar</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contacto</a>
                        </li> -->
                        <li class="nav-item">
                            <a class="nav-link" href="login.html"><img src="img/acceso.png" alt=""
                                    class="img-access"></a>
                        </li>
                        <!-- <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Dropdown link
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li> -->
                    </ul>
                </div>
            </div>
        </div>
    </nav>
*/

const navItemContainer = document.getElementById('navbarNavDropdown');

export function construirNavbar(elements) {
    let nav = "";

    elements.forEach(e => {
        console.log(e)
        nav += `<li class="nav-item ${e.active ? 'active' : '' }">
                    <a class="nav-link" href="${e.path}.html">${e.navName}</a>
                </li>`
    });

    return nav;
}

export class Navbar {}

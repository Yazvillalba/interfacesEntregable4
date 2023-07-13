
const navItemContainer = document.getElementById('navbarNavDropdown');

export function construirNavbar(elements) {
    let nav = "";

    elements.forEach(e => {
        console.log(e)
        if(e.path === "logout"){
            nav += `<li class="nav-item ${e.active ? 'active' : '' }">
                    <button class="nav-link" id="logout">${e.navName}</button>
                </li>`
        }else {
            nav += `<li class="nav-item ${e.active ? 'active' : '' }">
                        <a class="nav-link" href="${e.path}.html">${e.navName}</a>
                    </li>`
        }
    });

    return nav;
}

export class Navbar {}

window.addEventListener('load', activePage);

function activePage() {
    const currentLocation = location.pathname.slice(1); // remove the leading slash
    console.log(currentLocation); // log the value of currentLocation to the console
    const navLinks = document.querySelectorAll("nav a");
    const linkLength = navLinks.length;

    for (let i = 0; i < linkLength; i++) {
        if (navLinks[i].pathname.slice(1) === currentLocation) { // remove the leading slash
            navLinks[i].classList.add("navActive");
        }
    }
}
window.addEventListener('load', activePage);

function activePage() {
    const currentLocation = location.pathname.slice(1); 
    //console.log(currentLocation); 
    const navLinks = document.querySelectorAll("nav a");
    const linkLength = navLinks.length;

    for (let i = 0; i < linkLength; i++) {
        if (navLinks[i].pathname.slice(1) === currentLocation) { 
            navLinks[i].classList.add("navActive");
        }
    }
}

function errorMessage(identifier) {
    let element;
    if(identifier == 1){
        element = document.getElementById("dialogDonate");
        element.innerHTML = "A redirect error occurred. Please try again later.";
    }else{
        element = document.getElementById("dialogContact");
        element.innerHTML = "An error occurred while submitting the form. Please try again later.";
    }
    setTimeout(() => {
        element.innerHTML = "";
    }, 5000);
}
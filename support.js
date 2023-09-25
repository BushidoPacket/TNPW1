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
    if(identifier === 1){
        document.getElementById("dialogDonate").innerHTML = "A redirect error occurred. Please try again later.";
    }else{
        document.getElementById("dialogContact").innerHTML = "An error occurred while submitting the form. Please try again later.";
    }
}
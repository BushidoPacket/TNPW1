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

function buttonMessage(identifier) {
    let element;
    if(identifier == 1){
        element = document.getElementById("dialogDonate");
        element.style.color = "rgb(245, 72, 72)"; /*red*/
        element.innerHTML = "A redirect error occurred. Please try again later.";
    }else{
        element = document.getElementById("dialogContact");
        if(document.getElementById("contactName").value == "" 
        || document.getElementById("contactEmail").value == "" 
        || document.getElementById("contactSubject").value == "" 
        || document.getElementById("contactText").value == ""){
            element.style.color = "rgb(245, 72, 72)"; /*red*/
            element.innerHTML = "Form not submitted. Please fill out all fields.";
        }else{
        element.style.color = "rgb(95, 250, 95)"; /*green*/
        element.innerHTML = "Form submitted successfully. Thank you for contacting us!";

        document.getElementById("contactName").value = "";
        document.getElementById("contactEmail").value = "";
        document.getElementById("contactSubject").value = "";
        document.getElementById("contactText").value = "";
        }
    }
    setTimeout(() => {
        element.innerHTML = "";
    }, 5000);
}
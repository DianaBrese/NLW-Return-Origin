function onScroll() {
    if(scrollY > 0) {
        navigation.classList.add("scroll");

        // Trocar cor do icone de menu para branco

        const path = document.getElementsByClassName("svg");
        for(index = 0; index < path.length; index++) {
            path[index].style.stroke = "white";
        }


    } else {
        navigation.classList.remove("scroll");

        //Trocar cor do icone de menu para verde
        const path = document.getElementsByClassName("svg");
        for(index = 0; index < path.length; index++) {
            path[index].style.stroke = "#00856F";
        }

    }
};

function openMenu() {
    document.body.classList.add("menu-expanded")
    
};

function closeMenu() {
    document.body.classList.remove("menu-expanded")
};


ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700,
}).reveal('#home,#home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about content');



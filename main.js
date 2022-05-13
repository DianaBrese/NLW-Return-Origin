window.addEventListener("scroll",onScroll)
onScroll()

function onScroll() {
   showNavOnScroll();
   showBackToTopButtonOnScroll();
};

function showNavOnScroll() {
    if(scrollY > 0) {
        navigation.classList.add("scroll");

        // Trocar cor do icone de menu para branco

        const path = document.getElementsByClassName("svg");
        for(index = 0; index < path.length; index++) {
            path[index].style.stroke = "white";
        }


    } else {
        navigation.classList.remove("scroll");

        //Trocar cor do icone de menu 
        const path = document.getElementsByClassName("svg");
        for(index = 0; index < path.length; index++) {
            const footer = document.getElementsByTagName("footer")[0];
            path[index].style.stroke = window.getComputedStyle(footer).backgroundColor;
        }

    }
}

function showBackToTopButtonOnScroll() {
    if(scrollY > 400) {
        backToTopButton.classList.add("show")
    } else {
        backToTopButton.classList.remove("show")
    }
}

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





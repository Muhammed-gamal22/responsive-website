//Setting Up Variables
const landingTitle = document.querySelector(".landing-content .landing-content-title");
const menuButton = document.querySelector(".menu");
const menuContent = document.querySelector(".menu-content");
const navLinks = document.querySelectorAll(".nav-links li a");
const menuLinks = document.querySelectorAll(".menu-links li a");
let i = 0;
const storageSection = localStorage.getItem("option_link");


if (storageSection !== null) {
    document.querySelectorAll(".nav-links li a").forEach((link) => {
        link.classList.remove("active");
        if (link.dataset.section === storageSection) {
            link.classList.add("active");
        }
    });
}





// landingTitle.dataset.title[i];
window.onload = function() {
    let typeWriter = setInterval(() => {
        landingTitle.innerHTML += landingTitle.dataset.title[i];

        i++;
        if (i >= landingTitle.dataset.title.length) {
            clearInterval(typeWriter);
        }
    }, 100);

}
menuButton.addEventListener("click", (e) => {
    e.preventDefault();
    menuContent.classList.toggle("show");
    menuButton.classList.toggle("show");
});



function pressOnLinks(selectorElement) {
    selectorElement.forEach((link) => {
        link.addEventListener("click", (e) => {

            e.preventDefault();
            removeAllActives();
            e.target.classList.add("active");

            document.querySelector(e.target.dataset.section).scrollIntoView(true, { behavior: "smooth" });
            localStorage.setItem("option_link", e.target.dataset.section);


        });
    });
}

pressOnLinks(navLinks);

pressOnLinks(menuLinks);


function removeAllActives() {
    navLinks.forEach((link) => {
        link.classList.remove("active");
    });
}


window.onscroll = function() {

    if (window.scrollY >= 120) {
        document.querySelector(".header").style.boxShadow = "1px 0px 6px #9c27b0";
    } else {
        document.querySelector(".header").style.boxShadow = "none";
    }
}
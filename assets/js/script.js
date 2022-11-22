// mobile menu
const mobileMenu = document.getElementById('mobileMenu');
const bars = document.getElementById("bars");

mobileMenu.onclick = function () {
    document.getElementById("sidebar").classList.toggle("sidebar-active");
    if (document.getElementById("sidebar").classList.contains("sidebar-active")) {
        bars.classList.remove("fa-bars");
        bars.classList.add("fa-xmark");
    } else {
        bars.classList.remove("fa-xmark");
        bars.classList.add("fa-bars");
    }
}


// scroll animation
const card = document.querySelectorAll(".card");

const checkCard = () => {
    const triggerBotttom = (window.innerHeight / 5) * 4;
    card.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBotttom) card.classList.add("show");
        else card.classList.remove("show");
    });
};

window.addEventListener("scroll", checkCard);
checkCard()


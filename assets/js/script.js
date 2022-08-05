// function getIcon
let getIcon = function (id) {
    return document.getElementsByName(check);
}
// function change Icon
let changeIcon = function (id) {
    id.classList.toggle('fa-xmark');
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


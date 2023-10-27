const slidesData = [
    { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
    { title: "VIGNE", description: "Consectetur adipiscing elit" },
    { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
];

// on récupère les éléments du DOM pour interagir avec la page web
const btns = document.querySelectorAll(".slider-btn");
const imgs = document.querySelectorAll(".slider-img");
const dots = document.querySelectorAll(".dot");
const title = document.querySelector('.slider-title')
const legend = document.querySelector('.slider-legend')

// on initialise la variable globale qui permettra de modifier l'interface
let slideIndex;

// on déclare les clicks sur les boutons gauche droite
btns.forEach((el, index) => {
    // el.maNouvellePropriete = 'nouvellePropriete_' + index + '!'
    el.leftOrRight = index;
    el.addEventListener("click", onClickBtn);
});

// on déclare les clicks sur les "puces" 
dots.forEach((dot, ind) => {
    dot.style.opacity = 0.5
    dot.indexPosition = ind
    dot.addEventListener('click', onClickDot)
})


// on initialise la page web au chargement du site
init();

function onClickDot(e) {
    slideIndex = e.currentTarget.indexPosition
    updateCurrentImage(slideIndex)
}

function onClickBtn(e) {
    if (e.currentTarget.leftOrRight === 0) {
        slideIndex--;
    } else {
        slideIndex++;
    }

    updateCurrentImage(slideIndex)
}

// on déplace l'image et on met à jours les éléments cliquables : puces + boutons
function updateCurrentImage(slideI) {
    btns[0].style.opacity = btns[1].style.opacity = 1
    btns[0].style.pointerEvents = btns[1].style.pointerEvents = 'auto'

    dots.forEach((dot) => {
        dot.style.opacity = 0.5
    })

    if (slideI <= 0) {
        slideI = 0;
        btns[0].style.opacity = 0.3
        btns[0].style.pointerEvents = 'none'
    } else if (slideI >= imgs.length - 1) {
        slideI = imgs.length - 1;
        btns[1].style.opacity = 0.3
        btns[1].style.pointerEvents = 'none'
    }

    dots[slideI].style.opacity = 1

    displayImages(slideI)
}

// mise à jour des différents composants
function displayImages(slideI) {
    title.textContent = slidesData[slideI].title
    legend.textContent = slidesData[slideI].description

    imgs.forEach((img, indexImg) => {
        img.style.transition = 'transform 3s';
        img.style.transform = `translateX(${(indexImg - slideI) * 100}%)`
    })
}

// déclaration des valeurs par défaut de nos composants
function init() {
    slideIndex = 0;
    dots[0].style.opacity = 1
    btns[0].style.opacity = 0.5
    btns[0].style.pointerEvents = 'none'
    title.textContent = slidesData[slideIndex].title
    legend.textContent = slidesData[slideIndex].description
    imgs.forEach((img, indexImg) => {
        img.style.transform = `translateX(${(indexImg - slideIndex) * 100}%)`
    })
}
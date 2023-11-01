/**
 * Features (fonctionnalités) du memory :
 *  - Placement aléatoire d'un nombre pair de cartes sur une grille
 *  - click sur une carte pour la retourner, principalement css + js
 *  - Quand 2 cartes sont retournées, on incrémente le nombre de tentatives, puis on compare les valeurs :
 *              - Si les valeurs sont identiques, alors on laisse les cartes retournées et inactives
 *              - Sinon, après un délai, les cartes reviennent à leur position initiale
 *              - Pendant ce délai, impossibilité de cliquer sur une autre carte
 *  - A n'importe quel moment, on peut rafraîchir la partie à l'aide de la touche espace
 *  - Quand toutes les cartes sont retournées, on affiche un message de réussite qui indique également la touche espace
 */

// 1. ON RECUPERE LES ELEMENTS HTML
const title = document.querySelector('.title')
const scene = document.querySelector('.scene')
const triesDiv = document.querySelector('.tries')
let cards = document.querySelectorAll('.card')
const input = document.querySelector("#search");
const form = document.querySelector("form");

let numberTries = 0
let numberSuccess = 0
let cardsRevealed = []

// 2. ON PARAMETRE LA MISE EN PAGE
for (let i = 0; i < cards.length; i++) {
    paramCard(cards[i], i)
    cards[i].addEventListener('click', onCardClick)
}

document.addEventListener("keydown", refresh)

async function fetchData() {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=ThkgHb61eXWX5PBPgACD0SaT6dNjzDoarehBpAZyDL0`)

        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`)
        }

        const data = await response.json()

        if (!data.total) {
            throw new Error("Utilisez un autre mot-clé")
        }

        console.log(data);
        createImages(data.results)
    }
    catch (error) {
        console.log(error)
    }
}

function createImages(data) {
    scene.textContent = ''
    for (let i = 0; i < 6; i++) {
        let img = data[i]

        for (let j = 0; j < 2; j++) {
            const newCard = document.createElement('div');
            newCard.className = 'card is-flipped'
            newCard.setAttribute('data-slug', img.slug);

            newCard.innerHTML = `
            <div class="card__face card__face--front">
                <img src="${img.urls.regular}" alt="">
            </div>
            <div class="card__face card__face--back">
                <div class="card-text">?</div>    
            </div>
        `
            scene.appendChild(newCard)
            cards = document.querySelectorAll('.card')
            resetCards()
        }
    }
}

form.addEventListener("submit", handleSearch)

function handleSearch(e) {
    e.preventDefault();

    if (!input.value) {
        return;
    }

    searchQuery = input.value;
    fetchData()
}

function refresh(e) {
    if (e.key == " ") {
        e.preventDefault()

        const delay = 100
        for (let i = 0; i < cards.length; i++) {
            setTimeout(function () {
                cards[i].classList.add('is-flipped')
            }, i * delay)
        }
        setTimeout(resetCards, 1000 + cards.length * delay)

        numberTries = 0
        numberSuccess = 0

        cardsRevealed = []
        triesDiv.textContent = `Nombre de tentatives : 0`
    }
}

function resetCards() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.order = (Math.random() * cards.length).toFixed()
        cards[i].addEventListener('click', onCardClick)
    }
}

function onCardClick(event) {
    /**
     * evet.target est l'élément html sur lequel l'utilisateur a cliqué, event.currentTarget est l'élément html sur lequel .addEventListener a été déclaré
     */
    const tg = event.currentTarget
    if (cardsRevealed.length <= 1 && tg.classList.contains('is-flipped')) {
        tg.classList.remove('is-flipped')
        cardsRevealed.push(tg)
        if (cardsRevealed.length == 2) {
            numberTries++
            triesDiv.textContent = `Nombre de tentatives : ${numberTries}`
            // on implémente le test des valeurs identiques ou non
            if (cardsRevealed[0].getAttribute('data-slug') == cardsRevealed[1].getAttribute('data-slug')) {
                cardsRevealed[0].removeEventListener('click', onCardClick)
                cardsRevealed[1].removeEventListener('click', onCardClick)

                cardsRevealed = []
                check()
                console.log('success')
            } else {
                setTimeout(cardBack, 1000)
                console.log('fail')
            }
        }
    }
}

function check() {
    numberSuccess++
    if (numberSuccess == cards.length / 2) {
        triesDiv.textContent = `Bravo : ${numberTries} tentatives ! Tu peux recommencer en appuyant sur ESPACE.`
    }
}

function cardBack() {
    for (let i = 0; i < cardsRevealed.length; i++) {
        cardsRevealed[i].classList.add('is-flipped')
    }
    cardsRevealed = []
}

function paramCard(card, index) {
    // card.style.order = (Math.random() * cards.length).toFixed()
    card.children[0].children[0].textContent = ((index + 1) / 2).toFixed()
    card.children[1].children[0].textContent = "?"
}
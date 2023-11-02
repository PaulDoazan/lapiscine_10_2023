// 1ère étape : on déclare un eventListener sur le formulaire pour récupérer la valeur de l'input
import ACCESS_KEY from './config.js'

const form = document.querySelector('.unsplash-search')
const input = document.querySelector('#search')
const imgContainer = document.querySelector('.img-container')
const triesDiv = document.querySelector('.tries')

let numberTries = 0
let numberSuccess = 0
let cardsRevealed = []

// const targetImg = document.querySelector('.target-img')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    fetchData()
})

async function fetchData() {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${input.value}&client_id=${ACCESS_KEY}`);

        if (!response.ok) {
            throw new Error('Erreur')
        }

        const data = await response.json()
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}

function displayData(data) {
    // targetImg.src = data.results[0].urls.regular

    // On vide le container d'images
    imgContainer.textContent = ''

    // On créé un élément html en javascript
    for (let i = 0; i < 6; i++) {
        console.log(data.results[i])
        createCard(data.results[i].urls.regular)
        createCard(data.results[i].urls.regular)
        // const newDiv = document.createElement("div")
        // newDiv.style.position = "relative"
        // const newImg = document.createElement("img")
        // const title = document.createElement("h3")
        // // newImg.style.position = "absolute"
        // title.style.position = "absolute"
        // title.style.color = "white"
        // title.style.margin = '0.5rem'
        // title.style.opacity = 0.6

        // title.textContent = data.results[i].alt_description
        // // title.textContent = data.results[i]
        // newImg.src = data.results[i].urls.regular

        // newDiv.appendChild(title)
        // newDiv.appendChild(newImg)
    }

    resetCards()
}

function createCard(url) {
    const newDiv = document.createElement("div")
    // is-flipped 
    newDiv.className = "card"
    newDiv.innerHTML = `
            <div class="card__face card__face--front">
                <img src="${url}" alt="">
            </div>
            <div class="card__face card__face--back">
                <div class="card-text">?</div>  
            </div>
        `
    imgContainer.appendChild(newDiv)
}

function resetCards() {
    const cards = document.querySelectorAll('.card')
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
            if (cardsRevealed[0].children[0].children[0].textContent == cardsRevealed[1].children[0].children[0].textContent) {
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
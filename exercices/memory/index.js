const title = document.querySelector('.title')
const cards = document.querySelectorAll('.card')

for (let i = 0; i < cards.length; i++) {
    paramCard(cards[i], i)
    cards[i].addEventListener('click', onCardClick)
}

function onCardClick(event) {
    /**
     * evet.target est l'élément html sur lequel l'utilisateur a cliqué, event.currentTarget est l'élément html sur lequel .addEventListener a été déclaré
     */
    const tg = event.currentTarget
    if (tg.classList.contains('is-flipped')) {
        tg.classList.remove('is-flipped')
        setTimeout(cardBack, 3000)
    } else {
        tg.classList.add('is-flipped')
    }
}

function cardBack() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add('is-flipped')
    }
}

function paramCard(card, index) {
    card.style.order = (Math.random() * cards.length).toFixed()
    card.children[0].children[0].textContent = ((index + 1) / 2).toFixed()
    card.children[1].children[0].textContent = "?"
}
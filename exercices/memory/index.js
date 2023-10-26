const title = document.querySelector('.title')
const cards = document.querySelectorAll('.card')

for (let i = 0; i < cards.length; i++) {
    console.log(cards[i].children)
    cards[i].children[0].children[0].textContent = Math.round((i + 1) / 2)
    cards[i].children[1].children[0].textContent = "?"
    cards[i].addEventListener('click', onCardClick)
}

function onCardClick(event) {
    /**
     * evet.target est l'élément html sur lequel l'utilisateur a cliqué, event.currentTarget est l'élément html sur lequel .addEventListener a été déclaré
     */
    const tg = event.currentTarget
    if (tg.classList.contains('is-flipped')) {
        tg.classList.remove('is-flipped')
    } else {
        tg.classList.add('is-flipped')
    }
}
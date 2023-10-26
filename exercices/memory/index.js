const title = document.querySelector('.title')
const cards = document.querySelectorAll('.card')

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', onCardClick)
}

function onCardClick(event) {
    /**
     * evet.target est l'élément html sur lequel l'utilisateur a cliqué, event.currentTarget est l'élément html sur lequel .addEventListener a été déclaré
     */
    console.log(event.currentTarget)
}
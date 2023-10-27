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
const cards = document.querySelectorAll('.card')

let numberTries = 0
let cardsRevealed = []

// 2. ON PARAMETRE LA MISE EN PAGE
for (let i = 0; i < cards.length; i++) {
    paramCard(cards[i], i)
    cards[i].addEventListener('click', onCardClick)
}

function onCardClick(event) {
    /**
     * evet.target est l'élément html sur lequel l'utilisateur a cliqué, event.currentTarget est l'élément html sur lequel .addEventListener a été déclaré
     */
    const tg = event.currentTarget
    if (cardsRevealed.length <= 1) {
        tg.classList.remove('is-flipped')
        cardsRevealed.push(tg)
    }

}

// function cardBack() {
//     for (let i = 0; i < cards.length; i++) {
//         cards[i].classList.add('is-flipped')
//     }
// }

function paramCard(card, index) {
    card.style.order = (Math.random() * cards.length).toFixed()
    card.children[0].children[0].textContent = ((index + 1) / 2).toFixed()
    card.children[1].children[0].textContent = "?"
}
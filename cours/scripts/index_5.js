/**
 * REVISIONS
 */

const title = document.querySelector('.my-title')
const paragraphs = document.querySelectorAll('.my-paragraph')

const myNumber = 32.089273052
paragraphs[1].textContent = myNumber.toFixed(4)

const BMIData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] },
];

const bmi = 21
let currentBmiColor;

/**
 * NOUVELLE NOTION ABORDEE : break au sein d'une boucle for sert à sortir de la boucle
 */
for (let i = 0; i <= BMIData.length - 1; i++) {
    if (bmi > BMIData[i].range[0] && bmi < BMIData[i].range[1]) {
        currentBmiColor = BMIData[i].color
        break
    }
}

const arr = [2, 5, 21, 'hello']

paragraphs[paragraphs.length - 1].style.color = currentBmiColor


// ------------------------

const words = ['mercredi', 'est', 'on', 'monde', 'le', 'tout', 'Salut']

let inversedSentence = ''

for (let i = words.length - 1; i >= 0; i--) {
    inversedSentence += words[i]
    inversedSentence += ' '
}

paragraphs[1].textContent = inversedSentence;


/**
 * REVISION du mot clé continue au sein d'une boucle for
 */

const numbers = [3, 42, 23, 12, 15, 8, 32]
const numbers2 = [3, 23, 23, 12, 14, 8, 32, 55, 33, 11]

const result = getNumbersUnder20(numbers)
// const result2 = getNumbersUnder20(numbers2)

console.log(result)

function getNumbersUnder20(tab) {
    let resUnder20 = []

    for (let i = 0; i < tab.length; i++) {
        if (tab[i] < 20) {
            resUnder20.push(tab[i])
            continue
        }
        console.log("Pas d'élément trouvé")
    }

    return resUnder20
}
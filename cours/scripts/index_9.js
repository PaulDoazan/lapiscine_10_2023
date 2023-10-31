/**
 * Notions abordées pécédemment : le format JSON
 */

const arr = ['Chaussette', "Chaussure", "Bonnet", "Pantalon"]

let arrClothesAtPlural = arr.map(el => el + 's')

// let arrClothesAtPlural = [];

// arr.forEach((el) => arrClothesAtPlural.push(el + 's'))

/**
 * Précisions sur la méthode .map() des tableaux
 */
let clothes = arr.map(el => {
    if (el.charAt(0) === "C") {
        return el
    }
})

console.log(clothes)

/**
 * String est un objet qui poossède des propriétés (.length) et des méthodes (.charAt())
 */
const word = "Chaussettes"
console.log(word.length)


/**
 * méthode .filter()
 */

// Exo : A l'aide de la méthode .filter, récupérer un nouveau tableau qui contient les mots de plus de 7 caractères

const result = arr.filter(element => element.length > 7)
console.log(result);

if (null === undefined) {
    console.log("Salut")
} else {
    console.log('Au revoir')
}

/**
* Précisions sur la méthode .getAttribute des éléments html
 */
const paragraphs = document.querySelectorAll('.my-paragraph')

paragraphs.forEach((paragraph) => {
    paragraph.addEventListener('mouseover', (e) => {
        e.currentTarget.style.backgroundColor = e.currentTarget.getAttribute('data-hello')
    })
})

/**
 * Précision sur les fonctions fléchées
 */
const title = document.querySelector('.my-title')
title.addEventListener('click', () => console.log('click sur titre'))

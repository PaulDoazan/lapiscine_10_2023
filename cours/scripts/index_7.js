
/**
 * REVISIONS
 */
const paragraphs = document.querySelectorAll('.my-paragraph')
setTimeout(maFonction, 2000)

function maFonction() {
    // console.log('hello world')
}

const randomNumber = Math.random()

paragraphs[0].textContent = "Super"
paragraphs[1].textContent = "Très bien"
paragraphs[2].textContent = "Il fait pas vraiement beau"

// On inverse l'ordre d'affichage de tous les éléments contenus dans une balise
// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].style.order = paragraphs.length - i
// }

// On replace de façopn aléatoire
for (let i = 0; i < paragraphs.length; i++) {
    // console.log(Math.random() * paragraphs.length)
    // paragraphs[i].style.order = (Math.random() * paragraphs.length).toFixed()
}

const container = document.querySelector('.container')
const coucou = document.querySelector('.coucou')

container.children[3].textContent = "3ème enfant"
// console.log(coucou.parentNode)


// Une fonction anonyme peut être directement déclarée au sein de la méthode addEventListener
// container.addEventListener('click', function (e) {
//     console.log(e.target, e.currentTarget)
// })


/**
 * NOUVELLE NOTION : les fonctions fléchées, arrow function
 */



// container.addEventListener('click', myFunction)

const myFunction = (param1, param2) => {
    console.log(param1 + param2)
}

const arr = [2, 5, 3, 6]
const arr2 = []

arr.forEach((element) => {
    let res = element + 2
    arr2.push(res)
})

console.log(arr2)


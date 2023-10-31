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


/**
 * Nouvelle notion : Les Classes, instance de classe => Programmation Orienté Objet, POO
 */

const user = {
    name: 'Paul',
    username: 'pauldoazan',
    age: 35,
    admin: false
}

const user2 = {
    name: 'Pierre',
    username: 'pierredoazan',
    age: 30,
    admin: true
}

let user3 = createObject('Stephane', 'stehpanedurand', 20, true)

function createObject(name, username, age, admin) {
    return {
        name: name,
        username: username,
        age: age,
        admin: admin
    }
}

class User {
    constructor(nom, username, age, admin) {
        this.n = nom
        this.u = username
        this.a = age
        this.ad = admin
    }
}

console.log(user3)

let user4 = new User('Mathilde', 'Dupont', 40, false)
let user5 = new User('Mathilde', 'Dupont', 40, false)
let user6 = new User('Mathilde', 'Dupont', 40, false)

class Pizza {
    constructor(name, baseTomate, ingredients) {
        this.name = name
        this.baseTomate = baseTomate
        this.ingredients = ingredients
    }
}

const pizza1 = new Pizza('Margherita', true, ['tomate', 'mozza', 'olives'])

pizza1.price = 23
console.log(pizza1);

class Rectangle {
    constructor(w, h) {
        this.width = w
        this.height = h
    }

    superficy() {
        return this.width * this.height
    }
}

let rect1 = new Rectangle(50, 4)
let rect2 = new Rectangle(20, 3)

const superficy1 = rect1.superficy()
const superficy2 = rect2.superficy()

console.log(superficy1, superficy2)
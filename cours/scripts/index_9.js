/**
 * Notions abordées pécédemment : le format JSON
 */

const arr = ['Chaussette', "Chaussure", "Bonnet", "Pantalon"]

let arrClothesAtPlural = arr.map(el => el + 's')

// let arrClothesAtPlural = [];

// arr.forEach((el) => arrClothesAtPlural.push(el + 's'))

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



const monday = "lundi"
const tuesday = "mardi"

// displayMessage(tuesday)
// displayMessage(monday)
// displayMessage('samedi')
// displayMessage(30)

function displayMessage(jour) {
    let hello = "Salut"
    console.log(`${hello} c'est ${jour}`)
}

const person_1 = {
    name: "Pierre",
    hasCar: true,
    hasBike: true,
    isSick: true
}
const person_2 = {
    name: "Mélanie",
    hasCar: true,
    hasBike: false,
    isSick: false
}

const person_3 = {
    name: "Paul",
    hasCar: false,
    hasBike: true,
    isSick: true
}
const person_4 = {
    name: "Sophie",
    hasCar: false,
    hasBike: false,
    isSick: false
}

// Intégrer le paramètre person aux 2 fonctions pour rendre la chaîne de caractère dynamique

// canGoToUniversity(person_1)
// canGoToTopOfMountain(person_1)

// Opérateur de comparaison complexe : OR
function canGoToUniversity(person) {
    if ((person.hasCar || person.hasBike) && !person.isSick) {
        console.log(`${person.name} peut aller à l'université`)
    } else {
        console.log(`${person.name} ne peut pas aller à l'université`)
    }

}

// Opérateur de comparaison complexe : AND
function canGoToTopOfMountain(person) {
    if (person.hasCar && person.hasBike && !person.isSick) {
        console.log(`${person.name} peut aller au sommet de la montagne`)
    } else {
        console.log(`${person.name} ne peut pas aller au sommet de la montagne`)
    }
}


/**
 * LES BOUCLES
 */

// for (let i = 0; i <= 10; i++) {
//     console.log('Salut ' + i)
// }

let arr = [3, 5, 12, 8, 1, 4]

for (let i = 0; i < arr.length; i++) {
    // console.log('Element courant : ' + arr[i])
}

// Ajouter un if dans la boucle pour n'afficher que les éléments dont la valeur est >= 5

for (let index = 0; index < arr.length; index++) {
    if (arr[index] >= 5) {
        // console.log('Element courant : ' + arr[index])
    }
}


let numbers = [3, 5, 12, 8, 1, 4]

// écrire une boucle for pour additionner tous les éléments d'un tableau

let sum = 0

for (let ind = 0; ind < numbers.length; ind++) {
    sum += numbers[ind]
    // console.log(sum)
}



// ==> 33

// A l'aide d'une boucle for, trouver la valeur la plus grande dans le tableau
let max = 0;

for (let i = 0; i < numbers.length; i++) {
    if ([i] > max) {
        max = numbers[i]
    }
    // console.log(max);
}

// afficher uniquement les nombres strictement supérieurs à 4 ==> 5, 12, 8 

let filteredNumbers = []

for (let n = 0; n < numbers.length; n++) {
    if (numbers[n] > 5) {
        filteredNumbers.push(numbers[n])
    }
}

// console.log(filteredNumbers)

// Encapsuler le script précédent dans une fonction et y ajouter le paramètre limit

const arrayResult = filterArray(7)

// console.log(arrayResult);

function filterArray(limit) {
    let filteredNumbers = []

    for (let n = 0; n < numbers.length; n++) {
        if (numbers[n] > limit) {
            filteredNumbers.push(numbers[n])
        }
    }

    console.log(filteredNumbers)
    //return filteredNumbers;
}

let arrExample = [3, 5, 8]

let readFirstElement = true;

let index;

if (readFirstElement) {
    index = 2
} else {
    index = 4
}

let objExample = {
    prop1: 6,
    prop2: 3
}

// console.log(arrExample.length / 2, arrExample[arrExample.length / 2])

// Récupérer l'élément du tableau placé au milieu du tableau à l'aide de la propriété .length du tableau

// solution alternative
// let middleIndex = Math.round(arrExample.length / 2);

let middleIndex;

if (arrExample.length % 2 != 0) {
    middleIndex = (arrExample.length - 1) / 2
} else {
    middleIndex = arrExample.length / 2
}

let elementInTheMiddle = arrExample[middleIndex]

// console.log(arrExample)

// méthode pour ajouter un élément à la fin du tableau
arrExample.push(51, 21, 24)

// console.log(arrExample)

// méthode pour retirer le dernier élément du tableau
arrExample.pop()

// console.log(arrExample)

/**
 * ----------------------------------------------------
 */

let administrators = ['Paul', 'Pierre', 'Mathilde']

// Avant chaque ajout d'administrateur dans le tableau, tester si le nombre d'administrateurs est supérieur ou égal à 4, si c'est le cas, on enlève le dernier élément pour ajouter ensuite le nouvel administrateur. Si ce n'est pas le cas, ajouter simplement le nouvel administrateur.

// let newAdmin1 = 'Marianne'
// let newAdmin3 = 'Lucie'
// let newAdmin2 = 'Sophie'

// if (administrators.length >= 4) {
//     administrators.pop()
// }
// administrators.push(newAdmin1)

// if (administrators.length >= 4) {
//     administrators.pop()
// }
// administrators.push(newAdmin2)

// if (administrators.length >= 4) {
//     administrators.pop()
// }
// administrators.push(newAdmin3)

// console.log(administrators)



// Ajouter utilisateur si la propriété admin est true
let newAdmin1 = {
    name: 'Marianne',
    admin: true
}

let newAdmin2 = {
    name: 'Sophie',
    admin: false
}

let newAdmin3 = {
    name: 'Lucie',
    admin: true
}

if () {
    administrators.push(newAdmin1)
}

if () {
    administrators.push(newAdmin2)
}

if () {
    administrators.push(newAdmin3)
}

console.log(administrators)
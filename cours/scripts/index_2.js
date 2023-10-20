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
const newAdmin1 = {
    name: 'Marianne',
    admin: true,
    gender: "f"
}

const newAdmin2 = {
    name: 'Sophie',
    admin: false,
    gender: "f"
}

const newAdmin3 = {
    name: 'Lucie',
    admin: true,
    gender: "f"
}

const newAdmin4 = {
    name: 'Etienne',
    admin: true,
    gender: "m"
}
// if (newAdmin1.admin) {
//     administrators.push(newAdmin1.name)
// }

// if (newAdmin2.admin) {
//     administrators.push(newAdmin2.name)
// }

// if (newAdmin3.admin) {
//     administrators.push(newAdmin3.name)
// }

addUserInArray(newAdmin1)
addUserInArray(newAdmin2)
addUserInArray(newAdmin3)

function addUserInArray(user) {
    if (user.admin) {
        administrators.push(user.name)
    }
}

// console.log(administrators)

// Créer une fonction qui prend en paramètre un objet utilisateur et qui affiche en console "Bonjour ${nom} !"

// Ex : Bonjour Lucie !

// displayName(newAdmin1)
// displayName(newAdmin2)
// displayName(newAdmin4)

function displayName(param) {
    let strResult = 'Bonjour '

    if (param.admin) {
        if (param.gender == 'f') {
            strResult += 'administratrice '
        } else if (param.gender == 'm') {
            strResult += 'administrateur '
        }
    }

    strResult += param.name + ' !'

    console.log(strResult)
}

// Ajouter une condition pour afficher Bonjour administratrice ... ! si la propriété admin est true

// Créer une fonction à 2 paramètres qui affiche Bonjour Sophie et Lucie par exemple
// buildSentence(newAdmin1, newAdmin4)

function buildSentence(user1, user2) {
    console.log(`Bonjour ${user1.name} et ${user2.name}`)
}


const town1 = {
    name: 'Bordeaux',
    population: 300000,
    superficy: 50
}

const town2 = {
    name: 'Lyon',
    population: 500000,
    superficy: 48
}

const town3 = {
    name: 'Paris',
    population: 2000000,
    superficy: 105
}
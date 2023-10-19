// Présentation des opérateurs arithmétiques

/*
    Commentaires sur plusieurs lignes
*/

/**
 * Variante de commentaires sur plusieurs lignes
 */

// LES NOMBRES

var myNumber1 = 9 + 2
var myNumber2 = 4

myNumber2 = 6

var myResult = myNumber1 * myNumber2

// console.log(myResult)


// Déclaration moderne (en ES6, javascript depuis 2015) de variables

const myNb1 = 3
let myNb2 = 4
myNb2++

// console.log(myNb2)

const res2 = myNb1 * myNb2

// console.log(res2)

// LES CHAINES DE CARACTERES (string) "" '' ``
let myName = `Je m'appelle "Paul"`
let mySpace = ' '
const age = 35;
let modifiedAge = age + 5
const lastname = `Doazan`

let myName2 = myName + mySpace + lastname
myName2 += ', ' + modifiedAge + ' ans.'

const resultStr = `${myName} et j'ai ${modifiedAge} ans.`

// console.log(resultStr)


// LES BOOLEENS
const myBoolean1 = true
const myBoolean2 = false

let myNb = 5

if (myBoolean2) {
    console.log('Je suis passé dans ma condition')
}

let myAge = 32
const legalAge = 18

const isMinor = myAge >= legalAge
// const isMinor = myAge <= legalAge

const is30yearsOld = myAge == 30

if (isMinor) {
    // console.log('Paul est mineur')
}

if (!isMinor) {
    // console.log(`Paul n'est pas mineur`)
}

if (isMinor) {
    // console.log('Paul est mineur')
} else {
    // console.log(`Paul n'est pas mineur`)
}

if (is30yearsOld) {
    // console.log('Paul a 30 ans')
} else {
    // console.log(`Paul n'a pas 30 ans`)
}

const bigNb1 = 400
const bigNb2 = 400

// écrire la condition pour afficher le plus grand nombre

// const resultComparison = bigNb1 > bigNb2

// console.log(resultComparison)

if (bigNb1 > bigNb2) {
    // console.log(bigNb1)
} else if (bigNb1 < bigNb2) {
    // console.log(bigNb2)
} else if (bigNb1 == bigNb2) {
    // console.log(bigNb1, bigNb2)
}

const firstname = "Olivier"
// const firstname2 = "Hamid"
// const firstname3 = "Pauline"

if (firstname == "Hamid") {
    // console.log('bonjour mon cher ' + firstname)
} else if (firstname == "Pauline") {
    // console.log('bonjour ma chère ' + firstname)
} else {
    // Réécrire le message loggé avec des backticks ``  
    // console.log('Bonjour ' + firstname + ', je ne connaissais pas ton prénom avant')
    // console.log(`Bonjour ${firstname}, je ne connaissais pas ton prénom avant.`)
}


// VARIABLE COMPLEXE : LES TABLEAUX (Array)
let arr1 = [
    3,
    5,
    0,
    204.5,
    'hello',
    true,
    'world'
]

let arrResult1 = `${arr1[4]} - ${arr1[6]}`

let arrResult2
// on teste le booleen du tableau
if ("truthy") {
    arrResult2 = arrResult1
} else {
    arrResult2 = arr1[1] + arr1[3]
}

// console.log(arrResult2)
arr1[4] = "bonjour"
// console.log(arr1)

// changer la valeur de 204.5 en 190 par soustraction de 14.5
arr1[3] -= 14.5
// console.log(arr1)


// VARIABLE COMPLEXE : LES OBJETS
let obj1 = {
    maPremierePropriete: 12,
    maDeuxiemePropriete: 14,
    prop3: 11,
    prop9: 'hello'
}

// console.log(obj1.prop9)

let identity = {
    firstname: 'Paul',
    lastname: 'Doazan',
    age: 35,
    town: 'Talence'
}

/** A l'aide de l'objet précédent, construire la chaîne de caractère ==>
Je m'appelle Paul Doazan, j'ai 35 ans et j'habite à Talence.
 */

let resultFromObject = `Je m'appelle ${identity.firstname} ${identity.lastname}, j'ai ${identity.age} ans et j'habite ${identity.town}.`

console.log(resultFromObject);

// Pour ceux qui ont terminé, créer un deuxième objet identity2, stocker identity et identity2 dans un tableau, et écrire la phrase précédente en utilisant le tableau. 

let identity2 = {
    firstname: 'Pierre',
    lastname: 'Durand',
    age: 35,
    town: 'Talence'
}

let arrIdentities = [identity, identity2]

arrIdentities[1].lastname
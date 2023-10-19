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
    console.log(bigNb1)
} else if (bigNb1 < bigNb2) {
    console.log(bigNb2)
} else if (bigNb1 == bigNb2) {
    console.log(bigNb1, bigNb2)
}

const firstname = "Olivier"
// const firstname2 = "Hamid"
// const firstname3 = "Pauline"

if (firstname == "Hamid") {
    console.log('bonjour mon cher ' + firstname)
} else if (firstname == "Pauline") {
    console.log('bonjour ma chère ' + firstname)
} else {
    console.log(`Bonjour ${firstname}, je ne connaissais pas ton prénom avant`);
}
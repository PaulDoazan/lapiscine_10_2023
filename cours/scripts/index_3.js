const monday = "lundi"
const tuesday = "mardi"

displayMessage(tuesday)
displayMessage(monday)
displayMessage('samedi')
displayMessage(30)

function displayMessage(jour) {
    let hello = "Salut"
    console.log(`${hello} c'est ${jour}`)
}

const person_1 = {
    name: "Pierre",
    hasCar: true,
    hasBike: true
}
const person_2 = {
    name: "Mélanie",
    hasCar: true,
    hasBike: false
}

const person_3 = {
    name: "Paul",
    hasCar: false,
    hasBike: true
}
const person_4 = {
    name: "Sophie",
    hasCar: false,
    hasBike: false
}

// Intégrer le paramètre person aux 2 fonctions pour rendre la chaîne de caractère dynamique

function canGoToUniversity() {
    console.log(`Paul peut aller à l'université`)
}

function canGoToTopOfMountain() {
    console.log(`Sophie ne peut pas aller au sommet de la montagne`)
}
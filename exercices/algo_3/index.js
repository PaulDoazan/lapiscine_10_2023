import movies from './movies.json' assert {type: 'json'}

// Pour les parcours de tableau, on utilise .forEach()

// a. Logger le premier element du tableau movies
// console.log(movies[0])

// b. Logger l'annee du 4eme element du tableau movies
// console.log(movies[3].year)

// c. Logger le titre du dernier element du tableau movies
// console.log(movies[movies.length - 1].title)

// d. Logger le titre du film qui a la meilleure note
let bestMovie = movies[0]

movies.forEach((element) => {
    if (element.rate >= bestMovie.rate) {
        bestMovie = element
    }
})

// console.log(bestMovie.title)

// e. Logger le titre du film le plus ancien
let oldestMovie = movies[0]

movies.forEach((element) => {
    if (element.year < oldestMovie.year) {
        oldestMovie = element
    }
})

// console.log(oldestMovie.title);

// exercices fondamentaux
let arr = [1, 12, 8, 2, 5]

// calcul de la somme du premier et denrier élément du tableau

// f. Logger un tableau de tous les titres de film qui ont au moins 3 acteurs
let movieTitles = []

movies.forEach((element) => {
    if (element.actors.length >= 3) {
        movieTitles.push(element.title)
    }
})

// console.log(movieTitles)

// 1. Ecrire une fonction qui prend en parametre le tableau movies et qui retourne un nouveau tableau de tous les titres de films

function getAllTitles(arr) {
    let titles = []

    arr.forEach((element) => {
        titles.push(element.title)
    })

    return titles
}

const res = getAllTitles(movies)
// console.log(res)




// fondamentaux
let arr2 = ['Salut', 'tout', 'le', 'monde']
function createSentence() {

}

// const dirs = getAllDirectors(movies)
console.log(movies.map(el => el.director))

function getAllDirectors(arr) {
    // let directors = []

    // arr.forEach((element) => {
    //     directors.push(element.director)
    // })

    // return directors


    // ------------------------------------
    // let directors = films.map((element) => {
    //     return element.title
    // })

    // return directors

    return arr.map((element) => element.director)
}

function getAllYears(arr) {

}

// A l'aide d'un .map(), logger un tableau qui aura pour valeur 30, 50, 90
const arrExamples = [3, 5, 9]
console.log(arrExamples.map(el => el * 10));

let users = [
    {
        name: 'Paul',
        role: 'user',
        hasCar: 2
    },
    {
        name: 'Rihab',
        role: 'admin',
        hasCar: "2"
    },
    {
        name: 'Laurian',
        role: 'admin',
        hasCar: 2
    },
    {
        name: 'Céline',
        role: 'client',
        hasCar: "2"
    }
]

let admins = users.filter(element => element.role === 'admin')
console.log(admins)

let numbers = [5, 9, 12, 1, 7, 15]
let multipleOfThree = numbers.filter(el => el % 3 === 0)
console.log(multipleOfThree);
// A l'aide de la méthode .filter, récupérons un nouveau tableau qui ne contient que les multiples de 3

let userWithCar = users.filter(element => element.hasCar === 2)
console.log(userWithCar)
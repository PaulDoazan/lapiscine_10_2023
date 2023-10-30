/**
 * addEventListener() // removeEventListener()
 * 
 * setTimeout(fonctionExecuteApresDelai, delai)
 */

const myTitle = document.querySelector('.my-title')

const onClick = (event) => {
    const tg = event.currentTarget
    tg.classList.add('text-changed')

    setTimeout(() => {
        tg.classList.remove('text-changed')
        tg.removeEventListener('click', onClick)
    }, 2000)
}

const afficheEnConsole = () => {
    console.log('hello world')
}

myTitle.addEventListener('click', onClick)


/**
* Exo sur les 3 boutons qui change la couleur du titre
 */

const btns = document.querySelectorAll('.btn')

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', (e) => {
//         console.log(e.currentTarget)
//     })
// }

btns.forEach((element) => {
    element.addEventListener('click', (e) => {
        myTitle.style.color = e.currentTarget.getAttribute('data-color')
        myTitle.style.backgroundColor = e.currentTarget.getAttribute('data-bg-color')

        setTimeout(() => {
            myTitle.style.color = myTitle.getAttribute('data-origin-color')
            myTitle.style.backgroundColor = myTitle.getAttribute('data-origin-bg-color')
        }, 2000)
    })
})

// Ajouter un atrtibut data-bg-color dans le .html, et l'utiliser en js pour changer le css


/**
 * NOUVELLES NOTIONS : méthodes de tableau .map() et .filter() 
 */

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
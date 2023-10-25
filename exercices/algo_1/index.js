const resultDiv = document.querySelector('.result')

const numbers = [2, 12, 23, 5, 89, 8, 3, 104]
const numbers2 = [2, 11, 23, 5, 79, 8, 3, 105]
const numbers3 = [2, 12, 23, 5, 89, 8, 1, 104]

// 1. Ecrire une fonction qui retourne la valeur minimum contenu dans un tableau passé en paramètre

const min = getMinimum(numbers)
resultDiv.textContent = min

function getMinimum(arr) {
    let res = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < res) {
            res = arr[i]
        }
    }

    return res
}

// 2. Ecrire une fonction qui retourne la valeur maximum contenu dans un tableau passé en paramètre

const numbers4 = [3, 12, 135, 18, 136, 20]

const res2 = getMaximum(numbers4)
// console.log(res2)

function getMaximum(arrParam) {
    let comparator = arrParam[0]
    for (let n = 1; n < arrParam.length; n++) {
        if (arrParam[n] > comparator) {
            comparator = arrParam[n]
        }
    }

    return comparator;
}


// 3. Ecrire une fonction qui prend en paramètre un tableau de nombre et qui retourne un nouveau tableau de nombres qui seront tous supérieurs à la moyenne des nombres du tableau en paramètres. 

const nbs = [7, 5, 3, 10] // => [7, 10]

const nbsAbove = getNumbersAboveAverage(nbs)
// console.log(nbsAbove);

function getNumbersAboveAverage(tab) {
    // 1. On calcule le total
    let total = 0

    for (let index = 0; index < tab.length; index++) {
        total += tab[index]
    }

    // 2. On calcule la moyenne (total / length)
    let avg = total / tab.length

    // 3. On filtre le tableau grace à la moyenne
    let filteredNumbers = []

    for (let index = 0; index < tab.length; index++) {
        if (tab[index] > avg) {
            filteredNumbers.push(tab[index])
        }
    }

    return filteredNumbers;
}


// Exercice des pizzas
const pizzas = [
    {
        name: 'Margherita',
        price: 11.50,
        ingredients: ['mozzarella', 'tomate', 'basilic ', "huile d'olive"],
        baseTomate: true
    },
    {
        name: 'Regina',
        price: 12,
        ingredients: ['mozzarella', 'tomate', 'origan', 'jambon', 'champignons'],
        baseTomate: true
    },
    {
        name: '4 saisons',
        price: 15,
        ingredients: ['artichaut', 'courgette', 'poivron', 'mozzarella', 'oignon rouge'],
        baseTomate: true
    },
    {
        name: 'Napolitaine',
        price: 14,
        ingredients: ['tomate', 'mozzarella', 'anchois', 'olives noires', 'origan'],
        baseTomate: true
    },
    {
        name: '4 fromages',
        price: 16,
        ingredients: ['tomate', 'mozzarella', 'emmental', 'comté', 'roquefort'],
        baseTomate: true
    },
    {
        name: 'Montagnarde',
        price: 19,
        ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'],
        baseTomate: false
    },
    {
        name: 'Chèvre-miel',
        price: 18,
        ingredients: ['mozzarella', 'chèvre', 'miel'],
        baseTomate: false
    },
    {
        name: 'Hawaïenne',
        price: 17,
        ingredients: ['mozzarella', 'tomate', 'jambon', 'ananas'],
        baseTomate: true
    }
]

const pizzas2 = [
    {
        name: '3 fromages',
        price: 10,
        ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'],
        baseTomate: false
    },
    {
        name: '4 fromages',
        price: 18,
        ingredients: ['mozzarella', 'chèvre', 'miel', 'parmesan', 'roquefort'],
        baseTomate: false
    },
]

// Ecrire une fonction qui prend en paramètre un tableau de pizzas, et qui retourne un tableau de tous les noms des pizzas

const pizzasNames = getAllNames(pizzas)
console.log(pizzasNames)

function getAllNames(arr) {
    let names = []

    for (let i = 0; i < arr.length; i++) {
        names.push(arr[i].name)
    }

    return names
}

// Ecrire une fonction qui prend en paramètre un tableau de pizzas et qui me retourne la moyenne des prix
console.log(getAvgPrice(pizzas2))

function getAvgPrice(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].price
    }

    console.log(total)

    let avg = (total / arr.length).toFixed(2)
    return avg
}

// Amélioration, la fonction renvoie un tableau des noms de pizzas dont le prix est supérieur à la moyenne
console.log(getNamesAboveAvg(pizzas))

function getNamesAboveAvg(arrPizzas) {
    let avg = getAvgPrice(arrPizzas);

    let namesAbove = []

    for (let i = 0; i < arrPizzas.length; i++) {
        if (arrPizzas[i].price > avg) {
            namesAbove.push(arrPizzas[i].name)
        }
    }

    return namesAbove;
}

// Ecrire une fonction qui prend 2 paramètres: le premier : un tableau de pizzas, le deuxième : un nom de pizza. La fonction retourne un tableau d'ingrédients de la pizza dont le nom est passé en paramètre. (getPizzaByName(pizzas, 'Margherita') ==> ['mozzarella', 'tomate', 'origan', 'jambon', 'champignons'])
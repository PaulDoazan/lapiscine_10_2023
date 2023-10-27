// Exercice des pizzas avec des forEach
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

// Ecrire une fonction qui prend en paramètre un tableau de pizzas, et qui retourne un tableau de tous les noms des pizzas, avec un forEach
const pizzasNames = getAllNames(pizzas)
console.log(pizzasNames);

function getAllNames(arr) {
    let names = []

    arr.forEach((el) => {
        names.push(el.name)
    })

    return names
}

// Idem avec la fonction getAveragePrice
console.log(getAvgPrice(pizzas));

function getAvgPrice(arr) {
    let total = 0
    // for (let i = 0; i < arr.length; i++) {
    //     total += arr[i].price
    // }

    arr.forEach((element) => {
        total += element.price
    })

    let avg = (total / arr.length).toFixed(2)
    return avg
}
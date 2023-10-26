/**
 * Explications sur les fonctions passées en paramètre d'autre fonction ( fonction callback )
 */

const nbs1 = [1, 3, 5]
const nbs2 = [1, 2, 7]

modifyNumbers(addNumbers, nbs1)
modifyNumbers(productNumbers, nbs2)

function addNumbers(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    // console.log(total)
}

function modifyNumbers(callback, arr) {
    callback(arr)
}

function productNumbers(numbers) {
    let total = 1;
    for (let i = 0; i < numbers.length; i++) {
        total *= numbers[i]
    }
    // console.log(total)
}


/**
 * Révision sur la moyenne
 */

const examples = [4, 8, 9, 12, 2]
const examples2 = [4, 8, 9, 12, 2, 3, 54]
const average = getAverage(examples2)
// console.log(average)

function getAverage(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }

    const avg = (total / arr.length).toFixed(5)
    return avg
}

const result = selectNumbersUnderAvg(examples)
// console.log(result)

function selectNumbersAboveAvg(array) {
    const moyenne = getAverage(array)
    // console.log(moyenne);

    let selectedNumbers = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] > moyenne) {
            selectedNumbers.push(array[i])
        }
    }

    return selectedNumbers
}

function selectNumbersUnderAvg(array) {
    const moyenne = getAverage(array)

    let selectedNumbers = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] < moyenne) {
            selectedNumbers.push(array[i])
        }
    }

    return selectedNumbers
}


/**
 * propriété classList
 */

const myTitle = document.querySelector('.my-title')

// à éviter
// myTitle.style.color = 'rgb(0, 0, 255)'
// myTitle.style.backgroundColor = 'rgb(255, 0, 0)'
// myTitle.style.borderRadius = '10px'
// myTitle.style.padding = '5px'

myTitle.addEventListener('click', changeText)


// let clicked = false
function changeText() {
    // if (!clicked) {
    //     clicked = true
    // } else {
    //     clicked = false
    // }
    // clicked = !clicked

    console.log(myTitle.classList)

    if (!myTitle.classList.contains('text-changed')) {
        myTitle.classList.add('text-changed')
    } else {
        myTitle.classList.remove('text-changed')
    }
}
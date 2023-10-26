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
console.log(result)

function selectNumbersAboveAvg(array) {
    const moyenne = getAverage(array)
    console.log(moyenne);

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
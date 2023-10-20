let arrExample = [3, 5, 8, 12, 2, 43, 21, 2, 3, 42, 2, 5, 12, 555, 2, 43, 21, 2, 42, 2, 5, 12, 434]

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

console.log(elementInTheMiddle)

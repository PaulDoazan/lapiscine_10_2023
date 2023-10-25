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
console.log(res2)

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

const nbs = [3, 5, 10]
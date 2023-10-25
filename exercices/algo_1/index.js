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

function getMaximum() {

}
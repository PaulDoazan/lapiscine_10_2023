const resultDiv = document.querySelector('.result')

const numbers = [2, 12, 23, 5, 89, 8, 3, 104]

// 1. Ecrire une fonction qui retourne la valeur minimum contenu dans un tableau passé en paramètre

const result1 = getMinimum(numbers)
resultDiv.textContent = result1

function getMinimum(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < result) {
            result = arr[i]
        }
    }

    return result
}

// 2. Ecrire une fonction qui retourne la valeur maximum contenu dans un tableau passé en paramètre

function getMaximum() {

}
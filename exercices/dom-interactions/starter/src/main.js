/**
 * EXO 1
 */


/**
 * EXO 2
 */

/**
 * EXO 3
 */

/**
 * EXO 4
 */

const form2 = document.querySelector('.form-2')
const input2 = document.querySelector('.input-2')
const textToDisplay2 = document.querySelector('.text-to-display-2')

form2.addEventListener('submit', onForm2Submit)

function onForm2Submit(event) {
    event.preventDefault();
    textToDisplay2.textContent = input2.value
}

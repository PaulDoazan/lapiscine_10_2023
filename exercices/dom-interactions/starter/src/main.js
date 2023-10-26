/**
 * EXO 1
 */


/**
 * EXO 2
 */

const input3 = document.querySelector('.input-3')
const textToDisplay3 = document.querySelector('.text-to-display-3')

input3.addEventListener('input', onInput3)

function onInput3() {
    textToDisplay3.textContent = input3.value
}

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

/**
 * EXO 5
 */

const inputs5 = document.querySelectorAll('.input-5')
const textToDisplay5 = document.querySelector('.text-to-display-5')

for (let i = 0; i < inputs5.length; i++) {
    inputs5[i].addEventListener('input', onInput5)
}

// A EVITER, la boucle for permet d'éviter la répétition du .addEventListener
// inputs5[0].addEventListener('input', onInput5)
// inputs5[1].addEventListener('input', onInput5)
// inputs5[2].addEventListener('input', onInput5)
// inputs5[3].addEventListener('input', onInput5)
// inputs5[4].addEventListener('input', onInput5)
// inputs5[5].addEventListener('input', onInput5)

function onInput5(e) {
    // e.target ==>  input
    textToDisplay5.textContent = e.target.value
}


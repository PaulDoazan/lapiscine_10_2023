/**
 * EXO 1
 */
const divToColor1 = document.querySelector('.div-to-color-1')
const btns1 = document.querySelectorAll('.btn-1')

btns1.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        divToColor1.style.backgroundColor = event.currentTarget.textContent
    })
})

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

/**
 * EXO 6
 */
const select6 = document.querySelector('.select-6')
const textToDisplay6 = document.querySelector('.text-to-display-6')

select6.addEventListener('change', (event) => {
    const tg = event.currentTarget
    // textToDisplay6.textContent = tg.options[tg.selectedIndex].text

    textToDisplay6.textContent = tg.value
})

/**
 * EXO 7
 */
const input7 = document.querySelector('.input-7')
const divToColor7 = document.querySelector('.div-to-color-7')

input7.addEventListener('input', (event) => {
    divToColor7.style.backgroundColor = event.currentTarget.value
})

/**
 * EXO 8
 * 
 */

const divToColor8 = document.querySelector('.div-to-color-8')
const btns8 = document.querySelectorAll('.btn-8')

btns8.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        divToColor8.style.backgroundColor = event.currentTarget.getAttribute('data-color')
    })
})


/**
 * EXO 9
 */

const checkboxes = document.querySelectorAll('.checkbox')
const textToDisplay9 = document.querySelector('.text-to-display-9')

/**
 * OPERATEUR TERNAIRE, une condition if else écrite sur une ligne, pour affecter une même variable
 */

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', (event) => {
        let value1 = checkboxes[0].checked ? checkboxes[0].value : ''
        let value2 = checkboxes[1].checked ? checkboxes[1].value : ''

        textToDisplay9.textContent = `${value1} ${value2}`


        // if (checkboxes[0].checked) {
        //     value1 = checkboxes[0].value
        // } else {
        //     value1 = ''
        // }

        // if (checkboxes[1].checked) {
        //     value2 = checkboxes[1].value
        // } else {
        //     value2 = ''
        // }


        // if (event.currentTarget.checked) {
        //     textToDisplay9.textContent = event.currentTarget.value
        // } else {
        //     textToDisplay9.textContent = ''
        // }

    })
})
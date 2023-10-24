let words = ['Salut', 'mon', 'ton', 'nom', 'est', 'Pierre']

let sentence = ''
let exceptions = []

for (let n = 0; n < words.length; n++) {
    // les deux expressions suivantes sont strictement équivalentes
    // sentence = sentence + words[n]

    // if (n != 2) {
    //     sentence += words[n] + ' '
    // }

    if (n == 2) {
        exceptions.push(words[n])
        // le mot clé "continue" permet de passer directement à l'itération suivante, le code qui suit ne sera dont pas exécuté
        continue
    }

    sentence += words[n]

    if (n == words.length - 1) {
        sentence += '.'
    } else {
        sentence += ' '
    }

}

// console.log(sentence)


// ------------------------


const myTitle = document.querySelector(".my-title")
const paragraphs = document.querySelectorAll(".my-paragraph")

myTitle.addEventListener('click', onTitleClick)

let setsOfColors = [
    {
        bgColor: 'black',
        textColor: 'white'
    },
    {
        bgColor: 'white',
        textColor: 'black'
    },
    {
        bgColor: 'yellow',
        textColor: 'purple'
    },
    {
        bgColor: 'green',
        textColor: 'red'
    }
]

let colorIndex = 0

function onTitleClick() {
    // if (myTitle.style.color == "black") {
    //     myTitle.style.backgroundColor = "black"
    //     myTitle.style.color = "white"
    // } else {
    //     myTitle.style.backgroundColor = "white"
    //     myTitle.style.color = "black"
    // }

    myTitle.style.backgroundColor = setsOfColors[colorIndex].bgColor
    myTitle.style.color = setsOfColors[colorIndex].textColor

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = setsOfColors[colorIndex].textColor
    }

    colorIndex++
    if (colorIndex == setsOfColors.length) {
        colorIndex = 0
    }
}
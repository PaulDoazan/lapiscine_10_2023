// 1ère étape : on déclare un eventListener sur le formulaire pour récupérer la valeur de l'input
import ACCESS_KEY from './config.js'

const form = document.querySelector('.unsplash-search')
const input = document.querySelector('#search')
const targetImg = document.querySelector('.target-img')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    fetchData()
})

async function fetchData() {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${input.value}&client_id=${ACCESS_KEY}`);

        if (!response.ok) {
            throw new Error('Erreur')
        }

        const data = await response.json()
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}

function displayData(data) {
    console.log(data)
    targetImg.src = data.results[0].urls.regular
    // récupérer la balise img et mettre à jour sa propriété src    
}
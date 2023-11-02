// 1ère étape : on déclare un eventListener sur le formulaire pour récupérer la valeur de l'input
import ACCESS_KEY from './config.js'

console.log()

const form = document.querySelector('.unsplash-search')
const input = document.querySelector('#search')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(input.value)

    fetchData()
})

async function fetchData() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`);

        if (!response.ok) {
            throw new Error('Erreur')
        }
        const data = await response.json()
        // displayData(data)
    } catch (error) {
        console.log('Une erreur est survenue')
    }
}
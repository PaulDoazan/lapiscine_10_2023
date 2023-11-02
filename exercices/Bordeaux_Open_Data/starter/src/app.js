const btnRefresh = document.querySelector('.btn')
const placeNames = document.querySelectorAll('.place-name')
const placeInfos = document.querySelectorAll('.place-infos')
const visitorsSlice = document.querySelectorAll('.visitors')

btnRefresh.addEventListener('click', () => {
    // 1. On change l'état du bouton

    // 2. On récupère les données
    fetchData()
})

async function fetchData() {
    try {
        const response = await fetch("https://opendata.bordeaux-metropole.fr/api/explore/v2.1/catalog/datasets/bor_frequentation_piscine_tr/records?limit=20");

        if (!response.ok) {
            throw new Error('Erreur')
        }
        const data = await response.json()
        displayData(data)
    } catch (error) {
        console.log('Une erreur est survenue')
    }
}

function displayData(data) {
    // console.log(data)
    data.results.forEach((element, i) => {
        placeNames[i].textContent = element.etablissement_etalib
        placeInfos[i].textContent = `${element.fmicourante} / ${element.fmizonmax}`

        let ratio = element.fmicourante / element.fmizonmax

        if (ratio === 0) ratio = 0.01

        visitorsSlice[i].style.transform = `scaleX(${ratio})`;
    })
}
const btnRefresh = document.querySelector('button');
const errorMsg = document.querySelector('.errorMsg');
const places = document.querySelectorAll('.place')
const visitors = document.querySelectorAll('.visitors')

const dataset = 'bor_frequentation_piscine_tr'

btnRefresh.addEventListener('click', onRefresh)

async function fetchData() {
    try {
        // const response = await fetch(`https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=${dataset}`)
        const response = await fetch(`https://opendata.bordeaux-metropole.fr/api/explore/v2.1/catalog/datasets/bor_frequentation_piscine_tr/records?limit=20`)


        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`)
        }

        const data = await response.json()
        btnChange()
        displayData(data);
    }
    catch (error) {
        btnChange()
        errorMsg.textContent = `${error}`
    }
}

function onRefresh(e) {
    btnChange('search')
    fetchData();
}

function btnChange(state) {
    if (state === 'search') {
        btnRefresh.classList.add("searching");
        btnRefresh.textContent = '...'
    } else {
        btnRefresh.classList.remove("searching");
        btnRefresh.textContent = 'Refresh'
    }
}

function displayData(data) {
    //let sortedRecords = [...data.records];
    // data.results.sort((a, b) => {
    //     let result = ((a.fmicourante / a.fmizonmax) - (b.fmicourante / b.fmizonmax)) * -1
    //     return result
    // })
    data.results.forEach((result, index) => {
        let current = 0;
        if (result.fmicourante > 0) current = result.fmicourante;

        const currentPlace = places[index];
        const name = currentPlace.children[0];
        name.textContent = `${result.etablissement_etalib} (${result.fmizonlib}) : `
        const info = currentPlace.children[1];
        info.textContent = `${current} / ${result.fmizonmax}`
        result.datemiseajour

        let ratio = (current / result.fmizonmax);

        visitors[index].style.transform = `scaleX(${ratio})`
    })
}


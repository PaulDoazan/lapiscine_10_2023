const BMIData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] }
];

// 1 On récupère la balise html et on la stocke dans une variable en js
const validationBtn = document.querySelector(".validation-btn")
const resultIMC = document.querySelector('.bmi-value')
const comment = document.querySelector('.comment')
const inputs = document.querySelectorAll('.bmi-input')

// 2 on déclare un click sur le bouton, à chaque fois qu'on clique, on exécute la fonction associéee
validationBtn.addEventListener('click', onBtnClick)

function onBtnClick() {
    const height = inputs[0].value / 100
    const weight = inputs[1].value
    // afficher dans la console l'IMC => poids en kg / taille en m ² ** 2

    if (checkError(height, weight)) {
        return
    }
    // const bmi = Math.round((weight / height ** 2) * 100) / 100
    const bmi = weight / (height * height)

    resultIMC.textContent = bmi.toFixed(2)
    comment.textContent = "..."
}

function checkError(hParameter, wParameter) {
    // Implémenter la condition pour préciser le message d'erreur en fonction de la taille ou du poids
    // vérifier les données utilisateur, pas de valeurs <= 0
    if ((!hParameter || hParameter < 0) && (!wParameter || wParameter < 0)) {
        comment.textContent = "Les valeurs saisies dans les champs poids ET taille sont incorrectes"
        return true
    } else if (!wParameter || wParameter < 0) {
        comment.textContent = "La valeur saisie dans le champ poids est incorrecte"
        return true
    } else if (!hParameter || hParameter < 0) {
        comment.textContent = "La valeur saisie dans le champ taille est incorrecte"
        return true
    }

    return false
}
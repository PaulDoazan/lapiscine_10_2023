/**
 * addEventListener() // removeEventListener()
 * 
 * setTimeout(fonctionExecuteApresDelai, delai)
 */

const myTitle = document.querySelector('.my-title')

const onClick = (event) => {
    const tg = event.currentTarget
    tg.classList.add('text-changed')

    setTimeout(() => {
        tg.classList.remove('text-changed')
        tg.removeEventListener('click', onClick)
    }, 2000)
}

const afficheEnConsole = () => {
    console.log('hello world')
}

myTitle.addEventListener('click', onClick)


/**
* Exo sur les 3 boutons qui change la couleur du titre
 */


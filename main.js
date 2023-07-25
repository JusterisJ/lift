let liftDiv = document.querySelector(`.lift`)
let buttonFloor1 = document.querySelector(`.buttonFloor1`)
let buttonFloor2 = document.querySelector(`.buttonFloor2`)
let buttonFloor3 = document.querySelector(`.buttonFloor3`)
buttonFloor2.addEventListener(`click`, e => {
    console.log(`a`)
    liftDiv.classList.remove(`onFloor1`)
    liftDiv.classList.add(`onFloor2`)
})
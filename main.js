let liftDiv = document.querySelector(`.lift`)
let buttonFloor1 = document.querySelector(`.buttonFloor1`)
let buttonFloor2 = document.querySelector(`.buttonFloor2`)
let buttonFloor3 = document.querySelector(`.buttonFloor3`)

buttonFloor3.addEventListener(`click`, e => {
    liftDiv.classList.remove(`onFloor1`, `onFloor2`)
    liftDiv.classList.add(`onFloor3`)
})
buttonFloor2.addEventListener(`click`, e => {
    liftDiv.classList.remove(`onFloor1`, `onFloor3`)
    liftDiv.classList.add(`onFloor2`)
})
buttonFloor1.addEventListener(`click`, e => {
    liftDiv.classList.remove(`onFloor2`,`onFloor3`)
    liftDiv.classList.add(`onFloor1`)
})

liftDiv.classList.add(`onFloor1`)
let liftDiv = document.querySelector(`.lift`)
let buttonFloor1 = document.querySelector(`.buttonFloor1`)
let buttonFloor2 = document.querySelector(`.buttonFloor2`)
let buttonFloor3 = document.querySelector(`.buttonFloor3`)


liftDiv.classList.add(`onFloor1`)
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


spawnPassenger()


function spawnPassenger() {
    let randomFloor = document.querySelector(`.floor${random(1,3)}`)
    let passenger = document.createElement(`div`)
    passenger.classList.add(`passenger`)
    randomFloor.appendChild(passenger)
}

function random(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
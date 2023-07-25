let liftDiv = document.querySelector(`.lift`)
let buttonFloor1 = document.querySelector(`.buttonFloor1`)
let buttonFloor2 = document.querySelector(`.buttonFloor2`)
let buttonFloor3 = document.querySelector(`.buttonFloor3`)


liftDiv.classList.add(`onFloor1`)
buttonFloor3.addEventListener(`click`, e => {
    liftDiv.classList.remove(`onFloor1`, `onFloor2`)
    liftDiv.classList.add(`onFloor3`)
    moveLift(e)
})
buttonFloor2.addEventListener(`click`, e => {
    liftDiv.classList.remove(`onFloor1`, `onFloor3`)
    liftDiv.classList.add(`onFloor2`)
    moveLift(e)
})
buttonFloor1.addEventListener(`click`, e => {
    liftDiv.classList.remove(`onFloor2`,`onFloor3`)
    liftDiv.classList.add(`onFloor1`)
    moveLift(e)
})


spawnPassenger()

function moveLift(e) {
    setTimeout(a =>{
        checkForPassengers(e)
    },1000)
}
function checkForPassengers(e) {
    console.log(`checking for passengers`)
    let currentFloor = `floor${e.target.innerText}`
    console.log(document.querySelector(`.${currentFloor}`).firstElementChild)
    if (document.querySelector(`.${currentFloor}`).firstElementChild) {
        console.log(`has passenger`)
        document.querySelector(`.passenger`).remove()
        spawnPassenger()
    }
}

function spawnPassenger() {
    let randomFloor = document.querySelector(`.floor${random(1,3)}`)
    let passenger = document.createElement(`div`)
    passenger.classList.add(`passenger`)
    randomFloor.appendChild(passenger)
}

function random(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
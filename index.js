const homeScore = document.getElementById('home-score')
const guestScore = document.getElementById('guest-score')

const startButton = document.getElementById('start-button')
const resetButton = document.getElementById('reset-button')
const timerOuput = document.getElementById('timer--output')

const homeAdd_1 = document.getElementById('home-add-1')
const homeAdd_2 = document.getElementById('home-add-2')
const homeAdd_3 = document.getElementById('home-add-3')
const guestAdd_1 = document.getElementById('guest-add-1')
const guestAdd_2 = document.getElementById('guest-add-2')
const guestAdd_3 = document.getElementById('guest-add-3')

let timer = 0
let isTimerStarted = false

homeAdd_1.addEventListener('click', addScore)
homeAdd_2.addEventListener('click', addScore)
homeAdd_3.addEventListener('click', addScore)
guestAdd_1.addEventListener('click', addScore)
guestAdd_2.addEventListener('click', addScore)
guestAdd_3.addEventListener('click', addScore)

startButton.addEventListener('click',startTimer)
resetButton.addEventListener('click',resetTimer)

function addScore(event){
    const targetScore = document.getElementById(event.target.dataset.team)
    const newScore = parseInt(targetScore.innerText)+parseInt(event.target.dataset.amount)
    targetScore.innerText = newScore
}

function startTimer(event){
    
    event.target.disabled = true
    
    let timerText = ""
    let seconds = 0
    let minutes = 0
    isTimerStarted = true
    
    const timerInterval = setInterval(()=>{
        timer += 1
        minutes = getMinutes(timer)
        seconds = timer > 59 ? (timer - (minutes * 60)) : timer
        minText = minutes < 10 ? `0${String(minutes)}` : minutes
        secText = seconds < 10 ? `0${String(seconds)}` : seconds
        //console.log(typeof secText)
        timerOuput.innerText = `${minText}:${secText}`
        if (!isTimerStarted){
            clearInterval(timerInterval)
            timer = 0
            timerOuput.innerText = "00:00"
        }
    }, 1000)
}
function resetTimer(){
    isTimerStarted = false
    timer = 0
    timerOuput.innerText = "00:00"
    startButton.disabled = false
    homeScore.innerText = 0
    guestScore.innerText = 0
}
function getMinutes(num){
    let min = 0
    if (timer > 0){
        return Math.floor(timer/60)
    }
    else return 0
}

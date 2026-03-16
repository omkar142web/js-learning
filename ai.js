const display = document.querySelector("#display")

const hInput = document.querySelector("#hours")
const mInput = document.querySelector("#minutes")
const sInput = document.querySelector("#seconds")

const startBtn = document.querySelector("#start")
const pauseBtn = document.querySelector("#pause")
const resetBtn = document.querySelector("#reset")
const modeBtn = document.querySelector("#mode")

const message = document.querySelector("#message")

let timer
let seconds = 0
let running = false
let countdownMode = true



function formatTime(total){

let h = Math.floor(total/3600)
let m = Math.floor((total%3600)/60)
let s = total%60

if(h<10) h="0"+h
if(m<10) m="0"+m
if(s<10) s="0"+s

display.innerText = `${h}:${m}:${s}`

}



function getInputTime(){

let h = Number(hInput.value)||0
let m = Number(mInput.value)||0
let s = Number(sInput.value)||0

seconds = h*3600 + m*60 + s

}



function startTimer(){

if(!running){

running = true

if(countdownMode) getInputTime()

timer = setInterval(()=>{

if(countdownMode){

seconds--

if(seconds<=0){

clearInterval(timer)
running=false
seconds=0
message.innerText="⏰ Time Finished"

}

}

else{

seconds++

}

formatTime(seconds)

},1000)

}

}



function pauseTimer(){

clearInterval(timer)
running=false

}



function resetTimer(){

clearInterval(timer)
running=false
seconds=0
formatTime(0)
message.innerText=""

}



function toggleMode(){

countdownMode = !countdownMode

if(countdownMode){
modeBtn.innerText="Mode: Countdown"
}
else{
modeBtn.innerText="Mode: Stopwatch"
}

resetTimer()

}



startBtn.addEventListener("click",startTimer)
pauseBtn.addEventListener("click",pauseTimer)
resetBtn.addEventListener("click",resetTimer)
modeBtn.addEventListener("click",toggleMode)


formatTime(0)
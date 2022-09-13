

let milee = 00
let secc = 00
let mile = document.getElementById("mile");
let sec = document.getElementById("sec");
let iniciar = document.getElementById("iniciar");
let parar = document.getElementById("parar");
let resetar = document.getElementById("resetar");
let interval;

iniciar.onclick = () => {

    clearInterval(interval)
    interval = setInterval(startTimer, 10)
}
parar.onclick = () => {

    clearInterval(interval)
}
resetar.onclick = () => {
    clearInterval(interval)
    milee = "00"
    secc = "00"
    mile.innerHTML = milee
    sec.innerHTML = secc
}

function startTimer() {
    milee++

    milee <= 9 ? mile.innerHTML = "0" + milee : false
    milee > 9 ? mile.innerHTML = milee : false

    if (milee > 99) {
        secc++
        sec.innerHTML = "0" + secc
        milee = 0
    }

    secc > 9 ? sec.innerHTML = secc : false
}

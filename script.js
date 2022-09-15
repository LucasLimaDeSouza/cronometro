let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let seg = document.getElementById('seg');
let mile = document.getElementById('mile');
let iniciar = document.getElementById('iniciar');
let parar = document.getElementById('parar');
let resetar = document.getElementById('resetar');
let hrss = 00
let minn = 00
let segg = 00
let milee = 00
let armazenado


iniciar.onclick = () => {
    clearInterval(armazenado)
    armazenado = setInterval(contar, 10)
}
parar.onclick = () => {

    clearInterval(armazenado)

}
resetar.onclick = () => {
    hrss = "00"
    minn = "00"
    segg = "00"
    milee = "00"
    hrs.innerHTML = hrss
    min.innerHTML = minn
    seg.innerHTML = segg
    mile.innerHTML = milee
}

function contar() {
    milee++

    milee <= 9 ? mile.innerHTML = "0" + milee : false
    milee > 9 ? mile.innerHTML = milee : false

    if (milee > 99) {
        segg++
        milee = "00"
        mile.innerHTML = milee
        seg.innerHTML = "0" + segg
    }
    segg > 9 ? seg.innerHTML = segg : false

    if (segg > 59) {
        minn++
        segg = "00"
        seg.innerHTML = segg
        min.innerHTML = "0" + minn
    }

    minn > 9 ? min.innerHTML = minn : false

    if (minn > 59) {
        hrss++
        minn = "00"
        min.innerHTML = minn
        hrs.innerHTML = "0" + hrss
    }

    hrss > 9 ? hrs.innerHTML = hrss : false

}
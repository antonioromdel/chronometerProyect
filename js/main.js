window.addEventListener("DOMContentLoaded", (event) => {

    let cronoMIn = document.querySelector(".crono__min")
    let cronoSec = document.querySelector(".crono__sec")
    let btnIni = document.querySelector(".layaout__btn-start")
    let btnStop = document.querySelector(".layaout__btn-stop")
    let btnReset = document.querySelector(".layaout__btn-reset")

    // Variables cuenta minutos y segundos

    let minutes = 0
    let seconds = 0
    let time = null

    // Funcion para iniciar cronometro

    let start = () => {
        if(!time){
            time = setInterval(() => {
                seconds ++
                
                if(seconds === 60){
                    minutes ++
                    seconds = 0
                }
    
                if(minutes >= 60){
                    alert("Has excedido el tiempo límite de 60 minutos")
                    clearInterval(time)
                }

                (seconds < 10) ? cronoSec.textContent = "0"+seconds : cronoSec.textContent = seconds
                (minutes < 10) ? cronoMIn.textContent = "0"+minutes : cronoMIn.textContent = minutes
            
            }, 1000)
        }
        
    }

    btnIni.addEventListener('click', () => {
        start()
    })

    btnStop.addEventListener('click', () => {
        if(time){
            clearInterval(time)
            time = null
        }
    })
    

    btnReset.addEventListener('click', () => {
        clearInterval(time)
        time = null
        minutes = 0
        seconds = 0
        cronoMIn.innerHTML = "00"
        cronoSec.innerHTML = "00"
    })

    set

})
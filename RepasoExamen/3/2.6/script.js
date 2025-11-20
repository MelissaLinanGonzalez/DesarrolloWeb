let contador = 0
let crono = document.getElementById("crono")
let intervalo

function iniciar(){
    intervalo = setInterval(contar, 1000)
    
}

function contar(){
    contador++
    crono.innerHTML = `${contador} s`
}

function parar(){
    clearInterval(intervalo)
}

function resetear(){
    clearInterval(intervalo)
    contador = 0;
    crono.innerHTML = `${contador} s`
}
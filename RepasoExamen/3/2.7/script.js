let contador = 0
let crono = document.getElementById("crono")
let intervalo
let datos = document.getElementById("datos")

function iniciar(){
    intervalo = setInterval(contar, 1000)
    
}

function contar(){
    contador++
    crono.innerHTML = `${contador} s`
}

function parar(){
    clearInterval(intervalo)
    datos.innerHTML += `${contador} s <br>`
}

function resetear(){
    clearInterval(intervalo)
    contador = 0;
    crono.innerHTML = `${contador} s`
    datos.innerHTML = ""
}
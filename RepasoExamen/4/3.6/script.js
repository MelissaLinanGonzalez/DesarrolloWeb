function Cliente(nombre, saldo){
    this.nombre = nombre
    this.saldo = saldo

    this.consultar = function(){
        return `Saldo ${this.saldo}`
    }

    this.ingresar = function(cuantia){
        this.saldo += cuantia
        return `Se ha ingresado ${cuantia} €; Total: ${this.saldo}`
    }

    this.retirar = function(cuantia){
        if(cuantia <= this.saldo){
            this.saldo -= cuantia
            return `Se ha retirado ${cuantia} €; Total: ${this.saldo}`
        } else{
            alert("No puedes retirar una cuantía superior al saldo actual")
        }
    }
}

let cliente = new Cliente("Amparo", 1500)

let resultado = document.getElementById("resultado")

function ingresarB(){
    let cantidad = parseFloat(document.getElementById("cantidad").value)
    resultado.innerHTML = cliente.ingresar(cantidad)
}

function retirarB(){
    let cantidad = parseFloat(document.getElementById("cantidad").value)
    resultado.innerHTML = cliente.retirar(cantidad)
    cantidad.innerHTML = ""
}

function consultarB(){
    resultado.innerHTML = cliente.consultar()
}
class Autobus{
    constructor(capacidad, conductor){
        this.capacidad = capacidad
        this.conductor = conductor
        this.pasajeros = 0
    }

    subir(cantidad){
        if((this.pasajeros + cantidad) <= this.capacidad){
            this.pasajeros += cantidad
            return `Se han subido ${cantidad} pasajeros <br> Total pasajeros: ${this.pasajeros}`
        } else{
            alert(`No se pueden subir tantos pasajeros, hay ${this.pasajeros} y la capacidad total es de ${this.capacidad} pasjeros`)
        }
    }

    bajar(cantidad){
        if(cantidad <= this.pasajeros){
            this.pasajeros -= cantidad
            return `Se han bajado ${cantidad} pasajeros. Quedan ${this.pasajeros} pasajeros`
        } else{
            alert(`No se pueden bajar más pasajeros de los que hay: ${this.pasajeros}`)
        }
    }
}
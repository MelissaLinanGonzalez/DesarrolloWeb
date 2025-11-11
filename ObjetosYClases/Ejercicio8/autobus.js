class Autobus{
    constructor(capacidad, conductor) {
        this.capacidad = capacidad;
        this.conductor = conductor;
        this.pasajeros = 0;
    }

    subirPasajeros(cantidad){
        if ((cantidad + this.pasajeros) <= this.capacidad){
            this.pasajeros += cantidad
            return `Se han subido ${cantidad} pasajeros. Total pasajeros: ${this.pasajeros}`;
        } else {
            return `No se pueden subir tantos pasajeros ya que supera la capacidad máxima: ${this.capacidad}`;
        }
    }

    bajarPasajeros(cantidad){
        if (cantidad > this.pasajeros){
            return `No se pueden bajar más pasajeros de los que hay en total. Total pasajeros: ${this.pasajeros}`;
        }
        this.pasajeros -= cantidad;
        return `Se han bajado ${cantidad} pasajeros. Total pasajeros: ${this.pasajeros}`;
    }
}
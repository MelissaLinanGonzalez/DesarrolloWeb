class Alumno{
    constructor(nombre, calificaciones){
        this.nombre = nombre
        this.calificaciones = calificaciones
    }

    notaMedia(){
        let suma = 0
        let total = 0
        for(let asignatura in this.calificaciones){
            suma += this.calificaciones[asignatura]
            total++
        }
        return suma / total
    }

    mostrarCalificaciones(){
        let salida = ""
        for(let asignatura in this.calificaciones){
            salida += `${asignatura}: ${this.calificaciones[asignatura]} <br>`
        }
        return salida
    }
}
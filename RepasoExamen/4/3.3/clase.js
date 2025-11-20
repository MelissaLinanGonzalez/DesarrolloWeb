class Clase{
    constructor(nombre, alumnos){
        this.nombre = nombre
        this.alumnos = alumnos
    }

    mostrarAlumnos(){
        let salida = ""
        for(let alumno in this.alumnos){
            salida += `Alumno ${alumno}: ${this.alumnos[alumno].nombre} <br>`
        }
        return salida
    }
}
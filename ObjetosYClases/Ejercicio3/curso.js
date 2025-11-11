class Curso{
    constructor(nombreCurso, aula) {
        this.nombreCurso = nombreCurso;
        this.aula = aula;
        this.alumnos = [];
    }

    agregarAlumno(alumno){
        this.alumnos.push(alumno);
    }

    listarAlumnos(){
        if (this.alumnos.length === 0){
            return "No hay alumnos para este curso";
        }
        let salida = `Curso: ${this.nombreCurso} - Aula: ${this.aula} <br>`;
        for (let alumno of this.alumnos) {
            salida += `${alumno.nombre}<br>`;
            for (let asignatura in alumno.calificaciones){
                salida += `${asignatura}: ${alumno.calificaciones[asignatura]} <br>`;
            }
            salida += `<br>`;
        }
        return salida;
    }
}
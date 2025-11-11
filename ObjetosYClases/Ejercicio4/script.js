const curso = new Curso("2º DAM", "B123");

const calificaciones1 = {
    DIN: 8,
    AaD: 9,
    Opt: 8.75,
    IPE: 8.5,
    Ingles: 9.5
}

const calificaciones2 = {
    DIN: 7,
    AaD: 8,
    Opt: 7.75,
    IPE: 7.5,
    Ingles: 8.5
}

const calificaciones3 = {
    DIN: 6,
    AaD: 7,
    Opt: 6.75,
    IPE: 6.5,
    Ingles: 7.5
}

let a1 = new Alumno("Melissa", calificaciones1);
let a2 = new Alumno("Raúl", calificaciones2);
let a3 = new Alumno("Ángela", calificaciones3);

curso.agregarAlumno(a1);
curso.agregarAlumno(a2);
curso.agregarAlumno(a3);

function mostrarCurso(){
    let cursoDiv = document.getElementById("curso");
    let contenido = curso.listarAlumnos();
    cursoDiv.innerHTML = contenido;
}

function buscarAlumnoNombre(){
    let alumnoDiv = document.getElementById("alumno");
    let nombre = document.getElementById("alumnoBuscado").value;
    let contenido = "";
    let encontrado = false;
    if (nombre === ""){
        contenido += "Introduzca el alumno";
        alumnoDiv.innerHTML = contenido
        return;
    }
    for (let alumno of curso.alumnos){
        if (alumno.nombre.toLowerCase() === nombre.toLowerCase()){
            contenido += `<strong>Nombre:</strong> ${alumno.nombre} <br>`;
            for (let asignatura in alumno.calificaciones){
                contenido += `${asignatura}: ${alumno.calificaciones[asignatura]}<br>`;
            }
            encontrado = true;
            break;
        }
    }
    if (!encontrado){
        contenido += `El alumno ${nombre} no se encuentra en el curso.`;
    }

    alumnoDiv.innerHTML = contenido;
}
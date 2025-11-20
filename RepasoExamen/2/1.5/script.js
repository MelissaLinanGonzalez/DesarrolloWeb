function crearDivs(){
    let contenedor = document.createElement("div")
    document.body.appendChild(contenedor)
    for(let i = 0; i < 255; i++){
        let divC = document.createElement("div")
        divC.style.width = "50px"
        divC.style.height = "50px"
        divC.style.display = "inline-block"
        divC.style.border = "2px solid black"
        divC.style.backgroundColor = `rgb(${i}, ${i}, ${i})`
        contenedor.appendChild(divC)
    }
}
function crearDivs(){
    const contenedor = document.createElement('div');
    contenedor.id = 'grid';
    document.body.appendChild(contenedor);

    for (let i = 0; i < 255; i++) {
        const div = document.createElement('div');
        div.className = "color-box";

        // Color visible
        div.style.backgroundColor = `rgb(${i}, ${i}, ${i})`;

        contenedor.appendChild(div);
    }
}
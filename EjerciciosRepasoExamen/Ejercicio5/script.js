let marcasCoches = []
let contenedor = document.getElementById('arrayMarcas')
contenedor.innerHTML = `Marcas: ${marcasCoches};`
function agregar(){
    let marca = document.getElementById('entradaDatos').value;
    if (marcasCoches.includes(marca)){
        alert(`La marca ${marca} ya existe`)
        document.getElementById('entradaDatos').value = "";
    } else {
        marcasCoches.push(marca);
        contenedor.innerHTML = `Marcas actualizadas: ${marcasCoches}`;
        document.getElementById('entradaDatos').value = "";
    }
}

function eliminar(){
    let marca = document.getElementById('entradaDatos').value;
    if (marcasCoches.includes(marca)){
        let indice = marcasCoches.indexOf(marca);
        marcasCoches.splice(indice, 1);
        contenedor.innerHTML = `Marcas actualizadas: ${marcasCoches}`;
    } else {
        alert(`La marca ${marca} no existe`);
    }
}
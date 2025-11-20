function Objeto(precio, descuento){
    this.precio = precio
    this.descuento = descuento
    this.aplicarDescuento = function(){
        return (this.precio) - this.precio * (this.descuento / 100)
    }
}

function calcularDescuento(){
    let precio = parseFloat(document.getElementById("precio").value)
    let descuento = parseFloat(document.getElementById("descuento").value)

    let objeto = new Objeto(precio, descuento)
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `Precio con descuento: ${objeto.aplicarDescuento()}`
}
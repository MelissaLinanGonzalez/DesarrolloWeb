function Producto(precio, descuento){
    this.precio = precio;
    this.descuento = descuento;
    this.calcularDescuento = function(){
        let desc = this.descuento / 100;
        let montoDesc = this.precio * desc;
        let total = this.precio - montoDesc;
        return total;
    }
}

function calcularDescuento(){
    let precio = parseFloat(document.getElementById("precio").value);
    let descuento = parseInt(document.getElementById("descuento").value);
    let resultado = document.getElementById("contenido");
    let contenido = "";

    let producto = new Producto(precio, descuento);
    contenido += `Precio del producto sin descuento: ${precio}, descuento a aplicar: ${descuento} <br> Precio total con descuento: ${producto.calcularDescuento()};`
    resultado.innerHTML = contenido;
}
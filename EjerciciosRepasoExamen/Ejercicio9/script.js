let p1 = new Producto("manzana");
let p2 = new Producto("platano");
let p3 = new Producto("tomate");
let p4 = new Producto("pera");
let p5 = new Producto("zanahoria");
let p6 = new Producto("melocoton");
let p7 = new Producto("limon");
let p8 = new Producto("mango");


let productos1 = [p1, p2, p3, p4];
let productos2 = [p5, p6, p7, p8];
let productos3 = [p2, p4, p6, p8];
let unidades1 = [1, 3, 5, 6];
let unidades2 = [4, 5, 1, 7];
let unidades3 = [9, 2, 6, 10];

let compra1 = new Compra(productos1,"10-12-2025", unidades1);
let compra2 = new Compra(productos2,"20-10-2026", unidades2);
let compra3 = new Compra(productos3,"16-08-2026", unidades3);

let compras = [compra1, compra2, compra3];

function mostrarElementos(){
    let elementos = document.getElementById("elementos");
    elementos.innerHTML = `Hay ${compras.length} compras`;
}

function buscarCompra(){
    let indice = parseInt(document.getElementById("elemento").value);
    indice -= 1;
    let contenido = document.getElementById("elementosBuscado");
    let compra = compras[indice];

    let resultado = "";
    for (let i = 0; i < compra.productos.length; i++){
        resultado += `Productos: ${compra.productos[i].nombre} <br> Unidades: ${compra.unidades[i]} <br>`
    }

    resultado += `Fecha de compra: ${compra.fecha}`;

    contenido.innerHTML = resultado;
}

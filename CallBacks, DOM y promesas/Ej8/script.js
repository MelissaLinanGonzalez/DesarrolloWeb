// Crea una clase u objeto producto, después crea un aray de productos, crea una función que
// haciendo uso de las promesas te devuelva el valor del producto, o por el contrario, si el 
// producto no está, que te devuelva un error o un aviso.

class Producto{
    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    detalle(){
        return `Nombre producto: ${this._nombre}, precio: ${this._precio}€`;
    }
}   

let producto1 = new Producto("Ratón", 25);
let producto2 = new Producto("Teclado", 55);
let producto3 = new Producto("Monitor", 150);
let producto4 = new Producto("Ordenador", 2500);
let producto5 = new Producto("Altavoces", 70);

let productos = [producto1, producto2, producto3, producto4, producto5];

let nombreProducto = "Altavoces";


function buscarProducto(nombreProducto){
    let promesa = new Promise( (resolver, rechazar) =>{
        let encontrado = false;

        for(let p of productos){
            if(p.nombre === nombreProducto){
                resolver(`Producto encontrado! ${p.detalle()}`);
                encontrado = true;
                break;
            }
        }

        if(!encontrado){
            rechazar(`Producto con nombre ${nombreProducto} NO encontrado`);
        }
    });

    return promesa;
}

// IMPORTANTE, aunque esté usando la función, devuelvo una promesa, por lo que hay que poner
// then y catch
buscarProducto(nombreProducto).then((mensaje) =>{
    console.log(mensaje);
}).catch((error) => {
    console.log(error);
})
function Cliente(nombre, saldo){
    this.nombre = nombre;
    let saldoInicial = saldo;

    this.ingresar = function (cantidad){
        if (cantidad > 0){
            saldoInicial += cantidad;
            return `Se ha ingresado la cantidad ${cantidad}. Saldo actual ${saldoInicial}`;
        } else {
            return "Ingrese una cantidad válida";
        }
    }

    this.retirar = function (cantidad){
        if (cantidad > 0){
            if (cantidad <= saldoInicial){
                saldoInicial -= cantidad;
                return `Se ha retirado la candidad ${cantidad}. Saldo actual ${saldoInicial}`;
            } else {
                return `No se puede retirar la cantidad ${cantidad}, ya que supera el saldo disponible`
            }
        } else {
            return "Ingrese una cantidad válida";
        }
    }

    this.consultar = function (){
        return `Saldo de la cuenta: ${nombre}: ${saldoInicial}`;
    }

}
let cliente1;

function guardarCliente(){
    let nombre = document.getElementById("nombre").value;
    let saldo = parseFloat(document.getElementById("saldo").value);
    cliente1 = new Cliente(nombre, saldo);
    document.getElementById("nombre").value = "";
    document.getElementById("saldo").value = "";
}

function realizarIngreso() {
    if (!cliente1) {
        alert("Primero cree un cliente");
        return;
    }
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = cliente1.ingresar(cantidad);
    document.getElementById("cantidad").value = ""
}

function realizarRetirada() {
    if (!cliente1) {
        alert("Primero cree un cliente");
        return;
    }
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = cliente1.retirar(cantidad);
    document.getElementById("cantidad").value = ""
}

function consultarSaldo() {
    if (!cliente1) {
        alert("Primero cree un cliente");
        return;
    }
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = cliente1.consultar();
    document.getElementById("cantidad").value = ""
}
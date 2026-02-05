// Utilizando promesas, crea una función que al inicio muestre por salida (html, terminal...)
// un  mensaje de inicio de la función, después dentro de la promesa que muestre otro
// mensaje "Estoy dentro de la promesa" y 3 segundos después otro mensaje
// "Salí de la promesa"- No puedes usar async ni away.

function realizarPromesa(){
    let promesa = new Promise((resolver) => {
    console.log("Inicio de la promesa");
    setTimeout(() => resolver("Salí de la promesa"), 3000);
    console.log("Estoy dentro de la promesa");
});

promesa.then(valor => console.log(valor));
}

realizarPromesa();
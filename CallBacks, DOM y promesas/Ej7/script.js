// Crea una promesa en la que introduzcas tu nombre, y 2 segundos después te salido por una salida
// (HTML, consola...)(puedes usar la opción que prefieras).

let nombre = "Melissa";

let promesa = new Promise((resolver) => {
    setTimeout( () => resolver(`Hola ${nombre}!`), 2000);
});

promesa.then(valor => console.log(valor));
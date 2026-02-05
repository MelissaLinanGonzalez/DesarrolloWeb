// Crea una función que encadene dos o más promesas seguidas.

function despertarse(){
    let p1 = new Promise(( resolver) =>{
        setTimeout( () => {
            console.log("1. Me acabo de despertar");
            resolver();
        }, 1000);
    });
    return p1;
}

function ducharse(){
    let p2 = new Promise(( resolver) =>{
        setTimeout( () => {
            console.log("2. Me estoy duchando");
            resolver();
        }, 1000);
    });
    return p2;
}

function desayunar(){
    let p3 = new Promise(( resolver) =>{
        setTimeout( () => {
            console.log("3. Estoy desayunando");
            resolver();
        }, 1000);
    });
    return p3;
}

despertarse().then(() => {
    return ducharse();
}).then(() => {
    return desayunar();
}).then(() => {
    console.log("Promesas finalizadas!");
});
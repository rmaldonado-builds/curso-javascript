// var *** al crear la variable y ejecutar el código se eleva al inicio del fichero

console.log(helloWorld); // sin existir la variable, devuelve 'undefined'

var helloWorld = "¡Hola, JavaScript con var!";
console.log(helloWorld);

helloWorld = "¡Hola de nuevo, JavaScript con var, modificada la variable!";
console.log(helloWorld);

// let *** al crear la variable no se eleva al inicio del fichero

let helloWorld2 = "¡Hola, JavaScript2 con let!";
console.log(helloWorld2);

helloWorld2 = "¡Hola de nuevo, JavaScript2 con let, modificada la variable!";
console.log(helloWorld2);
    
// const *** al crear la variable no permite reasignación

const helloWorld3 = "¡Hola, JavaScript3 con const!";
console.log(helloWorld3);

// helloWorld3 = "¡Hola, JavaScript3 con const!"; *** no permite reasignación, lanzará un error


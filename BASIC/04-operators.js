// operadores

//  Operadores aritméticos
let a = 5
let b = 10

console.log(a + b) // suma
console.log(a - b) // resta
console.log(a * b) // multiplicación
console.log(a / b) // división
console.log(a % b) // módulo - es decir, entrega lo que sobra de la división, 
                    // sirve para saber si es divisible o no entre ese número
console.log(a ** 2) // exponente

a++ // incremento en 1 y solo se puede una vez con ++
console.log(a);

b-- // decremento en 1 y solo se puede una vez con --
console.log(b);

console.log("-------------------");

// Operadores de asignación
let myvariable = 4
console.log(myvariable);
myvariable += 2 
console.log(myvariable); // equivalente a myvariable = myvariable + 2

myvariable -= 1
console.log(myvariable); // equivalente a myvariable = myvariable - 1
console.log("-------------------");

myvariable += 2
console.log(myvariable);
myvariable -= 2
console.log(myvariable);
myvariable *= 2
console.log(myvariable);
myvariable /= 2
console.log(myvariable);
myvariable %= 2
console.log(myvariable);
myvariable **= 2
console.log(myvariable);

console.log("-------------------");

// Operadores de comparación
console.log(a)
console.log(b)
console.log(a < b)  // menor que
console.log(a > b)  // mayor que
console.log(a <= b) // menor o igual que
console.log(a >= b) // mayor o igual que
console.log(10 >= 10) // mayor o igual que
console.log(a == b) // igual que (solo compara el valor)
console.log(a == a) // igual que (solo compara el valor)
console.log(a === a) // estrictamente igual que (compara valor y tipo de dato)
console.log(a == "6") // igual que (solo compara el valor) * respuesta verdadero
console.log(a === "6") // estrictamente igual que (compara valor y tipo de dato) * respuesta falso
console.log(a != "6") // diferente que (solo compara el valor)* respuesta verdadero
console.log(a !== "6") // estrictamente diferente que (compara valor y tipo de dato)* respuesta verdadero
console.log(0 === false) // estrictamente igual que (compara valor y tipo de dato) * respuesta falso
console.log(0 == false) // igual que (solo compara el valor) * respuesta verdadero
console.log(1 === true) // estrictamente igual que (compara valor y tipo de dato) * respuesta falso
console.log(1 == true) // igual que (solo compara el valor) * respuesta verdadero
console.log(2 == true) // igual que (solo compara el valor) * respuesta falso
console.log(2 == false) // igual que (solo compara el valor) * respuesta falso
console.log(0 == "") // es verdadero
console.log(0 == " ") // es verdadero
console.log(0 === "") // es falso

console.log("-------------------");

// operadores logicos

console.log(5 < 10 && 10 > 15) // esto es falso && es el operador lógico and
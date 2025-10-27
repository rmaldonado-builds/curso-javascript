 // 1. Crea una variable para cada operación aritmética
let a = 10 + 5; // suma
let b = 10 - 5; // resta
let c = 10 * 5; // multiplicación
let d = 10 / 5; // división
let e = 10 % 3; // módulo - recorda que es el resto de la división
let f = 2 ** 3; // exponente

console.log(a, b, c, d, e, f)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let g = 10
console.log(g)

g += 10 // suma 10 resultado 20
console.log(g)

g -= 5 // resta 5 resultado 15
console.log(g)

g *= 2 // multiplica por 2 resultado 30
console.log(g)

g /= 3 // divide por 3 resultado 10
console.log(g)

g %= 4 // módulo 4 resultado 2 porque 10 dividido 4 es 2 y sobra 2
console.log(g)

g **= 3 // exponente 3 resultado 8 porque 2 al cubo es 8
console.log(g)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(8 > 5)  // mayor que
console.log(5 < 10) // menor que
console.log(7 >= 7) // mayor o igual que
console.log(4 <= 6) // menor o igual que
console.log(3 == "3") // igual que (solo compara el valor)
console.log(3 !== "3") // es verdadero porque al agregar ! compara valor y tipo de dato
console.log(3 != "5") // es verdadero porque 3 no es igual a 5

let ejemploA = 15
console.log(ejemploA === 15) // estrictamente igual que (compara valor y tipo de dato)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(8 < 5)  // menor que
console.log(5 > 10) // mayor que
console.log(7 <= 5) // menor o igual que
console.log(4 >= 6) // mayor o igual que
console.log(3 == "4") // igual no es igual que 4 (solo compara el valor)
console.log(3 != "3") // al poner ! es falso porque 3 es igual a "3"


// 5. Utiliza el operador lógico and

console.log( 88 < 99 && (66 + 10) == 76 ) // es verdadero por ambas condiciones son verdaderas
console.log( 33 > 22 && (5 * 5) == 30 ) // es falso porque la segunda condición es falsa

// 6. Utiliza el operador lógico or

console.log( 44 < 33 || 18 == 18 ) // es verdadero porque la segunda condición es verdadera
console.log( 11 > 22 || 7 != 7 ) // es falso porque ambas condiciones son falsas

// 7. Combina ambos operadores lógicos

console.log( (5 < 10 && (8 * 2) == 10) || (3 < 1) ) // resultado falso, porque todo es falso
console.log( (4 * 4) == 16 && 20 > 10 || 6 == 7 ) // resultado verdadero, porque la segunda condición es verdadera

// 8. Añade alguna negación

console.log( (5 + 3)==8 && !(10 + 5 == 20) ) // es verdadero porque la negación convierte la segunda condición en verdadera
console.log( !((5 + 3)==8) && !(10 + 5 == 20) ) // es falso porque la negación convierte la primera condición en falsa

// 9. Utiliza el operador ternario

let edad = 19
const mensaje = edad >= 18 ? "Es mayor de edad" : "No es mayor de edad"
console.log(mensaje)

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log((((9 + 9) == 18) && ((5 * 5) == 20)) || (10/2 == 5) ) 
// es verdadero la primera es falso porque 5*5 es 25 no 20, pero la segunda es verdadera.


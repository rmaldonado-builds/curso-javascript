// Tipos de datos primitivos en JavaScript

// String ( Cadena de texto)
let personname = "Ronald Maldonado"
let alias = 'r-maldonado'
let email = `ronaldmartinmaldonado@gmail.com`

// Números
let age = 40
let height = 1.71

// Boolean (Booleano)
let isteacher = false
let isstudent = true

// Undefined (Indefinido)
let undefinedValue
console.log(undefinedValue); // Devuelve 'undefined'

// Null (Nulo)
let nullValue = null
console.log(nullValue); // Devuelve 'null'

// Symbol (Símbolo)- valor único e inmutable
let symbol = Symbol("mysimbol")

// BigInt (Gran entero)
let myBigInt = BigInt(955456132132120154154515211212121212157)
let myBigInt2 = 98564543153513153135151531531531523n 

// Mostrar los tipos de datos
console.log(typeof personname); // string
console.log(typeof alias); // string
console.log(typeof email); // string

console.log(typeof age); // number
console.log(typeof height); // number

console.log(typeof isteacher); // boolean
console.log(typeof isstudent); // boolean

console.log(typeof undefinedValue); // undefined

console.log(typeof nullValue); // object

console.log(typeof symbol); // symbol

console.log(typeof myBigInt); // bigint

console.log(typeof myBigInt2); // bigint
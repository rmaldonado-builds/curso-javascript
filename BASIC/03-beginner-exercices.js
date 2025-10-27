// Ejercicios: primeros pasos

// 1. Escribe un comentario en una línea
// Este es un comentario en una linea

// 2. Escribe un comentario en varias líneas
/* este es un comentario 
en varias lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let variablestring = "Esto es una cadena de texto"
let variablenumber = 85
let variableboolean = true
let variableundefined = undefined
let variablenull = null
let variablesymbol = Symbol("valor unico")
let variableBigInt = 123456789012345678901234567890n
let variableBigInt2 = BigInt("12345678912345678901234567890")

// 4. Imprime por consola el valor de todas las variables
console.log(variablestring);
console.log(variablenumber);
console.log(variableboolean);
console.log(variableundefined);
console.log(variablenull);
console.log(variablesymbol);
console.log(variableBigInt);
console.log(variableBigInt2);
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof variablestring);
console.log(typeof variablenumber);
console.log(typeof variableboolean);
console.log(typeof variableundefined);
console.log(typeof variablenull);
console.log(typeof variablesymbol);
console.log(typeof variableBigInt);
console.log(typeof variableBigInt2);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
variablestring = "cambié la variable"
variablenumber = 14
variableboolean = false
variableundefined = undefined
variablenull = null
variablesymbol = Symbol("recordar que este es un valor unico")
variableBigInt = 987654321098765432109876543210n
variableBigInt2 = BigInt("98765432109876543210987654321")

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
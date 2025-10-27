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
console.log("-------------------");

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof variablestring);
console.log(typeof variablenumber);
console.log(typeof variableboolean);
console.log(typeof variableundefined);
console.log(typeof variablenull);
console.log(typeof variablesymbol);
console.log(typeof variableBigInt);
console.log(typeof variableBigInt2);
console.log("-------------------");

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
variablestring = "cambié la variable"
variablenumber = 14.05
variableboolean = false
variableundefined = undefined
variablenull = null
variablesymbol = Symbol("recordar que este es un valor unico")
variableBigInt = 987654321098765432109876543210n
variableBigInt2 = BigInt("98765432109876543210987654321")

console.log(variablestring);
console.log(variablenumber);
console.log(variableboolean);
console.log(variableundefined);
console.log(variablenull);
console.log(variablesymbol);
console.log(variableBigInt);
console.log(variableBigInt2);
console.log("-------------------");

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
variablestring = 1234
variablenumber = "Cambié el tipo"
variableboolean = undefined
variableundefined = null
variablenull = true
variablesymbol = 123456789012345678901234567890n
variableBigInt = Symbol("es otro simbolo")
variableBigInt2 = false

console.log(typeof variablestring);
console.log(typeof variablenumber);
console.log(typeof variableboolean);
console.log(typeof variableundefined);
console.log(typeof variablenull);
console.log(typeof variablesymbol);
console.log(typeof variableBigInt);
console.log(typeof variableBigInt2);
console.log("-------------------");

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const variableConstanteStrint = "Esta variable es una cadena de texto usando const"
const variableConstanteNumber = 2025
const variableConstanteBoolean = false
const variableConstanteUndefined = undefined
const variableConstanteNull = null
const variableConstanteSymbol = Symbol("constante que es un valor unico")
const variableConstanteBigInt = 11223344556677889900n
const variableConstanteBigInt2 = BigInt("99887766554433221100")

console.log(variableConstanteStrint);
console.log(variableConstanteNumber);
console.log(variableConstanteBoolean);
console.log(variableConstanteUndefined);
console.log(variableConstanteNull);
console.log(variableConstanteSymbol);
console.log(variableConstanteBigInt);
console.log(variableConstanteBigInt2);
console.log("-------------------");

// 9. A continuación, modifica los valores de las constantes
//variableConstanteStrint = "no se puede cmbiar el valor de una constante const"


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// Las líneas que intentan cambiar el valor de una constante "const" producen error


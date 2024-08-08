/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea
// Esto es un comentario de una linea


// 2. Escribe un comentario en varias líneas
// Esto es un comentario
// de varias lineas
/*  
Esto tambien es un
comentario de varias lineas
*/


// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let nombre = "Jairo"
const edad = 41 
var estatura = 1.64
let bigInt = BigInt(101010010101010100699584005493846262)
let esEstudiante = true
let esNull = null
let indefinida 
let symbol = Symbol("unico simbolo")

// 4. Imprime por consola el valor de todas las variables
console.log(nombre)
console.log(edad)
console.log(estatura)
console.log(bigInt)
console.log(esEstudiante)
console.log(esNull)
console.log(indefinida)
console.log(symbol)


// 5. Imprime por consola el tipo de todas las variables
console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof estatura)
console.log(typeof bigInt)
console.log(typeof esEstudiante)
console.log(typeof esNull)
console.log(typeof indefinida)
console.log(typeof symbol)


// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
nombre = "Jairo Alberto"
//edad = 43  Este tipo de variable no se puede modificar, por que conserva el valor inicial.
estatura = 1.68
bigInt = BigInt(58690365513356890659372662233)
esEstudiante = false
esNull = null
indefinida 
symbol = Symbol("segundo simbolo")

console.log(nombre)
console.log(edad)
console.log(estatura)
console.log(bigInt)
console.log(esEstudiante)
console.log(esNull)
console.log(indefinida)
console.log(symbol)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
nombre = false
//edad = 43  Este tipo de variable no se puede modificar, por que conserva el valor inicial.
estatura = "1.68"
//bigInt = BigInt("este es un entero mas grande") BigInt solo acepta numeros
esEstudiante = "si"
esNull = 3
indefinida = "otro string"
symbol = Symbol(45)

console.log(nombre)
console.log(edad)
console.log(estatura)
console.log(bigInt)
console.log(esEstudiante)
console.log(esNull)
console.log(indefinida)
console.log(symbol)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const nombre2 = "Jairo"
const edad2 = 41 
const estatura2 = 1.64
const bigInt2 = BigInt(101010010101010100699584005493846262)
const esEstudiante2 = true
const esNull2 = null
const symbol2 = Symbol("unico simbolo")
const eMail = "jairo20055@hotmil.com"


// 9. A continuación, modifica los valores de las constantes
/*No permite hacer cambios a ninguna
variable por que todas las definimos 
como constantes*/
// nombre2 = "Alberto"
// edad2 = 45 
// estatura2 = 1.7
// bigInt2 = BigInt(3838292838292)
// esEstudiante2 = false
// esNull2 = 48474
// symbol2 = Symbol("otro simbolo")
// eMail = "jairousuay@gmail.com"

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser
// nombre2 = "Alberto"
// edad2 = 45 
// estatura2 = 1.7
// bigInt2 = BigInt(3838292838292)
// esEstudiante2 = false
// esNull2 = 48474
// symbol2 = Symbol("otro simbolo")
// eMail = "jairousuay@gmail.com"
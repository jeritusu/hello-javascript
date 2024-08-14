/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto
let miNombre = "Jairo"
let miApellido = "Usuay"

console.log(miNombre + " " + miApellido)


// 2. Muestra la longitud de una cadena de texto
console.log(miNombre.length)

// 3. Muestra el primer y último carácter de un string
console.log(miApellido[0])
console.log(miApellido[4])


// 4. Convierte a mayúsculas y minúsculas un string
console.log(miNombre.toUpperCase())
console.log(miNombre.toLowerCase())


// 5. Crea una cadena de texto en varias líneas
let textoLargo = "Esta es una cadena \nde texto en varias \nlineas"
console.log(textoLargo)

// 6. Interpola el valor de una variable en un string
console.log(`Mi nombre es ${miNombre} y mi apellido es ${miApellido}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(textoLargo.replace(/ /g, "-")) // Reemplazo


// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(textoLargo.includes("texto"))

// 9. Comprueba si dos strings son iguales
let string1 = "Hola"
let string2 = "Hola"

console.log(string1 == string2)


// 10. Comprueba si dos strings tienen la misma longitud
console.log(string1.length == string2.length)
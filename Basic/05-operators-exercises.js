/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética
let sum = 5+5
let res = 5-6
let mul = 6*5
let div = 10/5
let exp = 10**2

console.log(sum)
console.log(res)
console.log(mul)
console.log(div)
console.log(exp)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
sum += 5
res -= 10
mul *= 10
div /= 3
exp **= 2

console.log(sum)
console.log(res)
console.log(mul)
console.log(div)
console.log(exp)

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
console.log(10 > 5) // Mayor que
console.log(2 < 5) // Menor que
console.log(15 >= 10) // Mayor o igual que
console.log(9 <= 9) // Menor o igual que
console.log(5 == 5) // Igualdad por valor

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(1 > 5) // Mayor que
console.log(7 < 5) // Menor que
console.log(3 >= 10) // Mayor o igual que
console.log(9 <= 5) // Menor o igual que
console.log(5 == 4) // Igualdad por valor

// 5. Utiliza el operador lógico and
console.log(10 > 5 && 2 <5)

// 6. Utiliza el operador lógico or
console.log(10 < 5 || 2 > 5)

// 7. Combina ambos operadores lógicos
console.log(10 < 5 || 2 > 5 || 10 > 5 && 2 <5)

// 8. Añade alguna negación
console.log(!(10 < 5 || 2 > 5 || 10 > 5 && 2 <5))

// 9. Utiliza el operador ternario
let esLunes = false
esLunes? console.log("Si... hoy es Lunes") : console.log("No.... hoy es Martes")

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log((5*6)>10 && (2+8)<=15 || true)
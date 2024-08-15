/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// 1. Crea un array que almacene cinco animales
let arrayAnimales =  new Array("Perro","Gato","Oso","Loro","Mono")
console.log(arrayAnimales)


// 2. Añade dos más. Uno al principio y otro al final
arrayAnimales.unshift("Zorro") // unshift agrega el elemento al inicio
arrayAnimales.push("Canguro") // push agrega el elemento al final
console.log(arrayAnimales)


// 3. Elimina el que se encuentra en tercera posición
arrayAnimales.splice(2,1)
console.log(arrayAnimales)


// 4. Crea un set que almacene cinco libros
let misLibros = new Set()
misLibros.add("Libro1")
misLibros.add("Libro2")
misLibros.add("Libro3")
misLibros.add("Libro4")
misLibros.add("Libro5")
console.log(misLibros)


// 5. Añade dos más. Uno de ellos repetido
misLibros.add("Libro1") // Set no permite agregar elementos repetidos.
misLibros.add("Libro4") // Set no permite agregar elementos repetidos.
console.log(misLibros)


// 6. Elimina uno concreto a tu elección
misLibros.delete("Libro1")
console.log(misLibros)


// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
    [1,"Enero"],
    [2,"Febrero"],
    [3,"Marzo"],
    [4,"Abril"],
    [5,"Mayo"],
    [6,"Junio"],
    [7,"Julio"],
    [8,"Agosto"],
    [9,"Septiembre"],
    [10,"Octubre"],
    [11,"Noviembre"],
    [12,"Diciembre"],
])
console.log(meses)


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(meses.get(5))


// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set(13,["julio","Agosto","Septiembre"])
console.log(meses)


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let unArray = new Array("dos","tres","cuatro")
console.log(unArray)

let unSet = new Set(unArray)
console.log(unSet)

const createdMap = new Map(Array.from(unSet, value => [value.length, value]));
console.log(createdMap);
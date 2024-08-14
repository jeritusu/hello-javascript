/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let miNombre = "Jairo"
if(miNombre == "Jairo"){
    console.log(`Tú nombre ${miNombre} está correcto..`)
}


// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "Jairo"
let contrasena = 138909
if(usuario = "Jairo" && contrasena == 138909 ){
    console.log("¡Tú usuario y contraseña son correctos..!")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 0
if(number > 0){
    console.log("El número digitado es positivo")
}else if(number < 0){
    console.log("El número digitado es negativo")
}else{
    console.log("El número digitado es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 12
if(edad >= 18){
    console.log("Si eres apto para votar ")
}else if(edad < 18){
    edadVotar = 18 - edad 
    console.log(`Te falta ${edadVotar} años para votar`)
}


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let edad2 = 10
edad2 >= 18? verEdad = "Eres mayor de edad": verEdad = "Eres menor de edad"
console.log(verEdad)


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 6
if (mes == 1 || mes == 2 || mes == 3){
    console.log("Estás en estación de Invierno")
}else if(mes == 4 || mes == 5 || mes == 6){
    console.log("Estás en estación de Primavera")
}else if(mes == 7 || mes == 8 || mes == 9){
    console.log("Estás en estación de Verano")
}else if(mes == 10 || mes == 11 || mes == 12){
    console.log("Estás en estación de Otoño")
}else {
    console.log("¡Estación no exite...!")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes == 1){
    console.log("El mes de Enero tiene 31 días")
}else if(mes == 2){
    console.log("El mes de Febrero tiene 28 0 29 días")
}else if(mes == 3){
    console.log("El mes de Marzo tiene 31 días")
}else if(mes == 4){
    console.log("El mes de Abril tiene 30 días")
}else if(mes == 5){
    console.log("El mes de Mayo tiene 31 días")
}else if(mes == 6){
    console.log("El mes de Junio tiene 30 días")
}else if(mes == 7){
    console.log("El mes de Julio tiene 31 días")
}else if(mes == 8){
    console.log("El mes de Agosto tiene 31 días")
}else if(mes == 9){
    console.log("El mes de Septiembre tiene 30 días")
}else if(mes == 10){
    console.log("El mes de Octubre tiene 31 días")
}else if(mes == 11){
    console.log("El mes de Noviembre tiene 30 días")
}else if(mes == 12){
    console.log("El mes de Diciembre tiene 31 días")
}else{
    console.log("¡El mes no existe...!")
}


// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = 5
let saludo = ""

switch (idioma){
    case 0:
        saludo = "Hello"
        idioma = "Ingles"
        break
    case 1:
        saludo = "Bonjour"
        idioma = "Frances"
        break
    case 2:
        saludo = "Hallo"
        idioma = "Alemán"
        break
    case 3:
        saludo = "Ciao"
        idioma = "Italiano"
        break
    case 4:
        saludo = "olá"
        idioma = "Portugués"
        break    
    default:
        idioma = "no existe"
        saludo = null
        
}
console.log(`El saludo en el idioma ${idioma} es: ${saludo}`)
// 9. Usa un switch para hacer de nuevo el ejercicio 6
mes = 3
switch (mes){
    case 1:
        console.log("Estás en estación de Invierno")
        break
    case 2:
        console.log("Estás en estación de Invierno")
        break
    case 3:
        console.log("Estás en estación de Invierno")
        break
    case 4:
        console.log("Estás en estación de Primavera")
        break
    case 5:
        console.log("Estás en estación de Primavera")
        break  
    case 6:
        console.log("Estás en estación de Primavera")
        break
    case 7:
        console.log("Estás en estación de Verano")
        break  
    case 8:
        console.log("Estás en estación de Verano")
        break
    case 9:
        console.log("Estás en estación de Verano")
        break
    case 10:
        console.log("Estás en estación de Otoño")
        break
    case 11:
        console.log("Estás en estación de Otoño")
        break
    case 12:
        console.log("Estás en estación de Otoño")
        break
    default:
        console.log("Mes no existe..")
}


// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes){
    case 1:
        console.log("El mes de Enero tiene 31 días")
        break
    case 2:
        console.log("El mes de Febrero tiene 28 0 29 días")
        break
    case 3:
        console.log("El mes de Marzo tiene 31 días")
        break
    case 4:
        console.log("El mes de Abril tiene 30 días")
        break
    case 5:
        console.log("El mes de Mayo tiene 31 días")
        break  
    case 6:
        console.log("El mes de Junio tiene 30 días")
        break
    case 7:
        console.log("El mes de Julio tiene 31 días")
        break  
    case 8:
        console.log("El mes de Agosto tiene 31 días")
        break
    case 9:
        console.log("El mes de Septiembre tiene 30 días")
        break
    case 10:
        console.log("El mes de Octubre tiene 31 días")
        break
    case 11:
        console.log("El mes de Noviembre tiene 30 días")
        break
    case 12:
        console.log("El mes de Diciembre tiene 31 días")
        break
    default:
        console.log("Mes no existe..")
}
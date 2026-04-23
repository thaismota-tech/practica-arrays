// Ejercicio 1: Dado un array, retorna el primer elemento del mismo.
let chocolates = ["negro", "blanco", "conleche", "ruby"];
console.log(chocolates[0]); 


// Ejercicio 2: Obtener el último elemento del array
let barrios = ["leme", "copacabana", "arpoador", "ipanema", "leblon"];
console.log(barrios[4]);


// Ejercicio 3: Agregar un elemento al inicio del array y lo devuelve actualizado
let andalucia = ["sevilla", "málaga", "córdoba", "granada", "almería", "huelva", "jaén"];
andalucia.unshift("cádiz");
console.log(andalucia);


// Ejercicio 4: Eliminar el primer elemento del array
let hoteles = ["hilton", "windsor", "ibis", "marriott"]
let primero = hoteles.shift();
console.log(hoteles);


// Ejercicio 5: Agregar un elemento al final del array
let nombresdechicas = ["kate", "ella", "sophie", "mary", "joy"]
nombresdechicas.push("hanna");
console.log(nombresdechicas);


// Ejercicio 6:  Eliminar el último elemento del array
let nombresdechicos = ["adam", "joey", "ross", "john", "jack"]
let ultimo = nombresdechicos.pop();
console.log(nombresdechicos);


// Ejercicio 7:  Combinar dos arrays
let frutas = ["fresa", "framboesa"];
let proteinas = ["pollo", "pescado"];
let combina = frutas.concat(proteinas);
console.log(combina);


// Ejercicio 8:  Encontrar si un array incluye un elemento
let cantantes = ["taylor", "selena", "pink", "rihanna"];
console.log(cantantes.includes("pink"));
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


// Ejercicio 9:  Buscar el índice de un elemento
let colores = ["rojo", "verde", "azul", "morado"];
let indice1 = colores.indexOf("rojo");
let indice2 = colores.indexOf("verde");
let indice3 = colores.indexOf("azul");
let indice4 = colores.indexOf("morado");
console.log(indice1);
console.log(indice2);
console.log(indice3);
console.log(indice4);


// Ejercicio 10: Reemplazar un elemento en un array
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
matriz[1][2] = 25;  // Cambia el elemento en la segunda fila y tercera columna
console.log(matriz);


// Ejercicio 11: Sumar todos los elementos del array
const numeros = [10, 30, 58, 96, 100];
let suma = numeros.reduce(function (acumulador, num) {
  return acumulador + num;
}, 0);
console.log(suma);


// Ejercicio 12: Multiplicar todos los elementos del array
let numerosdeunarray = [100, 200, 300, 400, 500];
let triplicados = numerosdeunarray.map(function (num) {
  return num * 3;
});
console.log(triplicados);


// Ejercicio 13: Filtrar números mayores a un valor

let numerosparafiltrar = [1, 5, 7 ,9, 11];
let numerodefiltro = 6;
let filtrados = numerosparafiltrar.filter(function (num) {
 return num > numerodefiltro;
 });
console.log(filtrados);


// Ejercicio 14: Verificar si todos los elementos son mayores a un número
let numerosdeotroarray = [5, 9, 70, 96, 132];
let minimoPermitido = 10;
let todosSonMayores = numerosdeotroarray.every(function(num) {
return num > minimoPermitido; 
});
console.log(todosSonMayores);


// Ejercicio 15: Obtener el primer elemento que cumple una condición
let masnumeros = [4, 9, 16, 25];
let encontrado = masnumeros.find(function (num) {
  return num > 10;
});
console.log(encontrado); 


// Ejercicio 16: Imprimir cada elemento del array
let nuevoarraydenumeros = [12, 15, 21, 30, 35];
nuevoarraydenumeros.forEach(function (num) {
  console.log(num);
});


// Ejercicio 17: Crear un array con el doble de cada número
let numerosarray = [20, 40, 50, 100, 500];
let duplicados = numerosarray.map(function (num) {
  return num * 2;
});
console.log(duplicados);


// Ejercicio 18:  Convertir un array de nombres en mayúsculas
let nombres = ["mariana", "juliana", "tatiana", "diana", "ana"]
let nombresMayusculas = nombres.map(function (nombre) { 
return nombre.toUpperCase(); 
});
console.log(nombresMayusculas)
let nombre = 'Titi';
//Comentario una Linea
/*
Comentarios
de
Varias 
Lineas
*/
let saludo = 'Hola';
console.log('Prueba Impresion Pantalla');
console.log(saludo);
console.log(typeof saludo);

let edad = 56;
let precio = 99.98;
let negativo = -10;

console.log(typeof edad);
console.log(typeof precio);
console.log(typeof negativo);

console.log('Edad' + edad + typeof(edad));

let mayordeedad = true;

let esmayor = edad > 18;

console.log(esmayor);

let frutas = ['manzanas', 'peras', 'naranjas', true, 15.5,null];
console.log(typeof frutas);
console.log('31'-1);

console.log('5' == 5);

console.log('5' === 5);

//var nombre = 'Titi';
var prueba;

if (true)
{
   var a = 1;
   let b = 2;
}

console.log(a);

//console.log(b);

console.log(typeof prueba);

if (typeof prueba === 'undefined')
{
   console.log('Esta Indefinida')
}

let marcas = ['Chevrolet','Ford','Fiat'];
console.log(marcas[2]);
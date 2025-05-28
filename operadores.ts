//===OPERADORES EM TYPESCRIPT===

let a: number = 10;
let b: number = 14;

//Aritiméticos (+, -, *, /, %)
console.log('Soma', a + b);
console.log('Subtração', a - b);
console.log('Multiplicação', a * b);
console.log('Divisão', a / b);
console.log('Resto', a % b); /*percente*/

//Relacionais
console.log('Igual', a == b);
console.log('Diferente', a != b);
console.log('Maior que', a > b);
console.log('Menor que', a < b);
console.log('Maior ou igual', a >= b);
console.log('Menor ou igual', a <= b);

//Identidade Restrita
console.log('Idêntico', a === b);
console.log('Não idêntico', a !== b);

//Lógicos
let x: boolean = true;
let y: boolean = false;

console.log('AND', x && y);
console.log('OR', x || y);
console.log('NOT', !x);


//Operador Condicional (ternário)
let idade: number = 17;
let acesso = idade >= 18 ? 'Permitido beijar na boca' : 'Não permitido' /*condição ? valor se true : valor se false*/

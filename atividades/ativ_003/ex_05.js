const leia = require("readline-sync");

let matriz = [];
let diagonalPrincipal = [];
let diagonalSecundaria = [];
let somaDiagonalPrincipal = 0;
let somaDiagonalSecundaria = 0;

for (let i = 0; i < 3; i++) {
    matriz[i] = [];
  for (let j = 0; j < 3; j++) {
        matriz[i][j] = leia.questionInt(`Digite o valor na Matriz [${i}][${j}]: `);
    }
}
console.table(matriz);

for (let i = 0; i < 3; i++) {
    diagonalPrincipal.push(matriz[i][i]);
    somaDiagonalPrincipal += matriz[i][i];
}

for (let i = 0; i < 3; i++) {
    diagonalSecundaria.push(matriz[i][2 - i]);
    somaDiagonalSecundaria += matriz[i][2 - i];
}

console.log("Elementos da Diagonal Principal:", diagonalPrincipal);
console.log("Elementos da Diagonal Secundária:", diagonalSecundaria);
console.log("Soma da Diagonal Principal:", somaDiagonalPrincipal);
console.log("Soma da Diagonal Secundária:", somaDiagonalSecundaria);
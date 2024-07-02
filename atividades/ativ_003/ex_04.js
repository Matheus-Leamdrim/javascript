const leia = require("readline-sync");

let vetor = new Array(10);
let soma = 0;
let numerosPares = [];
let numerosImpares = [];


for (let i = 0; i < 10; i++) {
  vetor[i] = leia.questionInt("Insira os Numeros ao Array: ");
  soma += vetor[i];
  if (vetor[i] % 2 == 0) {
    numerosPares.push(vetor[i]);
  } else {
    numerosImpares.push(vetor[i]);
  }
}
let media = soma / vetor.length

console.log(`Os Numeros Impares são: ${numerosImpares}`);
console.log(`Os Numeros Pares são: ${numerosPares}`);
console.log(`A Soma dos Valores é: ${soma}`);
console.log(`A Media é: `+ media.toFixed(2));

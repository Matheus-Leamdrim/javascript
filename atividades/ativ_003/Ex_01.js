const leia = require("readline-sync");

let numeros;
let i;
let pares = 0;
let impares = 0;


for ( i = 1; i <=10; i++){
  numeros = leia.questionInt(`Digite ${i} Numero: `);
  if(numeros % 2 == 0){
    pares++
  }else{
    impares++
  }
}
console.log(pares)
console.log(impares)

const leia = require('readline-sync')

let n1 = leia.questionFloat("Insira o Numero 1: ")
let n2 = leia.questionFloat("Insira o Numero 2: ")
let n3 = leia.questionFloat("Insira o Numero 3: ")
let n4 = leia.questionFloat("Insira o Numero 4: ")

console.log((n1 * n2) - (n3 *n4).toFixed(1))
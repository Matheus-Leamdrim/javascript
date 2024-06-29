const leia = require('readline-sync');

let salario = leia.questionFloat("Digite o Salario: ")
console.log("O Salário é: " + salario)

let abono = leia.questionFloat("Digite o Abono: ")
console.log("O Abono é:" + abono)

let novoSalario = salario + abono

console.log("O seu novo salário é: " + novoSalario.toFixed(2))
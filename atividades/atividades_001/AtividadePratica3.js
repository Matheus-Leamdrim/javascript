const leia = require('readline-sync')

let salarioBruto  = leia.questionFloat("Digite o Salario Bruto: ")
let adicionalNoturno = leia.questionFloat("Digite o Adicional Noturno: ")
let horasExtras  = leia.questionFloat("Digite as Horas Extras: ")
let descontos  = leia.questionFloat("Digite os Descontos: ")
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos 

console.log("O Salário Líquido é R$: " + salarioLiquido.toFixed(2))
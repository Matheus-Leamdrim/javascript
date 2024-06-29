const leia = require("readline-sync")

let numero1 = leia.questionFloat("Digite um Numero: ")
let par = numero1 % 2 == 0

if (numero1 > 0 && par) {
    console.log("O número "+numero1+" é Par e Positivo");
} else if (numero1 > 0 && !par) {
    console.log("O número "+numero1+" é Ímpar e Positivo");
} else if (numero1 < 0 && par) {
    console.log("O número "+numero1+" é Par e Negativo");
} else if (numero1 < 0 && !par) {
    console.log("O número "+numero1+" é Ímpar e Negativo")};
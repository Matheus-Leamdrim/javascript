const leia = require("readline-sync")

let doador = leia.question("Digite o Nome do Doador: ")
let idade = leia.questionFloat("Digite a Idade do Doador: ")

let primeiraDoacao = leia.question("Primeira Doacao?: Sim/Nao: ")


if (idade >= 18 && idade <= 60) {
    console.log("O " + doador + " está apto para doar sangue!");
} 
else if (idade >= 60 && idade < 69) {
    if (primeiraDoacao === 'nao') {
        console.log("O " + doador + " está apto para doar sangue!");
    } else if(primeiraDoacao === 'sim'){
        console.log("O " + doador + " não está apto para doar sangue!");
    }
} else {
    console.log("O " + doador + " não está apto para doar sangue!");
}
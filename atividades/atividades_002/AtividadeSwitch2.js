const leia = require("readline-sync")

let colaborador = leia.question("Digite o seu Nome: ")

let cargo = leia.questionInt("Digite o Codigo do seu Cargo:")
 switch(cargo){
    case 1: console.log("Gerente");
    var reajuste = 10 / 100
    var salario = leia.questionInt("Digite o Salario: ")
    console.log(colaborador + "\nGerente"); 
    break;
    case 2: console.log("Vendedor");
    var reajuste = 7 / 100
    var salario = leia.questionInt("Digite o Salario: ")
    console.log(colaborador + "\nVendedor");
    break;
    case 3: console.log("Supervisor");
    var reajuste = 9 / 100
    var salario = leia.questionInt("Digite o Salario: ")
    console.log(colaborador + "\nSupervisor");
    break;
    case 4:console.log("Motorista")
    var reajuste = 6 / 100
    var salario = leia.questionInt("Digite o Salario")
    console.log(colaborador + "\nMotorista");
    break;
    case 5: console.log("Estoquista")
    var reajuste = 5 / 100
    var salario = leia.questionInt("Digite o Salario: ")
    console.log(colaborador + "\nestoquista");
    break;
    case 6: console.log("Tecnico de T.I.")
    var reajuste = 8 / 100
    var salario = leia.questionInt("Digite o Salario: ")
    console.log(colaborador + "\nTecnico de T.I.");
    break;
}
var novoSalario = salario + (reajuste * salario)
console.log("O seu Novo Salario é R$: "+ novoSalario.toFixed(2))
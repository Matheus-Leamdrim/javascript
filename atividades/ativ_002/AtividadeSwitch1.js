const leia = require("readline-sync")

let codigoProduto = leia.questionInt("Digite o Codigo do Produto: ")

switch(codigoProduto){
    case 1: console.log("1 - Cachorro Quente - R$ 10.00")
       var preco = 10.00
       var quantidade = leia.questionInt("Digite a quantidade: ")
    ; break;
    case 2: console.log("2 - X-Salada - R$ 15.00")
    var preco = 15.00
    var quantidade = leia.questionInt("Digite a quantidade: ")
    ; break;
    case 3: console.log("3 - X-Bacon - R$18.00")
    var preco = 18.00
    var quantidade = leia.questionInt("Digite a quantidade: ")
    ; break;
    case 4: console.log("4 - Bauru - R$12.00")
    var preco = 12.00
    var quantidade = leia.questionInt("Digite a quantidade: ")
    ; break;
    case 5: console.log("5 - Refrigerante - R$ 8.00")
    var preco = 8.00
    var quantidade = leia.questionInt("Digite a quantidade: ")
    ; break;
    case 6: console.log("6 - Suco de Laranja - R$ 13.00")
    var preco = 13.00
    var quantidade = leia.questionInt("Digite a quantidade: ")
    ; break;
    default:
        console.log("Codigo invalido")
}
console.log("Valor Total R$: "+ quantidade * preco)
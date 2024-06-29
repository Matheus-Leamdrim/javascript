const leia = require("readline-sync")

let na = leia.questionInt("Insira um Numero: ")
let nb = leia.questionInt("Insira um Numero: ")
let nc = leia.questionInt("Insira um Numero: ")


if(na + nb > nc){
    console.log("A soma de A + B é maior que C")}
else if(na + nb - nc){console.log("A soma de A + B é menor que C")}
    else{(na + nb == nc)
        console.log("A soma de A + B é igual a C")}

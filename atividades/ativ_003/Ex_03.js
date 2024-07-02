const leia = require('readline-sync')

let numeros = 0
let total = 0

do{
    let numeros = leia.questionInt("Digite um Numero:")
    if(numeros <=0){
        break;
    }if(numeros >0){
    total += numeros
   }
   
} while(true)
    console.log(`A soma dos numeros é: ${total}`)
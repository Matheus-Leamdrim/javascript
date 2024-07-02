const leia = require('readline-sync')

  
let menorQue21 = 0
let maiorQue50 = 0

while(true){
  let idade = leia.questionInt("Digite uma idade: ")
  if(idade < 0){
    break;
  }
  if(idade < 21){
    menorQue21++; }
    else if(idade>50){
      maiorQue50++;
    }
    }
    console.log(`Pessoas menores de 21 anos: ${menorQue21}`)
    console.log(`Pessoas maiores de 50 anos: ${maiorQue50}`)
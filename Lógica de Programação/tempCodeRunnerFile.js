//Exercício 10 - Faça um algoritmo que leia um conjunto de dados numéricos (X) e mostra na tela o maior dentre eles e quantos são iguais. Admita que o valor 9999 é utilizado como sentinela.

const prompt = require("prompt-sync")({signit:true})

const vetor1 = []; const vetor2 = []
var entrada = Number(prompt("Digite o seu número (9999 para sair): "))

while(entrada!=9999 && !isNaN(entrada)){
    if(entrada==9999){
        break
    }
    vetor1.push(entrada)
    vetor2.push(entrada)
    entrada = prompt("Digite novamente (9999 para sair): ")
}

for(i=0;i< vetor1.length;i++){
    if(vetor1[i]>vetor2[i++]){
        var maior = 0
        maior = vetor1[i]
    }else{
        console.log(maior)
        break
    }
}
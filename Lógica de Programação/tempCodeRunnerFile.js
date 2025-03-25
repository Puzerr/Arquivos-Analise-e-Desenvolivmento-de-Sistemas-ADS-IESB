const prompt = require("prompt-sync")({sigint:true})
var vlr1, vlr2 = 0
var vlr1 = Number(prompt("Digite o valor 1: "))
var vlr2 = Number(prompt("Digite o valor 2: "))

function leitura(vlr1,vlr2){
    while(vlr2==0){
        vlr2 = prompt("O segundo valor deve ser diferente de 0: ")
    }
    let divisao
    divisao = (vlr1/vlr2)
    console.log(divisao)
}
leitura(vlr1,vlr2)
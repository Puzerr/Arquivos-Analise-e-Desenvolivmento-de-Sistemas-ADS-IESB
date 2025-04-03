const prompt = require("prompt-sync")({signit:true})

var num1, num2 = 0

num1 = Number(prompt("Digite o primeiro número: "))
num2 = Number(prompt("Digite o segundo número: "))


while(num2==0){
    num2 = Number(prompt("O segundo número deve ser um número diferente de zero:"))
    if(num2!=0){
        let divisao = 0
        divisao = num1/num2
        console.log(divisao)
        break
    }
}
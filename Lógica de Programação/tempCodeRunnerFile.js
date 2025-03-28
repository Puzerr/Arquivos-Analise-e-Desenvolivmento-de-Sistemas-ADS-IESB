const prompt = require("prompt-sync")({signit:true})

var entrada = prompt("Digite os números: "), count = 0
const numeros = []

while(entrada != 9999){            //Entrada de dados no array
    numeros.push(parseInt(entrada))
    entrada = prompt("Próximo número: ")
    count++
    if(entrada == 9999){
        break
    }
}

var qtd_impar = 0 , qtd_par = 0
var i = 0

for(i in numeros){
    if(count==0){
        console.log("Nenhum número digitado.")
        break
    }else if(numeros[i]%2 == 0){
        qtd_par++
    }else{
        qtd_impar++
    }
}
console.log(`A quantidade de números ímpares é de ${qtd_impar} e a quantidade de números pares é ${qtd_par}`)
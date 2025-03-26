const prompt = require("prompt-sync")({signit:true})

var num = 0, count = 0, continua = "S", acumulador = 0, media = 0

while(continua == "S"){
    num = Number(prompt("Digite o número: "))
    acumulador = acumulado + num
    count++
    continua = prompt("Deseja continuar? (S/N) ")
}
media = acumulador/count
console.log(`A média é ${media}, a soma é ${acumulador} e foram digitados ${count} números.`)
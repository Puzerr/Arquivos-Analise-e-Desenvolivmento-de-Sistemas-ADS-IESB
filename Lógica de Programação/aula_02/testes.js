const prompt = require("prompt-sync")({sigint:true})

var N1=0, N2=0, N3=3, Media=0

N1=Number(prompt("Digite a primeira nota: "))
N2=Number(prompt("Digite a segunda nota: "))
N3=Number(prompt("Digite a segunda nota: "))

Media=(N1+N2+N3)/3

console.log(Media)
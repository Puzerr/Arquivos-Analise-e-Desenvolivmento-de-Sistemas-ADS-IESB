const prompt = require("prompt-sync")({signit:true})

const aluno01 = {
    nome: "Raphael",
    contador: 0
}
const aluno02 = {
    nome: "Joâo",
    contador: 0
}
const aluno03 = {
    nome: "Brisa",
    contador: 0
}
const aluno04 = {
    nome: "Pedro",
    contador: 0
}
const aluno05 = {
    nome: "Maria",
    contador: 0
}

var contador_total = 0

console.log(`Bem vindo(a) ${aluno01.nome}!`)
var entrar = prompt(`${aluno01.nome}, bem-vindo(a). Deseja entrar? (s ou n): `)
if(entrar=="s"){
    while(entrar=="s"){
        aluno01.contador++
        contador_total++
        var entrar = prompt("Deseja entrar novamente? (s ou n) ")
    }
}

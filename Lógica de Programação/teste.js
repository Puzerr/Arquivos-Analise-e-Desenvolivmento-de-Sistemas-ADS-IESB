/*
var pessoa = {
    nome: "Raphael",
    sobrenome: "Ferraz"
};

pessoa["Raphael"] = "Pedro"
pessoa.sobrenome = "Ribeiro"

saida = pessoa["Raphael"];
console.log(saida);
console.log(pessoa.sobrenome)

var antes = new Date(2024, 11, 3);

console.log(antes.getMonth());
console.log(antes.getDay());

conversao = parseInt("05061498119")

console.log(conversao)

var x = [[10,20,30],[40,50,60],];

console.log(typeof x)

const z = {}
console.log(typeof z)

var r = {nome: "Raphael", idade: 21, peso: 81}

console.log(r.peso)


const PromptSync = require("prompt-sync")

var a = 5.0
var b = 7.0
var c = 8.0

var media = (a+b+c)/3

console.log(media.toFixed(2))

{
    let a = 2.0
    let b = 5.2
    let c = 9.6

    let media = (a+b+c)/3
    console.log(media.toFixed(2))
}

var vet = [5.6, 8.5, 9.9] 
vet.pop(2) // Exclui o valor e a posição.
console.log(vet)
delete vet[0] // Apaga o item, mas mantem a posição
console.log(vet) // [ <1 empty item>, 8.5 ]
*/

function media(p1,p2){
    bim1 = p1 * 0.4
    bim2 = p2 * 0.6
    
    calcmedia = (bim1 + bim2)/2
    if (calcmedia >= 5.0)
        return console.log("Aprovado")
    else
        return console.log("Reprovado")
}
media(3, 2)

console.log(10==1)
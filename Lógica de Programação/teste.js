/*Outros*/
{
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

 var a1 = false||false
console.log(a1)
}

/*--------------------------------------------------------*/


/*Concatenação de string com*/
{
var nome = "Raphael", n1 = 8, n2 = 9, n3 = 3;
var media = (n1+n2+n3)/3;

if (media>=5){
    console.log("A média do alno "+ nome +" é: "+ media.toFixed(2) +", aprovado!")
}else{
    console.log("A média do aluno "+ nome +" é: "+ media.toFixed(2) +", Reprovado")
}
}

/*--------------------------------------------------------*/


/*Comparador entre 3 números*/
{
var x = 10, y = 5, z =7;

if (x>y && x>z){
    console.log("X é o maior!")
}else if (y>x && y>z){
    console.log("Y é o maior!")
}else{
    console.log("Z  é o maior!")
}
}

/*--------------------------------------------------------*/

/* CALCULAR MEDIA*/
{
{
const prompt = require('prompt-sync')({sigint:true})
var n1=0, n2=0, n3=0, nome;
nome = prompt("Digite o seu nome: ")
n1 = Number(prompt("Digite a nota 1: "))
n2 = Number(prompt("Digite a nota 2: "))
n3 = Number(prompt("Digite a nota 3: "))

function media(n1,n2,n3){
    let media;
    media = (n1+n2+n3)/3
    if (media>=5){
        console.log("O aluno "+nome+" está APROVADO!")
    } else if (media>=3 && media<5){
        console.log("O aluno "+nome+" está de RECUPERAÇÃO!")
    }else {
        console.log("O aluno "+nome+" está REPROVADO!")
    }
}
media(n1,n2,n3);
}
}

/*--------------------------------------------------------*/

/*Calculadora delta*/
{
const prompt = require('prompt-sync')({sigint:true})
var b, a, c;
b = Number(prompt("Digite o valor de b: "))
a = Number(prompt("Digite o valor de a: "))
c = Number(prompt("Digite o valor de c: "))

function delta(b,a,c){
    let delta
    delta = (b*b)-(4*a*c)
    console.log(delta)
}
delta(b,a,c)
}

/*--------------------------------------------------------*/

/*Calculadora Celsius para Fahrenheit */
{
const prompt = require('prompt-sync')({sigint:true})
var f, c;
c = Number(prompt("Digite o valor em graus celcius: "));
function conversao(c){
    let f
    f = (9.0*c+160.0)/5.0
    console.log(c+"°C graus celcius é equivalente à "+f+"°F graus fahrenheit.")
}
conversao(c)
}

/*--------------------------------------------------------*/

/*Métricas de uma viagem de carro*/
{
const prompt = require("prompt-sync")({sigint:true})
/*Variáveis
var tempo=0, velocidade = 0, distancia = 0, consumo_medio=10, qtd_combutivel = 0

/*Entrada de dados*/
velocidade = Number(prompt("Digite a velocidade: "))
tempo = Number(prompt("Digite o tempo (em horas): "))

/*Calcular distancia gasto*/
distancia = tempo*velocidade

/*Consumo de combustpivel*/
qtd_combutivel= distancia/consumo_medio

/*Media de velocidade, tempo gasto, distancia e quantidade de litros*/
console.log("A velocidade média é "+velocidade)
console.log("O tempo gasto foi de "+tempo+" horas")
console.log("A distância percorrida foi de "+distancia+"km")
console.log("A quantidade de litros utilizados foi de "+qtd_combutivel)
}

/*--------------------------------------------------------*/

/*Algoritmo de laço WHILE*/
{
var count = 0;

while (count < 10){
    console.log("count")
    count++;
}
}

/*--------------------------------------------------------*/

/*Outro exemplo de WHILE*/
{
function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;
while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log("Até a próxima!")
}

/*--------------------------------------------------------*/

/*Laço DO/WHILE*/
{
var c = 1

do {
console.log(`Passo ${c}`)
c++
} while (c <= 2)
}

/*--------------------------------------------------------*/

/*Laço de repetição para a entrada correta de informação*/
{
const prompt = require("prompt-sync")({sigint:true})
var vlr1, vlr2 = 0
var vlr1 = Number(prompt("Digite o valor 1: "))
var vlr2 = Number(prompt("Digite o valor 2: "))

function leitura(vlr1,vlr2){
    while(vlr2==0){
        console.log("VALOR INVÁLIDO")
        vlr2 = prompt("O segundo valor deve ser diferente de 0: ")
    }
    let divisao
    divisao = (vlr1/vlr2)
    console.log(`A divisão de ${vlr1} e ${vlr2} é ${divisao}.`)
}
leitura(vlr1,vlr2)
}

/*--------------------------------------------------------*/

/*Loopoing usando uma sentinela*/
{
const prompt = require("prompt-sync")({sigint:true})   //Entrada dos números
var numeros = []
var entrada = prompt("Digite um número: ")

while(entrada != 9999){                               //Enquanto o valor inserido for diferente de 9999, 
    numeros.push(parseInt(entrada));                  //não sairá do loopoing entrada de dados
    entrada = prompt("Digite o próximo número: ")
    if (entrada==9999){
        break
    }
}

var maior = 0                //Verificação do maior número
var i = 0
while(i < numeros.length){ 
    if(maior < numeros[i]){
        maior = numeros[i]
    }
    i++
}
console.log(maior)
}

/*--------------------------------------------------------*/

/*Cálculo de média com acumulador e contagem de vezes digitadas*/
{
const prompt = require("prompt-sync")({signit:true})

var num = 0, count = 0, continua = "S", acumulador = 0, media = 0

while(continua == "S"){
    num = Number(prompt("Digite o número: "))
    acumulador = acumulador + num
    count++
    continua = prompt("Deseja continuar? (S/N) ")
}
media = acumulador/count
console.log(`A média é ${media}, a soma é ${acumulador} e foram digitados ${count} números.`)
}

/*--------------------------------------------------------*/

/*Calculadora básica*/
{
const prompt = require("prompt-sync")({signit:true})

var number1 = 0, number2 = 0, operador= 0
number1 = Number(prompt("Digite o primeiro número: "));
operador = prompt("Qual a operação? (+,-,/,* ou ^): ");
number2 = Number(prompt("Digite o segundo número: "));

function calculadora(number1,operador,number2,){
    switch(operador){
        case "+":
            let soma    
            soma = number1+number2
            console.log(soma)
            break
        case "-":
            let subtracao
            subtracao = number1-number2
            console.log(subtracao)
            break
        case "/":
            let divisao
            divisao = number1/number2
            console.log(divisao)
            break
        case "*":
            let multiplicacao
            multiplicacao = number1*number2
            console.log(multiplicacao)
            break
        case "^":
            let potencia
            potencia = Math.pow(number1,number2)
            console.log(potencia)
        default:
            console.log("Operador inválido.")
    };
};
calculadora(number1,operador,number2,);
}

/*--------------------------------------------------------*/

/*Verificador de tentativas de login*/
{
const prompt = require("prompt-sync")({signit:true})

var senhabanco = "oi"

for(tentativa = 1; tentativa <= 3, tentativa++;){
    senha = prompt("Digite a sua senha: ")
    if (senha == senhabanco){
        console.log("Senha correta!")
        break
    }else{
        console.log("Tentativa ",tentativa,".")
        if(tentativa == 3){
            console.log("Conta bloqueada!")
            break
        }
    }
}
}

/*--------------------------------------------------------*/

/*Verificar qual é o maior número*/
{
const notas = [4,7,2,5,10,9,13,20]
var maior = 0

for(var i = 0; i < notas.length; i++){
    if(maior < notas[i]){
        maior = notas[i]
    }
}
/* Faz a mesma coisa que o for
while(i <notas.length){
    if(maior < notas[i]){
        maior = notaas[i]
    }
    i++
}
*/
console.log(maior)
}

/*--------------------------------------------------------*/

/*Mostrar a quantidade de números pares e ímpares*/

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
    if(numeros[i]%2 == 0){
        qtd_par++
    }else{
        qtd_impar++
    }
}
console.log(`A quantidade de números ímpares é de ${qtd_impar} e a quantidade de números pares é ${qtd_par}`)
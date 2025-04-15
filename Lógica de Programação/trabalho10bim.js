/*------------------Trabalho 1° bimestre------------------*/

//Exercício 01 - Identifique de que tipo (String, Number ou Boolean) são as constantes a seguir:
var a = "Limão"
console.log(typeof a)
//Saída: string

var b = 34857
console.log(typeof b)
//Saída: number

var c =  "true"
console.log(typeof c)
//Saída: string

var d =  false
console.log(typeof d)
//Saída: boolean

var e =  "304958"
console.log(typeof e)
//Saída: string

var f =  -2343
console.log(typeof f)
//Saída: number

var g =  "23/12/99"
console.log(typeof g)
//Saída: string

var h =  true
console.log(typeof h)
//Saída: boolean

var i =  "NOME"
console.log(typeof i)
//Saída: string

var j =  0.5
console.log(typeof j)
//Saída: number

var k =  NOME
console.log(typeof k)
//Saída: NOME is not defined

var l =  'i'
console.log(typeof l)
//Saída: string


/*Exercício 02 - Indique o(s) tipo(s) de constante(s) como String, Number ou Boolean que pode(m) ser utilizado(s) para representar:

a. Nome de um país; String

b. Registro Geral (RG); Number ou String

c. Cadastro Nacional da Pessoa Jurídica (CNPJ); Number ou String

d. Se é ou não maior de idade; Booleano

e. Idade; Number

f. Endereço; String
*/


/*Exercício 03 - Diga se são válidas as afirmações a seguir. Se não forem, explique por quê:

a. Pode se utilizar variáveis numéricas para representar a placa de uma automóvel.
Resposta: Não. Pois a placa de um veículo contém letras, o que não é aceito como tipo numérico.

b. Variáveis do tipo String só podem conter letras.
Resposta: Não necessáriamente. O tipo string pode conter outros símbolos além das letras, porém para isso seria necessário definir um encoder.

c. São consideradas constantes lógicas os valores: true e false; verdadeiro e falso; sim e não.
Resposta: Sim.
*/


//Exercício 04 - Utilizando como referência a biblioteca Matemática do JavaScript qual o valor final das expressões a seguir?
var a = Math.sqrt ((45*2-30/5-8),2.0)
console.log(a)
//Saída: 8.717797887081348

var b = Math.pow(-3,3)
console.log(b)
//Saída: -27

var c = 27-Math.pow(3,4)
console.log(c)
//Saída: -54

var d = 70-(50/2)-5*3
console.log(d)
//Saída: 30

var e = Math.round(Math.pow(-70.75,4))
console.log(e)
//Saída: 25055656


//Exercício 05 - 
let A, B, C, D ,E 
A = 20; //Saída: 20
B = (40 + A)/3 //Saída: 20
C = Math.sqrt((A+80),2.0) //Saída: 10
D = (A>=B) //Saída: true
E = (C == B) //Saída: false

console.log(A," ",B," ",C," ",D," ",E)
//Saída: 20 20 10 true false


//Exercício 06 - Qual é o resultado das operações quando o algoritmo encontrar as seguintes linhas:
console.log("mario" == "maria") //Saída: false
console.log(2+4 == 6) //Saída: true
console.log(10-4 > 7) //Saída: false
console.log((2*3)>(3*2)) //Saída: false
console.log(!("a" > "A")) //Saída: false


/*Exercício 07 - Faça um programa que receba três variáveis a, b, c, pelo teclado e após
receber faça:
1°-VERIFIQUE qual deles é o MAIOR e qual é o MENOR;
2°-VERIFIQUE se os três números SÃO iguais;
3°-IMPRIMA o MAIOR número o MENOR número e caso eles sejam IGUAIS imprima “Os números SÃO IGUAIS”.
4°-CONSIDERE que podem haver dois números iguais e um diferente, assim, você deve tratar esta situação.*/
const prompt = require("prompt-sync")({signit:true})
var a = Number(prompt("Digite o primeiro número: "))
var b = Number(prompt("Digite o segundo número: "))
var c = Number(prompt("Digite o terceiro número: "))

//Verificar qual é o maior
if((a>b) && (a>c)){
    console.log("O número",a," é o maior!")
}else if((b>a) && (b>c)){
    console.log("O número ",b," é o maior!")
}else if((c>a) && (c>b)){
    console.log("O número ",c," é o maior!")
}

//Verificar qual é o maior
if((a<b) && (a<c)){
    console.log("O número ",a," é o menor!")
}else if((b<a) && (b<c)){
    console.log("O número ",b," é o menor!")
}else if((c<a) && (c<b)){
    console.log("O número ",c," é o menor!")
}

//Verificar se são iguais
if(a==b && a==c){
    console.log("O primeiro, segundo e terceiro número são iguais.(",a,")")
}else if(a == b){
    console.log("O primeiro número (",a,") é igual ao segundo número (",b,")")
}else if(a == c){
    console.log("O primeiro número (",a,") é igual ao terceiro número (",c,")")
}else if(b == c){
    console.log("O segundo número (",b,") é igual ao terceiro número (",c,")")
}else{
    console.log("O primeiro, segundo e terceiro número são iguais.(",a,")")
}

//Exercício 08 - Anacleto tem 1,50m e cresce 2cm por ano, enquanto Felisberto tem 1,10m e cresce 3cm por ano. Construa um algoritmo que calcule e imprima quantos anos serão necessários para que Felisberto seja maior que Anacleto.

var anac_alt = 150, felisb_alt = 110, tempo = 0
const  anac_cresc = 2, felisb_cresc = 3

while(felisb_alt <= anac_alt){
    anac_alt = (anac_alt + anac_cresc)
    felisb_alt = (felisb_alt + felisb_cresc)
    tempo++
}
console.log(`Irá levar ${tempo} anos para que Felisberto seja maior que Anacleto`)
//Saída: Irá levar 41 anos para que Felisberto seja maior que Anacleto


/*Exercício 09 - Faça um programa que receba dados do teclado e calcule a capacidade de um objeto com formato cilíndrico, para tanto precisamos encontrar a área da base circular e multiplicar pela sua altura. O cálculo da área do círculo é realizado utilizando a medida
do raio e o valor do número π (pi) que é igual a 3,14. Após receber os dados faça:
    CÁLCULO do volume utilizando a fórmula: volume = (3,14 * raio * raio * altura) /1000;
    VERIFIQUE o volume e de acordo com a escala abaixo:
        VOLUME MENOR ou IGUAL a 10 – Mensagem: “Este é um objeto PEQUENO”;
        VOLUME MAIOR que 10 e MENOR ou IGUAL que 100 – Mensagem: “Este é um objeto MÉDIO”;
        VOLUME MAIOR que 100 – Mensagem: “Este é um objeto GRANDE” .
IMPRIMA o volume do objeto, e a mensagem de acordo o volume obtido
(conforme especificado no item b).*/

const prompt = require("prompt-sync")({signit:true})

var raio = Number(prompt("Digite o valor do raio (centímetros): "))
var altura = Number(prompt("Digite a altura (centímetros): "))
const pi = 3.14
var base = raio*Math.pow(pi,2)
var volume = (base*altura)/1000

if(volume <= 10){
    console.log(`Este é um objeto PEQUENO (${volume.toFixed(3)} litros)`)
}else if(volume > 10 || volume < 100){
    console.log(`Este é um objeto MÉDIO (${volume.toFixed(3)} litros)`)
}else{
    console.log(`Este é um objeto GRANDE (${volume.toFixed(3)} litros)`)
}

//Exercício 10 - Faça um algoritmo que leia um conjunto de dados numéricos (X) e mostra na tela o maior dentre eles e quantos são iguais. Admita que o valor 9999 é utilizado como sentinela.

const prompt = require("prompt-sync")({signit:true})

const vetor1 = []
var entrada = Number(prompt("Digite o seu número (9999 para sair): "))

while(entrada!=9999 && !isNaN(entrada)){
    if(entrada==9999){
        break
    }
    vetor1.push(entrada)
    entrada = Number(prompt("Digite novamente (9999 para sair): "))
}

var maior = vetor1[0]

for(i=0; i<vetor1.length; i++){
    if(maior<vetor1[i+1]){
        maior = vetor1[i+1]
    }
}

for(let i=0; i<=vetor1.length; i++){
    if(vetor1[i]==vetor1[i++]){
        var count = 1
        count = count++
    }
}

for(var i=0, count=0; i<vetor1.length; i++){
    var j = vetor1[i++]
    for(i, count, j; j<vetor1.length; j++){
        if(vetor1[i]==vetor1[j]){
            if(vetor1[i]!=vetor1[j--] && vetor1[i]==vetor1[j]){
                count = count+2
            }else if(vetor1[i]==vetor1[j--] && vetor1[i]==vetor1[j++]){
                count++
            }
        }
    }
    i++
}

console.log(`O maior número é o ${maior}`)
console.log(`Do total de ${vetor1.length} números, ${count} são iguais.`)

//Não consegui resolver a questão dos números iguais

//Exercício 11 - Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

const prompt = require("prompt-sync")({signit:true})

var num = parseInt(Number(prompt("Digite o seu número: ")))

while(num<1 || num>10){
    num = parseInt(Number(prompt("O número deve ser entre 1 e 10: ")))
    for(var i=1, multi=0; i<=10; i++){
        multi = num*i
        console.log(`${num} X ${i} é igual a ${multi}`)
    }
}

//Exercício 12 - Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

const prompt = require("prompt-sync")({signit:true})

var lado1 = Number(prompt("Lado 1: "))
var lado2 = Number(prompt("Lado 2: "))
var lado3 = Number(prompt("Lado 3: "))

if((lado1==lado2) && (lado1==lado3)){
    console.log("Equilátero!")
}else if((lado1==lado2) && (lado1!=lado3)){
    console.log("Isóceles!")
}else if((lado1==lado3) && (lado1!=lado2)){
    console.log("Isóceles!")
}else if((lado2==lado3) && (lado2!=lado1)){
    console.log("Isóceles!")
}else if((lado1!=lado2) && (lado1!=lado3)){
    console.log("Escaleno!")
}

/*Exercício 13 - Leia o vetor Pontuações["33, 44, 20, 4, 51, 25, 42, 38, 56, 0, 22, 1, 104, 99, 77, 88, 3"] e responda:
a. MAIOR pontuação
b. MENOR pontuação
c. QUANTIDADE de quebra de recordes
d. PIOR jogo*/

var pontuacoes = ["33, 44, 20, 4, 51, 25, 42, 38, 56, 0, 22, 1, 104, 99, 77, 88, 3"]
var pontuacoesString = pontuacoes[0].split(", ")

const pontuacoesNumber = []
for(var i=0;i<pontuacoesString.length;i++){
    var numero = parseInt(pontuacoesString[i])
    pontuacoesNumber.push(numero)
}

var recorde = 0, i=0
var maior=pontuacoesNumber[0]
for(recorde, maior, i; i<pontuacoesNumber.length; i++){
    if(maior<pontuacoesNumber[i+1]){
        maior = pontuacoesNumber[i+1]
        recorde=recorde+1
    }
}

var menor = pontuacoesNumber[0]
for(i=0; i<pontuacoesNumber.length; i++){
    if(menor>pontuacoesNumber[i+1]){
        menor = pontuacoesNumber[i+1]
    }
}

console.log(`A maior pontuação foi ${maior}.`)
console.log(`A menor pontuação foi ${menor}.`)
console.log(`${recorde} recordes foram quebrados`)
console.log(`O pior jogo teve ${menor} pontos.`)
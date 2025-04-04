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
{
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
}
/*--------------------------------------------------------*/

/*Verificar se determinados números satisfazem um pedido*/
{
const prompt = require("prompt-sync")({signit:true})

const matriz = []
var entrada = 0, limite = 15

while(entrada !="s"){
    entrada = prompt("Digite um número (\"s\" para finalizar) : ")
    if(entrada=="s"){
        break
    }else if(matriz.length==limite){
        break
    }
    matriz.push(parseInt(entrada))
}

var i = 0
const matriz_dentro = []
const matriz_fora = []

for(i = 0; i< matriz.length;i++){
    if(matriz[i]>=10 && matriz[i]<=20){
        matriz_dentro.push(matriz[i])
    }else{
        matriz_fora.push(matriz[i])
    }
}

console.log("Os números entre 10 e 20 são: ",matriz_dentro)
console.log("Os números que não estão dentro de 10 e 20 são: ",matriz_fora)
}

/*--------------------------------------------------------*/

/*Mensagem semáforo 1.0*/
{
const prompt = require("prompt-sync")({siginit:true})

var semaforo = ""
semaforo = prompt("Status do Semáforo: ")

if(semaforo.toUpperCase()=="VERDE"){
    console.log("Pode passar")
}else{
    console.log("Você não pode passar!")
}
}

/*--------------------------------------------------------*/

/*Mensagem semáforo 2.0*/
{
const prompt = require("prompt-sync")({siginit:true})

var semaforo = ""
semaforo = prompt("Status do Semáforo: ")

if(semaforo.toUpperCase()=="VERDE"){
    console.log("Pode passar")
}else if(semaforo.toUpperCase()=="VERMELHO"){
    console.log("Pare")
}else{
    console.log("Atenção")
}
}

/*--------------------------------------------------------*/

/*Escolher carro por tipo (switch)*/
{
const prompt = require("prompt-sync")({signit:true})

var tipo_veiculo = prompt("Digite o seu tipo de vículo: ")

switch(tipo_veiculo.toUpperCase()){
    case "SUV":
        console.log("Você escolheu um TOYOYTA SW4");
        break;
    case "HATCH":
        console.log("Você escolheu um Fiat Punto");
        break;
    case "CUPE":
        console.log("Você escolheu um Hyunday Veloster");
        break;
    case "VAN":
        console.log("Você escolheu uma Volskwagen Kombi")
    default:
        console.log("O tipo que você escolheu não existe.")
}
}

/*--------------------------------------------------------*/

/*Verificar qual número é maior (!isNaN)*/
{
const prompt = require("prompt-sync")({signit:true})
var a = Number(prompt("Digite um número: ")) 
var b = Number(prompt("Digite outro número: "))

if(!isNaN(a) && !isNaN(b)){
    if(a>b){
        console.log(`O número ${a} é o maior.`);
    }else if(b>a){
        console.log(`O número ${b} é o maior.`);
    }else{
        console.log("Os números são iguais");
    }
}else{
    console.log("Ambos devem ser um número.")
}
}

/*--------------------------------------------------------*/

/*Calculadora de aumento de salário*/
{
const prompt = require("prompt-sync")({signit:true})

var salario = 0

salario = prompt("Digite seu salário: ")
incremento = Number(prompt("Aumento desejado (15%, 10%, 7% ou outro. Sem a porcentagem): "))
switch(incremento){
    case 15:
        incremento = 1.15;
        break;
    case 10:
        incremento = 1.10;
        break;
    case 7:
        incremento = 1.07;
        break;
    default:
        incremento = (Number(incremento)/100)+1
}
var aumento = 0
aumento = salario*incremento
console.log(aumento)
}

/*--------------------------------------------------------*/

/*Receber valores e verificar qual é o maior e se são iguais*/
{
const prompt = require("prompt-sync")({signit:true})

var a, b ,c = 0 

a = prompt("Digite o primeiro número: ");
b = prompt("Digite o segundo número: ");
c = prompt("Digite o terceiro número: ");

if(a>b && a>c){
    console.log(`O número ${a} é o maior.`)
}else if(b>a && b>c){
    console.log(`O número ${b} é o maior.`)
}else if(c>a && c>b){
    console.log(`O número ${c} é o maior.`)
}else {
    console.log("Todos os números são iguais.")
}
}

/*--------------------------------------------------------*/

/*Repetidor de frase*/
{
var count = 1
var frase = "Loops são legais!!!"

while(count<=30){
    console.log(frase," ",count)
    count++
}
}

/*--------------------------------------------------------*/

/*Verificador de valor usando DO WHILE*/
{
const prompt = require("prompt-sync")({signit:true})

var entrada = 0

do{
    entrada = prompt("Digite um número:")
    if(entrada>5){
        console.log(`${entrada} é maior que 5.`)
        break
    }else if(entrada==5){
        console.log(`${entrada} é igual a 5.`)
        break
    }else if(entrada<5){
        console.log(`${entrada} é menor que 5.`)
        break
    }
}while(entrada!=5)
}

/*--------------------------------------------------------*/

/*Verificar se o denominador é zero*/
{
const prompt = require("prompt-sync")({signit:true})

var num1, num2 = 0

num1 = Number(prompt("Digite o primeiro número: "))
num2 = Number(prompt("Digite o segundo número: "))


while(num2==0){
    num2 = Number(prompt("O segundo número deve ser diferente de zero:"))
    if(num2!=0){
        let divisao = 0
        divisao = num1/num2
        console.log(divisao)
        break
    }
}
}

/*--------------------------------------------------------*/

/*Estrutura de laço WHILE para identificar números pares e ímpares*/
{
const prompt = require("prompt-sync")({signit:true})

var entrada 
var count = 0
const acumulador = []

while(entrada!=9999){
    entrada = prompt("Digite um número: ")
    if(entrada==9999){
        break
    }
    acumulador.push(entrada)
    count++
}

var pares = 0, impares = 0

for(i=0;i<acumulador.length;i++){
    if(acumulador[i]%2==0){
        pares++
    }else if(acumulador[i]%2==1){
        impares++
    }
}

console.log(`${pares} números são pares.`)
console.log(`${impares} números são ímpares.`)
console.log(`Foram digitados ${count} números.`)
}

/*--------------------------------------------------------*/

/*Registrador de vezes que se utiliza um restaurante, retornando quantas vezes cada um entrou, o total, e o valor relativo de entrada do total*/
{
const prompt = require("prompt-sync")({signit:true})

//aluno01
var entrada01
var count01 = 0
var count_total = 0
var aluno01

aluno01 = prompt("Digite o seu nome: ")
entrada01 = prompt(`O ${aluno01} deseja entrar? (sim ou nao) `)
if(entrada01=="sim"){
    for(entrada01,count01;entrada01=="sim";count01++,count_total++){
        entrada01 = prompt("Deseja entrar (sim ou nao) ")
    }
    console.log(`O aluno ${aluno01} entrou no restaurante ${count01} vezes.`)
    
}else{
    console.log("Até mais.")
}


console.log("Próximos aluno!")

//aluno02
var entrada02
var count02 = 0
var aluno02


aluno02 = prompt("Digite o seu nome: ")
entrada02 = prompt(`O ${aluno02} deseja entrar? (sim ou nao) `)
if(entrada02=="sim"){
    for(entrada02,count02;entrada02=="sim";count02++,count_total++){
        entrada02 = prompt("Deseja entrar (sim ou nao) ")
    }
    console.log(`O aluno ${aluno02} entrou no restaurante ${count02} vezes.`)
    
}else{
    console.log("Até mais.")
}

console.log("Próximos aluno!")

//aluno03
var entrada03
var count03 = 0
var aluno03


aluno03 = prompt("Digite o seu nome: ")
entrada03 = prompt(`O ${aluno03} deseja entrar? (sim ou nao) `)
if(entrada03=="sim"){
    for(entrada03,count03;entrada03=="sim";count03++,count_total++){
        entrada03 = prompt("Deseja entrar (sim ou nao) ")
    }
    console.log(`O aluno ${aluno03} entrou no restaurante ${count03} vezes.`)
    
}else{
    console.log("Até mais.")
}

console.log("Próximos aluno!")

//aluno04
var entrada04
var count04 = 0
var aluno04


aluno04 = prompt("Digite o seu nome: ")
entrada04 = prompt(`O ${aluno04} deseja entrar? (sim ou nao) `)
if(entrada04=="sim"){
    for(entrada04,count04;entrada04=="sim";count04++,count_total++){
        entrada04 = prompt("Deseja entrar (sim ou nao) ")
    }
    console.log(`O aluno ${aluno04} entrou no restaurante ${count04} vezes.`)
    
}else{
    console.log("Até mais.")
}

console.log("Próximos aluno!")

//aluno05
var entrada05
var count05 = 0
var aluno05


aluno05 = prompt("Digite o seu nome: ")
entrada05 = prompt(`O ${aluno05} deseja entrar? (sim ou nao) `)
if(entrada05=="sim"){
    for(entrada05,count05;entrada05=="sim";count05++,count_total++){
        entrada05 = prompt("Deseja entrar (sim ou nao) ")
    }
    console.log(`O aluno ${aluno05} entrou no restaurante ${count05} vezes.`)
    
}else{
    console.log("Até mais.")
}

console.log(`Entradas totais = ${count_total}`)


var percent_aluno01, percent_aluno02, percent_aluno03, percent_aluno04, percent_aluno05

percent_aluno01 = ((count01/count_total)*100).toFixed(2)
percent_aluno02 = ((count02/count_total)*100).toFixed(2)
percent_aluno03 = ((count03/count_total)*100).toFixed(2)
percent_aluno04 = ((count04/count_total)*100).toFixed(2)
percent_aluno05 = ((count05/count_total)*100).toFixed(2)

console.log(`O aluno ${aluno01} entrou no restaurante ${count01} vezes. Representando ${percent_aluno01}% das entradas.`)
console.log(`O aluno ${aluno02} entrou no restaurante ${count02} vezes. Representando ${percent_aluno02}% das entradas.`)
console.log(`O aluno ${aluno03} entrou no restaurante ${count03} vezes. Representando ${percent_aluno03}% das entradas.`)
console.log(`O aluno ${aluno04} entrou no restaurante ${count04} vezes. Representando ${percent_aluno04}% das entradas.`)
console.log(`O aluno ${aluno05} entrou no restaurante ${count05} vezes. Representando ${percent_aluno05}% das entradas.`)
}

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
    console.log(`O aluno ${aluno01.nome} entrou ${aluno01.contado}`)
}

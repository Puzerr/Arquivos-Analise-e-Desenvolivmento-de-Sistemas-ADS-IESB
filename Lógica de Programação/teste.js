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

/*--------------------------------------------------------*/

/*Escrever o nome, linha a linha, 10 vezes*/
{
const prompt = require("prompt-sync")({signit:true})

var entrada = prompt("Digite o seu nome: ")
var count = 0
const limite = 10

for(entrada;count<=limite;count++){
    console.log(count," - O seu nome é: ",entrada)
}
}

/*--------------------------------------------------------*/

/*Condicional com sexo e idade*/
{
const prompt = require("prompt-sync")({signit:true})

var nome = prompt("Digite o seu nome: ")
var idade = Number(prompt("Digite a sua idade: "))
var sexo = prompt("Digite o seu sexo (m ou f): ").toUpperCase()

if(sexo=="F" && idade<25){
    console.log("ACEITA")
}else{
    console.log("NAO ACEITA")
}
}

/*--------------------------------------------------------*/

/*Seletor de estado a partir da sigla, usando switch case*/
{
const prompt = require("prompt-sync")({signit:true})

var estado = prompt("Digite a sigla do seu estado: ")

switch(estado.toUpperCase()){
    case "RJ":
        console.log("Carioca")
        break;
    case "São Paulo":
        console.log("Paulista")
        break;
    case "MG":
        console.log("Mineiro")
        break;
    default:
        console.log("Outros Estados.")
}
}

/*--------------------------------------------------------*/

/*Manipulação de médias de números*/
{
var media1, media2, soma_media, media_media
media1 = (8+9+7)/3
media2 = (4+5+6)/3
soma_media = media1+media2
media_media = (media1+media2)/2
console.log(media1," ",media2," ",soma_media," ",media_media)
}

/*--------------------------------------------------------*/

/*Leitura de um número, adicionando e subtraindo de seu valor*/
{
const prompt = require("prompt-sync")({signit:true})

var entrada = Number(prompt("Digite um número: "))

if(entrada!=null && entrada!=undefined){
    console.log("O número escolhido foi: ",entrada)
    console.log("O sucessor é: ",entrada+1)
    console.log("O antecessor é: ",entrada-1)
}
}

/*--------------------------------------------------------*/



/*--------------------------------------------------------*/

/*Cálculo (errado) do consumo mensal de energia*/
{
const prompt = require("prompt-sync")({signit:true})

var consumo_energia = Number(prompt("Digite o seu consumo de energia em KW: "))
var salario = Number(prompt("Digite o seu salário: "))
var dia_pag = Number(prompt("Dia do pagamento: "))
const tarifa = salario/7
const limite_pag_dia = 5
var valor_final = 0

if(dia_pag == limite_pag_dia){
    valor_final = consumo_energia*tarifa
    valor_final = valor_final*0.9
    console.log("R$",valor_final.toFixed(2))
}else{
    valor_final = consumo_energia*tarifa
    console.log("R$",valor_final.toFixed(2))
}
}

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


//Exercício 02 - Indique o(s) tipo(s) de constante(s) como String, Number ou Boolean que pode(m) ser utilizado(s) para representar:
/* 
a. Nome de um país; String

b. Registro Geral (RG); Number ou String

c. Cadastro Nacional da Pessoa Jurídica (CNPJ); Number ou String

d. Se é ou não maior de idade; Booleano

e. Idade; Number

f. Endereço; String
*/


//Exercício 03 - Diga se são válidas as afirmações a seguir. Se não forem, explique por quê:
/*
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

const vetor1 = []; const vetor2 = []
var entrada = Number(prompt("Digite o seu número (9999 para sair): "))

while(entrada!=9999 && !isNaN(entrada)){
    if(entrada==9999){
        break
    }
    vetor1.push(entrada)
    vetor2.push(entrada)
    entrada = prompt("Digite novamente (9999 para sair): ")
}

for(i=0;i< vetor1.length;i++){
    if(vetor1[i]>vetor2[i++]){
        var maior = 0
        maior = vetor1[i]
    }else{
        console.log(maior)
        break
    }
}

for(i=0;i<= vetor1.length;i++){
    if(vetor1[i]==vetor2[i++]){
        var count = 1
        count = count+1
    }
}

console.log(`O maior número é o ${maior}`)
console.log(`Do total de ${vetor1.length} números, ${count} são iguais.`)
//importano a biblioteca para entrada de dados
const prompt = require('prompt-sync')()
// variaveis e constante
// função q serve para exibir na tela
// passo 1: receber o nome da pessoa
let nome  = 'ayrton'
// passo 2: receber a idade da pessoa
let idade = 69
// passo 3: receber o pesso da pessoa
let peso = 67.5
// passo 4: exibir o nome, a idade e o pesso
console.log(nome, idade, peso) 

// receber e amarzenar o texto em variavel
let curso = "desevolvimento de sistema"
// #tipo nome recebe valor na variavel
console.log("curso") // imprimo uma string(texto)
console.log(curso) // imprimi o valor que esta dentro da variavel
console.log("curso", curso);
// criando e atribuindo valor e outras variaveis 
let idade2 = 35 // valor do tipo int
let temperatura = 23.5; // valor do tipo float 
let nome2 = "lyuz"

console.log("ola", nome2, "voce tem:", idade2, "e hoje esta fazendo", temperatura, "ºc")
//usando template string
console.log(`ola ${nome2}, voce tem ${idade2} e hoje esta fazendo: ${temperatura}ºc`)

//utilizando prompt para recebr dados
// entrada de dados

// no prompt sempre recebemos um string
nome = prompt('qual e seu nome?')
idade = parseInt("qual sua idade")
peso = parseFloat(prompt('qual seu peso ?'))
console.log(`seu nome e ${nome}, voce tem${peso}`)
console.log(typeof(idade))
console.log(typeof(peso))
//apos a conversao dos valores e posivel realizar
//calculos matematicos
console.log(idade + peso)


//exercicios de variaveis 
nome3 = prompt('qual o seu nome de aluno?')
idade3 = parseInt(prompt('qual a sua idade?'))
escola = prompt('qual a sua escola?')
ano = prompt('qual o ano que você ingressou na escola')
console.log(`Seu nome é ${nome3}, você tem ${idade3}, estuda na escola ${escola}, ingressou nela em ${ano}`)

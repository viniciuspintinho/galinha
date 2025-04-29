const prompt = require("prompt-sync")();

//operação com variavel

let nr1 = Number(prompt('digite um numero'))
let nr2 = Number(prompt('digite um numero'))


let soma = nr1 + nr2
console.log(`a soma entre ${nr1} + ${nr2} é igual: ${soma}`)

let subtracao = nr1 - nr2
console.log(`a subtração entre ${nr1} - ${nr2} é igual: ${subtracao}`)

let multiplicacao = nr1 * nr2
console.log(`a multiplicação entre ${nr1} * ${nr2} é igual: ${multiplicacao}`)

let divisao = nr1 / nr2
console.log(`a divisão entre ${nr1} / ${nr2} é igual: ${divisao}`)

let exponenciacao = nr1 ** nr2
console.log(`a exponenciação entre ${nr1} ** ${nr2} é igual: ${exponenciacao}`)

// calculando o valor do celular com desconto
let valor = Number(prompt(' Digite o preco do celular'))
let desconto = Number(prompt(' Digite o desconto do celular'))
console.log(valor);
valor = valor - desconto
console.log(` o valor do celular com desconto é R$${valor}`);

//calcule o dobro e a metade
let numero = Number(prompt('digite um numero'))
let dobro = numero * 2
let metade = numero / 2
console.log(`o dobro de ${numero} e ${dobro} e a metade e ${metade}`)

///////

let cobrar = Number(prompt('quantos reais por hora eu irei cobrar'))
let horas_dia = Number(prompt('quantas horas por dia eu vou trabalhar?'))
let dias_trabalhos = Number(prompt('quantos dias eu vou trrabalhar trabalhar'))
console.log(`ao finaliza o projeto irei receber ${cobrar* horas_dia *dias_trabalhos}`)

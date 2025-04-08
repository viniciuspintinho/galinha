const prompt = require("prompt-sync")();

let a = 2
let b = 3
console.log(a == b)
console.log(a != b)
console.log(a > b)
console.log(a >= b)
console.log(a < b)
console.log(a <= b)

// Estruturas condicionais
let tenhoIngresso = true;
if(tenhoIngresso == true){
    // bloco de codigos
    console.log('posso entrar!');
}else{console.log('estou barrado')}

// receber o valor da idade
let idade = Number(prompt(' Qual sua idade?'))

// verificar se é maior ou igual a 18
if(idade >= 18){
    console.log('Maior idade');
}
tenhoIngresso = false
if(tenhoIngresso == true){

}

// outro exemplo de estrutura condicional (if-else)
idade = Number(prompt('digite a idade'))
// verificar se e maior que 18
if(idade >= 18){
    console.log('voce e maior de idade')
}
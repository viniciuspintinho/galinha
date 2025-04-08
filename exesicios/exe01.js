const prompt = require('prompt-sync')()
//peca ao usuario para digitar um numero
let numero = Number(prompt('digite um numero do 1 ao 7: '))
let dia = (1 && 31)
//exibir o dia correspondente
if(numero == 1){
console.log('domingo')
}
else if(numero == 2){
console.log('segunda')
}
else if(numero == 3){
    console.log('terca')
}
else if(numero == 4){
    console.log('quarta')
}
else if(numero == 5){
    console.log('quinta')
}
else if(numero == 6){
    console.log('sexta')
}
else if(numero == 7){
    console.log('sabado')
}
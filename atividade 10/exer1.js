const prompt = require("prompt-sync")();
let n1 = Number(prompt('digite um numero de 1 a 7: '))

switch( n1 ){
    case 1 :
        console.log('segunda')
        break
    case 2 :
        console.log('terça')
        break
    case 3 :
        console.log('quarta')
        break
    case 4 :
        console.log('quinta')
        break
    case 5 :
        console.log('sexta')
        break
    case 6 :
        console.log('sabado')
        break
    case 7 :
        console.log('domingo')
        break
}
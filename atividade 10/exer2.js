const prompt = require("prompt-sync")();

let anoAtual = parseInt(prompt( "em q ano estamos?"))
let anoNascimento = parseInt(prompt( ' digite o ano de nascimento'))
let idade = anoAtual - anoNascimento

switch(true){
    case idade < 10:
    console.log(" faixa etaria: crianca")
    break 
    case idade >= 11 & idade <= 17:
    console.log(" faixa etaria: adolecente")
    break
    case idade >= 18 && idade > 59:
        console.log(" faixa etaria: adulto")
        break
        case idade >= 60:
        console.log(" faixa etaria: idoso")
        break
        default:
            console.log('idade invalida');
            
}
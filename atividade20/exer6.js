const prompt = require("prompt-sync")()
let genero = prompt(`digite seu genero`). toUpperCase()
let altura = Number(prompt('digite a sua altura'))
let imc = peso / (altura ** 2)
if(genero == 'm'){
    console.log(` seu peso ideal e ${((72.7 * altura) - 58)}`) 
}else if (genero == 'F'){
    console.log(`seu peso ideal e ${(62.1 * altura) - 44.7}`)
}


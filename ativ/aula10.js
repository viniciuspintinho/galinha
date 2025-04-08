const prompt = require("prompt-sync")();

// exercicio 1

let temperatura = Number(prompt('digite a temperatura: '))

if (temperatura <= 15) {
    console.log("frio")
}
else if (temperatura <= 25){
    console.log("agradavel")
}
else if(temperatura <= 35){
    console.log("quente")
}else if (temperatura > 35 ){
    console.log("muito quente")
}

// exercicio 2

let hora = Number(prompt('digite o horario atual: '))

if (hora >= 5) {
    console.log("bom dia!")
}
else if (hora >= 12){
    console.log("boa tarde!")
}
else if(hora >= 18){
    console.log("boa noite!")
}else if (hora >= 0 ){
    console.log("boa madrugada!")
}

// exercicio 3


let preçoAL= Number(prompt('preço do alcool: '))
let preçoGA = Number(prompt('preço da gasolina: '))

let caulculo = preçoGA * 0.7

if(preçoAL < caulculo){
    console.log(`abasteça com alcool`)
}else if(preçoAL > caulculo){
    console.log(`abasteça com gasolina`)
}

const prompt = require('prompt-sync')()
let anoatual= Number(prompt('ano atual: '))
let anonascimento = Number(prompt('ano de nascimento: '))

switch (true){
    
}
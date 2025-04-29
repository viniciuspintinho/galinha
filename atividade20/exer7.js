const prompt = require("prompt-sync")()

let Htrabalhada= Number(prompt('quantidade de horas'))
let Gtrabalhada= Number(prompt('quantidade de ganhos por horas'))
let ganhoMes = Htrabalhada*Gtrabalhada *30
console.log(`voce ganha no mes ${ ganhoMes} de salario bruto, sendo ${ganhoMes*0.11} para o IR
    ${ganhoMes * 0.88} para o INNS e ${ganhoMes * 0.05}`)
const prompt = require("prompt-sync")()
let Htrabalhada= Number(prompt('quantidade de horas'))
let Gtrabalhada= Number(prompt('quantidade de ganhos por horas'))
let soma = Htrabalhada*Gtrabalhada
console.log(`a quantidade de horaas trabalhas vezes o valor de horas trabalhadas e ${soma}`)

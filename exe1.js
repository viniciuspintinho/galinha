console.log('###############################')
console.log("🐊  JOGO DA ADIVINHAÇÃO    🐊")
console.log('###############################')

let nrSORTEADO = Math.floor(Math.random() * 100 + 1)
let acertou = false
while(!acertou){
const chute = parseInt(prompt('🐊 digite entre 1 e 100 para acertar 👇'))

if(chute > nrSORTEADO){
    console.log(`você chutou ${chute} tente um numero 👆`)
}
else if(chute < nrSORTEADO){
    console.log(`você chutou ${chute}, 🎊 parabens você acertou! `)
    acertou = true
}
}
console.log('fim')


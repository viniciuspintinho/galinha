let carros = "gol;corsa;palio;monza;fusca;"
let listaCarros = carros.split(';')

listaCarros.pop()
for(let[posicao,carro] of listaCarros.entries()){
    console.log(`posicao ${posicao}: ${carro}`)
}

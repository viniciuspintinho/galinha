const prompt = require("prompt-sync")()
let vogais = ['a', 'e', 'i', 'o', 'u']
let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q'
    , 'r', 's', 't', 'v', 'x', 'y', 'w', 'z']
let letra = prompt('digite uma letra')

if(vogais.includes(letra.toLowerCase())){
console.log('é uma vogal')
}else if(consoantes.includes(letra.toLowerCase())){
console.log('é uma consoante')
}else{
console.log('não é uma letra')
}

// Obtendo a posição do item
for(let[pos,fruta] of frutas.entries()){
    // entries retorna o par de cada elemento do vetor
    // ou  seja  a posição  e a fruta
    console.log(`Posição${pos} e fruta${fruta}`);
   
}

// Separando os itens em uma lista
let produtos = 'Celular, Notebook, TV, Tablet, Headset'
for (let produtos of listaProdutos){
    console.log(produtos);
   
}

// Percorrendo uma string como uma lista(lista caracteres)
let palavra = 'senai'
for(let letra of palavra){
    console.log(letra);
   
}
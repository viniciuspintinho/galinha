const prompt = require("prompt-sync")()
let listNome= []
function addNome(){
    listNome.push(prompt('digite um nome para add a lista'))
    console.log(listNome)   
}
function romeveNome(){
    listNome.pop()
    console.log(listNome)
}
addNome()
addNome()
romeveNome()
addNome()
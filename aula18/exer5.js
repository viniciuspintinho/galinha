const prompt = require("prompt-sync")()
let saldo = 0
let ac = 'usando'
function sacar(qnt){
    saldo-= qnt
}
function depositar(){
    saldo += qnt
}
while (ac != 'sair'){
    ac = prompt('digite uma açao (sacar ou depositar, "sair para feixar o programa"')
    if (ac == ' sacar'){
        sacar (Number(prompt('digite um valor para sacar ')))
    }else if (ac == 'depositar'){
        depositar(Number(prompt('digite um valor para depositar')))
    }else{
        console.log('açao invalida');
    }
}
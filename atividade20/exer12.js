let pares = []
let impares = []
for(let i = 0; i <10; i++){
    let numero = Number(prompt('digite um numero'))
    if (numero % 2 ==0){
        pares.push(numero)
}else{
    impares.push(numero)
}
}
console.log(pares);
console.log(impares);

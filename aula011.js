let soma2 = 0
let qtd2 = 0
let encerrar = ''
while (encerrar != 'SUB-TOTAL'){
    let valor2 = Number(prompt('Digite o valor de um produto(0 para encerrar): '))
        soma2 = soma2 + valor2
        qtd2 ++
    encerrar = prompt('Deseja continuar: (Digite SUB-TOTAL')
}

console.log(`Foram informados ${qtd2}`);
// tofixe para colocar apenas 2 digitos apos a virgula
console.log(`valor total dos produtos ${soma2.toFixed(2)}`);
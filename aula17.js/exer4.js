function Divisao(n1, n2){
    if(n2 == 0){
    console.log('erro: divisao por zero nao e possivel')
    return
}    
    let resultado = n1/n2
    console.timeLog(`o resultado da divisao de ${n1} / ${n2} = ${resultado}`)

}
divisao(2,7)
divisao(6,9)
divisao(14,3)
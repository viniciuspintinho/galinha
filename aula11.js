let contador = 1;

while(contador <= 5){
console.log(`o contador e ${contador}`)
contador = contador + 1;
}

console.log("fim")

let senha_senai = '12345'

while(true){
    let senha = prompt("digite a senha")
    if(senha_senai == senha){
        console.log('voce hackeou a senha')
        break
    }else if(senha == 'desisto'){
        break
    }
}
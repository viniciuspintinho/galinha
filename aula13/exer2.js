const prompt = require('prompt-sync')();

let filmes = ["velozes e furiosos desafio em tokyo", "Como treinar seu dragão","patrulha canina","Fast and furious 7","wood woodpeacker", "vingadores"];
console.log(filmes [3]);
filmes.splice(6, 0, "NEED FOR SPEED")
console.log(filmes);

filmes = [...filmes, 'Araxá world cup 2025']
console.log(filmes);

filmes.splice(4, 0, "Raulzito")
console.log(filmes);

filmes.shift()

filmes.pop()

console.log(filmes.slice(0,3));

console.log(filmes.slice(3,7));

console.log(filmes.length);

console.log(filmes.slice(-1));
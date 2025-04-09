alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');


if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o ${numeroSecreto}`); // Para interpolar variavel dentro da string, você deve usar `` (backticks ou crase).
}
else {
    alert('Numero incorreto!')  // Caso o 'if' não ocorra, o comando dentro da função 'else' é executada.
}
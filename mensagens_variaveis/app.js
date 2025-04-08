// Esta linha exibe uma mensagem de alerta na tela informando ao usuário que ele está entrando no jogo.
alert("Bem vindo ao jogo do numero secreto!");

// Aqui, estamos declarando uma variável chamada numeroSecreto e atribuindo a ela o valor 29.
let numeroSecreto = 29;

// A função prompt mostra uma caixa de diálogo onde o usuário pode inserir seu número. 
// O valor digitado será armazenado na variável palpite.
let palpite = prompt("Digite aqui seu palpite entre 1 e 29");

// Esta estrutura condicional verifica se o número digitado pelo usuário é igual ao número secreto.
if (numeroSecreto == palpite) {
    // Se a condição acima for verdadeira, esta linha exibirá a mensagem "Voce acertou!" no console do navegador.
    console.log("Voce acertou!");
}
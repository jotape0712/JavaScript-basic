alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// Cria um loop que enquanto a variavel "chute" for diferente da variavel "numeroSecreto" o codigo continuara.
while (chute != numeroSecreto) { 
    chute = prompt('Qual o numero secreto? ')


    
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o ${numeroSecreto} depois de ${tentativas} tentativas!`); // Para interpolar variavel dentro da string, você deve usar `` (backticks ou crase).
        
        
    }
    else {
        
        if (chute < numeroSecreto) {
            alert(`O numero secreto é maior que ${chute}!`)
        }  else {
            alert(`O numero secreto é menor que ${chute}!`)
        }
        // tentativas = tentativas + 1
        tentativas++; 
            
    }
}





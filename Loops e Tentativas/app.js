alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 10);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// Cria um loop que enquanto a variavel "chute" for diferente da variavel "numeroSecreto" o codigo continuara.
while (chute != numeroSecreto) { 
    chute = prompt('Qual o numero secreto? ')


    
    if (chute == numeroSecreto) {
        break;  
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

                                       // caso sim     \\ caso não
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'   // Podemos usar um IF diferente, usando da formula mostrada para definir dois diferentes caminhos.


alert(`Isso aí! Você descobriu o ${numeroSecreto} depois de ${tentativas} ${palavraTentativa}`);












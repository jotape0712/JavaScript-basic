
alert('Boas vindas ao jogo do número secreto');

let numeroMaximo = 1000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;
let margem = CSSMathMax.numeroSecreto
    




while (chute != numeroSecreto) { 
    chute = prompt(`Adivinhe o numero entre 1 e ${numeroMaximo}: `)


    
    if (chute == numeroSecreto) {
        break;  
    }
    else {
        
        if (chute < numeroSecreto) {
            alert(`O numero secreto é maior que ${chute}!`)
        }  else {
            alert(`O numero secreto é menor que ${chute}!`)
        }
        
        tentativas++; 
            
    }

}  

                                       
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'   


alert(`Isso aí! Você descobriu o ${numeroSecreto} depois de ${tentativas} ${palavraTentativa}`);












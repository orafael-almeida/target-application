const question1 = `Observe o trecho de código abaixo: 
int INDICE = 13, SOMA = 0, K = 0; 
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } 
Imprimir(SOMA); 

Ao final do processamento, qual será o valor da variável SOMA?
`;
console.log("❓ Pergunta: ", question1);

function sumLoop() {
  const index = 13;
  let sum = 0;
  let k = 0;

  while (k < index) {
    k = k + 1;
    sum = sum + k;
  }
  return (result = `Ao final do processamento, o valor da variável SOMA é: ${sum}! ✅`);
}

sumLoop();
console.log("\x1b[32m===========================================\x1b[0m");
console.log(result);

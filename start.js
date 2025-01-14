const readline = require("readline");
const { exec } = require("child_process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "Questão 1 - Estrutura de repetição",
  "Questão 2 - Proporção Áurea",
  "Questão 3 - Cálculo de faturamento diário",
  "Questão 4 - Cálculo de faturamento mensal",
  "Questão 5 - Inversor de palavras",
];

function showMenu() {
  console.log("\x1b[32m===========================================\x1b[0m");
  console.log("👉 Escolha qual pergunta deseja executar: \n");
  questions.forEach((question, index) => {
    console.log(`${index + 1}. ${question}`);
  });
  console.log("-------------------------------------------");
  console.log(`6. ❌ Encerrar programa`);
  console.log("\x1b[32m===========================================\x1b[0m");
}

function mainMenu() {
  console.clear();
  showMenu();
  rl.question("\nDigite o número da opção para ver o resultado: ", (answer) => {
    const choice = Number(answer);

    if (choice >= 1 && choice <= questions.length) {
      const filePath = `src/question${choice}.js`;
      console.log(`\nAbrindo o arquivo: ${filePath}`);

      exec(`node ${filePath}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Erro ao executar o arquivo: ${error.message}`);
          return backToMenu();
        }
        if (stderr) {
          console.error(`Erro: ${stderr}`);
          return backToMenu();
        }
        console.log(
          "\x1b[32m===========================================\x1b[0m"
        );
        console.log(stdout);
        backToMenu();
      });
    } else if (choice === 6) {
      console.log("Encerrando o programa.");
      rl.close();
    } else {
      console.log("Opção inválida.");
      mainMenu();
    }
  });
}

function backToMenu() {
  rl.question(
    "\nDeseja voltar ao menu ou encerrar o programa? (1: Voltar, 2: Encerrar): ",
    (answer) => {
      if (answer === "1") {
        console.clear();
        mainMenu();
      } else if (answer === "2") {
        console.log("Encerrando o programa.");
        rl.close();
      } else {
        console.log("Opção inválida. Digite 1 para voltar ou 2 para encerrar.");
        backToMenu();
      }
    }
  );
}

mainMenu();

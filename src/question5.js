const word = "target sistemas";

async function reverseWords(stringToReverse) {
  let reversedString = "";

  console.log("⚙️ Iniciando a reversão da palavra: ", word);
  for (let i = stringToReverse.length - 1; i >= 0; i--) {
    reversedString += stringToReverse[i];
    console.log(stringToReverse[i]);
  }
  console.log("✅ Reversão concluída.");
  console.log(`Palavra ao contrário: ${reversedString}`);
}

reverseWords(word);

const fs = require("node:fs");
const content = "Escrevendo\n ";

fs.appendFile("./arquivo.txt", content, "utf-8", (error) => {
  if (error) {
    console.log("Houve um erro ao escrever o arquivo: ", error.message);
    return;
  }
  console.log("Arquivo escrito com sucesso!");
});

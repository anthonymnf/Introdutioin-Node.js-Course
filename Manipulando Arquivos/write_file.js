const fs = require("node:fs");
const content = "Testandoooooo2";
fs.writeFile("./arquivo.txt", content, "utf-8", (error) => {
  if (error) {
    console.log("Houve um erro ao escrever o arquivo: ", error.message);
    return;
  }
  console.log("Arquivo escrito com sucesso!");
});

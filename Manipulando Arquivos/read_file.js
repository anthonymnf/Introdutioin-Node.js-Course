const fs = require("node:fs");

fs.readFile("./arquivoRenomeado.csv", "utf-8", (error, data) => {
  if (error) {
    console.log("Houve um erro ao escrever o arquivo: ", error.message);
    return;
  }
  console.log(data);
});

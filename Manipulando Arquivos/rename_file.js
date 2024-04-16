const fs = require("node:fs");

fs.rename("./arquivo.txt", "./arquivoRenomeado.csv", (error) => {
  if (error) {
    console.log("Ocorreu um erro: ", error.message);
    return;
  }
  console.log("Arquivo renomeado com sucesso!");
});

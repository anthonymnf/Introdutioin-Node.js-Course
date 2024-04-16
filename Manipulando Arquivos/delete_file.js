const fs = require("node:fs");

fs.unlink("./arquivo.txt", (error) => {
  if (error) {
    console.log("Ocorreu um erro: ", error.message);
    return;
  }
  console.log("Arquivo excluído com sucesso!");
});

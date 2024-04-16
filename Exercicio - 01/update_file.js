import fs from "node:fs";

export default function updateFile(content) {
  fs.writeFile("./meuarquivo.txt", content, "utf-8", (error) => {
    if (error) {
      console.log("Houve um erro ao escrever o arquivo: ", error.message);
      return;
    }
    console.log("Arquivo escrito com sucesso!");
  });
}

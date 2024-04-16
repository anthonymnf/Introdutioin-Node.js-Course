import fs from "node:fs";

export default function showFile() {
  fs.readFile("./meuarquivo.txt", "utf-8", (error, data) => {
    if (error) {
      console.log("Houve um erro ao escrever o arquivo: ", error.message);
      return;
    }
    console.log(data);
  });
}

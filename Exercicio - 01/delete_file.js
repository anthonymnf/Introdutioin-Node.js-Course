import fs from "node:fs";

export default function deleteFile() {
  fs.unlink("./declaration.txt", (error) => {
    if (error) {
      console.log("Ocorreu um erro: ", error.message);
      return;
    }
    console.log("Arquivo excluído com sucesso!");
  });
}

/* Crie uma aplicação de linha de comando usando Node.js para criar e gerenciar anotações 
rápidas pelo terminal. A aplicação deve possuir um menu de diferentes opções permitindo:
  (X) Criar interação no terminal
  (X) criar anotações
  (X) listar todas os arquivos salvos
  (X) ler uma anotação específica 
  (x) excluir uma anotação específica. 
  (X) Todas as anotações devem ser salvas em formato .txt dentro de uma 
  pasta “notes” junto com o próprio script principal. 
*/

const fs = require("node:fs");
const path = require("node:path");
const readline = require("node:readline");

const pathNotes = "./notes";

if (!fs.existsSync(pathNotes)) {
  fs.mkdirSync(pathNotes);
}
function createNote(text, noteName) {
  const noteFilePath = path.join(pathNotes, `${noteName}.txt`);
  fs.writeFileSync(noteFilePath, text, "utf-8");
}

// Função para listar todos os arquivos .txt na pasta "notes"
function listNotes() {
  fs.readdir(pathNotes, (err, files) => {
    if (err) {
      console.error('Erro ao ler a pasta "notes":', err);
      return;
    }

    const txtFiles = files.filter((file) => path.extname(file) === ".txt");

    if (txtFiles.length === 0) {
      console.log("Nenhuma anotação encontrada.");
    } else {
      console.log("Anotações encontradas:");
      txtFiles.forEach((file) => console.log(file));
    }
  });
}

function deleteFile(fileName) {
  fs.unlink(`${pathNotes}/${fileName}.txt`, (error) => {
    if (error) {
      console.log("Ocorreu um erro: ", error.message);
      return;
    }
    console.log("Anotação excluída com sucesso!");
  });
}

function readFile(fileName) {
  fs.readFile(`${pathNotes}/${fileName}.txt`, "utf-8", (error, data) => {
    if (error) {
      console.log("Houve um erro ao escrever o arquivo: ", error.message);
      return;
    }
    console.log(data);
  });
}

function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
      rl.close();
    });
  });
}

async function userInteration() {
  console.log("---------------------");
  console.log("Node.js Manager Notes v1.0");
  console.log("---------------------\n");
  console.log("Opções disponíveis: ");
  console.log("1 - Criar anotação.");
  console.log("2 - Listar todas as anotações salvas.");
  console.log("3 - Ler anotação.");
  console.log("4 - Remover anotação.");
  const option = await ask("Qual opção você deseja?\n");
  switch (option) {
    case "1":
      const text = await ask("Informe o texto da anotação: ");
      const noteName = await ask("Informe o nome da anotação: ");
      createNote(text, noteName);
      break;
    case "2":
      listNotes();
      break;
    case "3":
      const fileName = await ask("Informe o nome da anotação: ");
      readFile(fileName);
      break;
    case "4":
      const removeNoteName = await ask("Informe o nome da anotação: ");
      deleteFile(removeNoteName);
      break;

    default:
      console.log("Opção inválida, tente novamente");
      userInteration();
      break;
  }
}

userInteration();

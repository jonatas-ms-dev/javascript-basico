/*desafio do código 1
console.log("Olá mundo");
*/

//desafio do código 2
//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();

//Lendo dados
stdin.addListener("data", (text) => {
  const textoLido = text.toString().trim();

  stdin.pause(); // stop reading

  main(Number(textoLido));
});

//Função
function main(textoLido) {
  console.log(Number.isInteger(textoLido));
}

/*desafio do código 1
console.log("Olá mundo");
*/

/*desafio do código 2
//Função
function main(textoLido) {
  console.log(Number.isInteger(textoLido));
}
*/

/*desafio do código 3
//Função
function main(valor1, valor2) {
  console.log(Number(valor1) + Number(valor2));
  console.log(Number(valor1) - Number(valor2));
}
*/

/*desafio do código 4
//Função
function main(valor1, valor2) {
  console.log((valor1 / valor2).toPrecision(4));
  console.log((valor1 * valor2).toPrecision(4));
}
*/

/*desafio do código 5
//Função
function main(valor1, valor2) {
  console.log(valor1 === valor2 ? 1 : 0);
}
*/
//desafio do código 6
try {
  var nome = "Treinaweb";
  let curso = "JavaScript Básico";
  const PI = 3.14;

  //Não precisa se preocupar com este código
  try {
    PI = 3;
    console.log("A variável definida precisa ser uma constante!");
  } catch (e) {
    console.log(PI);
  }

  console.log(curso);
} catch (e) {}

console.log(nome);

try {
  console.log(curso);
} catch (e) {}

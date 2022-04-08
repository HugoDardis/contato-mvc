// Importar a boblioteca nativa de manipulação 
const fs = require('fs');

// Criar e exportar uma função middleware:
// A função deve registrar a data e a hora em que
// a requisição foi realizada.
module.exports = (req, res, next) => {

  // Capturar a string com a data e a hora
  let datahora = (new Date()).toISOString();

  // Escrever em um arquivo (com quebra de linha) (outra forma)fs.appendFileSync('dataAcesso.txt', (dataAtual + "/n"))
  fs.writeFileSync(
    'hora_acessado.txt', 
    (datahora + "\n"), 
    {flag:'a+'}
    );


  // Executar a função next para direcionar a req para
  // o próximo middleware

  next();

}
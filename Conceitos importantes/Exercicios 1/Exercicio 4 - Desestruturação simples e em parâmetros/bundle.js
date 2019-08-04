"use strict";

/*
4º exercício
*/
//4.1 Desestruturação simplesA partir do seguinte objeto:
var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
}; // Utilize a desestruturação para transformar as propriedades nome, 
// cidade e estado em variáveis, nofim deve ser possível fazer o seguinte:

var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome); // Rocketseat

console.log(cidade); // Rio do Sul

console.log(estado); // SC
//4.2 Desestruturação em parâmetros
//Na seguinte função:

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

mostraInfo({
  nome: "Diego",
  idade: 23
}); //Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
//separadamente e a função poder retornar apenas:
// --- >>>>>>>>>>> return `${nome} tem ${idade} anos.`;

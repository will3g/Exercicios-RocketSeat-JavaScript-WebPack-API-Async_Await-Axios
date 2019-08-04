"use strict";

//----------------------------------------------------------------------------------//
var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //----------------------------------------------------------------------------------//
//Utilizando o [ .map ] crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

var idadesUsers = usuarios.map(function (item) {
  return item.idade;
});
console.log("Idades dos usu\xE1rios: ".concat(idadesUsers)); //----------------------------------------------------------------------------------//
//Utilizando o [ .filter ] crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18anos: 
//  [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

var users = usuarios.find(function (item) {
  if (item.idade >= 18 && item.empresa === "Rocketseat") {
    return item;
  }
});
console.log(users); //----------------------------------------------------------------------------------//
//Utilizando o [ .find ] crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

var finder = usuarios.find(function (item) {
  if (item.empresa === 'Google') {
    return item; //Se tiver ele vai retornar o objeto que contenha empresa:"Google"
  }
});
console.log(finder); //----------------------------------------------------------------------------------//
//Unindo operações - Multiplique a idade de todos usuários por dois 
//e depois realize um filtro nos usuários que possuemno máximo 50 anos:

var dobroIdade = usuarios.map(function (item) {
  return {
    nome: item.nome,
    idade: item.idade * 2,
    empresa: item.empresa
  };
});
var filtroDobroIdade = dobroIdade.filter(function (item) {
  return item.idade <= 50 ? item : '';
});
console.log(filtroDobroIdade); //----------------------------------------------------------------------------------//

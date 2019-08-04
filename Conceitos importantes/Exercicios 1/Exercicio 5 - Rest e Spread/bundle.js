"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//5º Exercício
//Utilizando o operador de rest/spread (...) realize as seguintes operações:
//5.1 RestA partir do array: const arr = [1, 2, 3, 4, 5, 6], 
// defina uma variável x que recebe a primeiraposição do vetor 
// e outra variável y que recebe todo restante dos dados.
var arr = [1, 2, 3, 4, 5, 6];
var x = arr[0],
    y = arr.slice(1);
console.log(x);
console.log(y); //Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

var soma = function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (antecessor, proximo) {
    antecessor + proximo;
  });
};

console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3
//5.2 Spread
//A partir do objeto e utilizando o operador spread:

var usuario1 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
}; //Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.

var usuario2 = _objectSpread({}, usuario1, {
  nome: 'Gabriel'
});

console.log(usuario2); //Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.

var usuario3 = _objectSpread({}, usuario1, {
  endereco: _objectSpread({}, usuario1.endereco, {
    cidade: 'Lontras'
  })
});

console.log(usuario3);

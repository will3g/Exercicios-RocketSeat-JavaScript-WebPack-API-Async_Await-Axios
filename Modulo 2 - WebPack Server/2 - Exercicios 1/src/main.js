import * as classeUsuario from './funcao';
var idadeUsuario = classeUsuario.idade;

alert("Bem vindo ao localhost:8080! :D");

classeUsuario.default.info();
console.log(idadeUsuario);

function exibe(idade) {
    console.log("Entrou na função!");

    var elementoPai = document.querySelector('.container');
    var texto = document.createTextNode(`Idade do usuário: ${idade}`);
    var p = document.querySelector('#paragrafo');

    p.appendChild(texto);
    elementoPai.appendChild(p);
}
exibe(idadeUsuario);
//  3º exercício
//
//  Converta as funções nos seguintes trechos de código em Arrow Functions:

//3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = (usuario => usuario.idade);
mostraIdade(usuario);

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;

const mostraUsuario = ((nome = 'Diego', idade = 18) => { return { nome, idade }; });
mostraUsuario(nome, idade);
mostraUsuario(nome);


// 3.4
// const promise = function() {
//     return new Promise(function(resolve, reject) {
//         return resolve();
//     })
// }
//
//  PARA
//
const promise = () => {
    return new Promise((resolve, reject) => { return resolve(); });
}
promise();
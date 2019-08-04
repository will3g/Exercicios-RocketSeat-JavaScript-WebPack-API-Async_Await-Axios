//5º Exercício
//Utilizando o operador de rest/spread (...) realize as seguintes operações:

//5.1 RestA partir do array: const arr = [1, 2, 3, 4, 5, 6], 
// defina uma variável x que recebe a primeiraposição do vetor 
// e outra variável y que recebe todo restante dos dados.
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;
console.log(x);
console.log(y);

//Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
const soma = (...params) => {
    return params.reduce((antecessor, proximo) => { antecessor + proximo });
};
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

//5.2 Spread
//A partir do objeto e utilizando o operador spread:
const usuario1 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
//Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
const usuario2 = {...usuario1, nome: 'Gabriel' };
console.log(usuario2);

//Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.
const usuario3 = {...usuario1, endereco: {...usuario1.endereco, cidade: 'Lontras' } };
console.log(usuario3);
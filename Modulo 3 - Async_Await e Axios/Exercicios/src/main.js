import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try { //Tente
            const response = await axios.get(`https://api.github.com/users/${username}/repos`);
            //const response = await axios.get(`https://api-pacientes.herokuapp.com/${username}`);
            console.log(response);
        } catch (err) { //Se não der certo
            console.warn("Erro na requisição.");
        }
    }
}

// Api.getUserInfo('diego3g');

//-------------------------------------------------------------------------------------------------------//
//Ex 1
// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    console.log("1s");
    await delay();
    console.log("2s");
    await delay();
    console.log("3s");
    await delay();
}
//umPorSegundo();

//-------------------------------------------------------------------------------------------------------//
//Ex 2
async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data);
    } catch (err) {
        console.log('Usuário não existe');
    }
}
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

//-------------------------------------------------------------------------------------------------------//
//Ex 3

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/users/${repo}/repos`)
            console.log(response.data);
        } catch (err) {
            console.log('Repositório não existe');
        }
    }
}
// Github.getRepositories('diego3g');
// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');
// Github.getRepositories('WillCamelCase');


//-------------------------------------------------------------------------------------------------------//
//Ex 4

const buscaUsuario = async(usuario) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch {
        console.log('Usuário não existe');
    }
}

//buscaUsuario('diego3g');
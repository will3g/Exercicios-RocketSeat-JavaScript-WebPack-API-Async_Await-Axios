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

Api.getUserInfo('diego3g');
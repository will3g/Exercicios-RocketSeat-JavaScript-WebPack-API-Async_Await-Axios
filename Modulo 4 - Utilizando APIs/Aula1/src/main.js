import api from './api'; //Importação do axios

class BuscaRepositorios {
    constructor() {
        this.repositorios = [];

        this.mensagem = document.querySelector("#mensagem-erro");

        this.formSubmit = document.getElementById("form");
        this.inputEl = document.querySelector("input[name=repositorio]");
        this.ul = document.getElementById("list");

        this.registraSubmit(); //Execute registraSubmit(). A função fica escutando o click
    }

    registraSubmit() {
        this.formSubmit.onsubmit = event => this.addRepositorio(event); //Quando o usuário subimeter o form,
        // chame ->>>> this.addRepositorio(event)
    }

    carregando(loading = true) {
        if (loading === true) {
            let span = document.createElement('span');
            span.appendChild(document.createTextNode("Carregando..."));
            span.setAttribute('id', 'loading');

            this.formSubmit.appendChild(span);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepositorio(event) {
        event.preventDefault(); //Evita o "costume" padrão dos navegadores

        const inputRepo = this.inputEl.value;

        if (inputRepo.length === 0) //Se o tamanho do input for igual a zero, retorne
            return;

        this.carregando();

        try {
            const response = await api.get(`/repos/${inputRepo}`); //Fazendo requisição a api do github

            //Desestruturação do array que o git devolve como response
            const { name, description, html_url, owner: { avatar_url } } = response.data; //Seleção dos elementos que queremos utilizar
            //O avatar_url está dentro de "owner:" por conta disso devemos selecionar dessa maneira ->>> owner: { avatar_url } 

            this.repositorios.push({ //Adicionando os elementos no array repositorios
                name,
                description,
                avatar_url,
                html_url,
            });

            this.renderiza();

            this.inputEl.value = '';

        } catch (err) {

            this.mensagem.classList.add('mensagem-erro-exibe');
            this.inputEl.value = '';
            setInterval(t => { this.mensagem.classList.remove('mensagem-erro-exibe'); }, 3000);
        }

        this.carregando(false);

    }

    renderiza() { //Criação de cada mini-container
        this.ul.innerHTML = ''; //Limpa a variável ul

        this.repositorios.forEach(repo => { //Para cada item no array, crie...
            let linkimg = document.createElement('a');
            let imgEl = document.createElement('img'); //Uma tag img
            imgEl.setAttribute('src', repo.avatar_url); //Com o arquivo -> src"repo.avatar_url"
            linkimg.setAttribute('href', repo.html_url); //A tragetória da tag a será para repo.html_url
            linkimg.appendChild(imgEl);


            let titleEl = document.createElement('strong'); //Crie um strong
            titleEl.appendChild(document.createTextNode(repo.description)); //Crie um texto com repo.description e coloque dentro da tag strong

            let descriptionEl = document.createElement('p'); //Crie a tap p
            descriptionEl.appendChild(document.createTextNode(repo.name)); //Crie o texto repo.name e coloque o texto dentro da tag p

            let linkEl = document.createElement('a'); //Crie uma tag a
            linkEl.setAttribute('target', '_blank'); //A tragetória será aberta em uma nova aba ( _blank )
            linkEl.setAttribute('href', repo.html_url); //A tragetória da tag a será para repo.html_url
            linkEl.appendChild(document.createTextNode('Acessar')); //Crie um texto 'Acessar' e coloque dento da tag a

            let li = document.createElement('li'); //Crie um novo li
            li.appendChild(linkimg); //Adicione a imagem
            li.appendChild(titleEl); //Adicione o titulo
            li.appendChild(descriptionEl); //Adicione a descrição
            li.appendChild(linkEl); //Adicione o link

            this.ul.appendChild(li); //Adicione o li na tag ul
        });

    }
}

new BuscaRepositorios();
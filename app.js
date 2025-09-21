let amigos = [];

function adicionarAmigo(){
    let input = document.getElementById("amigo");
    let nome = input.value;

    if(nome != ""){
        if (amigos.includes(nome)) {
            console.log(`${nome} já está na lista de amigos.`);
        } else {
            amigos.push(nome);
            console.log(`${nome} foi adicionado à lista de amigos.`);
            input.value = "";

            atualizarListaAmigos();
        }
    }else{
        console.log(`nenhum nome digitado`);
        alert("Por favor, insira um nome.");
    }
}

function atualizarListaAmigos (){
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i =0; i < amigos.length; i++){
        const li = document.createElement('li');

        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    
    if(amigos.length != 0){
        let arrayIndice = Math.floor(Math.random() * amigos.length);// * Gerar um índice aleatório
        let amigoSorteado = amigos[arrayIndice]; // * Obter o nome sorteado

        const listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = "";

        const li = document.createElement('li');
        li.textContent = amigoSorteado; // * Mostrar o resultado

        listaAmigos.appendChild(li);

    }else{
        alert('Lista de amigos Vazia. Favor realizar o cadastro de um amigo para ser sorteado!')
    }
}
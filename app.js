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
        }
    }else{
            console.log(`nenhum nome digitado`);
            alert("Por favor, insira um nome.");
    }
}
// Funcao para reproduzir som
function tocaSomPom () {
    
    document.querySelector('#som_tecla_pom').play();
    return 'tocou pom'
}

// Criando lista de itens a partir da classe do elemento button
const listaDeTeclas = document.querySelectorAll('.tecla');

// Acessando todos os elementos da lista
listaDeTeclas[0].onclick = tocaSomPom;





// Funcao para reproduzir sons
function tocaSom (idElementoAudio) {
    
    document.querySelector(idElementoAudio).play();
    return 'tocou som'
}

// Criando lista de itens a partir da classe do elemento button
const listaDeTeclas = document.querySelectorAll('.tecla');

// // Contador de repeticoes
// let contador = 0;

// // Estrutura de repeticoes while
// while (contador < listaDeTeclas.length) {

//     const tecla = listaDeTeclas[contador]
    
//     // capurando texto dinamico da tag button
//     const instrumento = tecla.classList[1];
    
//     // template string
//     const idAudio = `#som_${instrumento}`;

//     tecla.onclick = function () {
//         tocaSom(idAudio);
//     }

//     contador += 1 

// }

// Estrutura de repeticoes for
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];  // capurando texto dinamico da tag button
    const idAudio = `#som_${instrumento}`; // template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

}



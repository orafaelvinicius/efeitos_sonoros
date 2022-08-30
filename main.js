// Funcao para reproduzir sons
function tocaSom (seletorAudio) {
    
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play()
    }
    else {
        alert('Elemento ou seletor inválido')
        console.log('Elemento ou seletor inválido')
    }
}

// Criando lista de itens a partir da classe do elemento button
const listaDeTeclas = document.querySelectorAll('.tecla');

// Estrutura de repeticoes for (otimizando o while)
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];  // capurando texto dinamico da tag button
    const idAudio = `#som_${instrumento}`; // template string
    
    // funcao para click na tecla
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    // funcao para tecla apertada
    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter') {
            tecla.classList.add('ativa');
        }
    }

    // funcao para tecla solta
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

}


// // Estrutura de repeticoes while

// // Contador de repeticoes
// let contador = 0;

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

function tocaSomPom () {
    
    document.querySelector('#som_tecla_pom').play();
    return 'tocou pom'
}
document.querySelector('.tecla_pom').onclick=tocaSomPom;

function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
    return 'tocou clap'
}
document.querySelector('.tecla_clap').onclick=tocaSomClap;




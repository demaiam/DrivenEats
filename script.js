let prato = '';
let bebida = '';
let sobremesa = '';

function zap(prato){
    let aux = prato.querySelector('.descricao-produto');
    alert(aux);
}

function verificaPedido() {
    const botaoRodape = document.querySelector('.botao-rodape');

    const botaoRodapePronto = document.querySelector('.botao-rodape-pronto');

    if (prato != '' && bebida != '' && sobremesa != '') {
        botaoRodape.classList.add('escondido');
        botaoRodapePronto.classList.remove('escondido');
        zap();
    }
}

function escolherPrato(botao) {
    prato = botao.innerHTML;
    
    const botaoSelecionadoAnteriormente = document.querySelector('.prato .selecionado');
    const verificadoAnterior = document.querySelector('.prato .selecionado .icone');

    const verificado = botao.querySelector('.icone');

    if (botaoSelecionadoAnteriormente !== null) {
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
        verificadoAnterior.classList.add('escondido');
    }

    botao.classList.add('selecionado');
    verificado.classList.remove('escondido');

    verificaPedido();
}

function escolherBebida(botao) {
    bebida = botao.innerHTML;
    
    const botaoSelecionadoAnteriormente = document.querySelector('.bebida .selecionado');
    const verificadoAnterior = document.querySelector('.bebida .selecionado .icone');

    const verificado = botao.querySelector('.icone');

    if (botaoSelecionadoAnteriormente !== null) {
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
        verificadoAnterior.classList.add('escondido');
    }

    botao.classList.add('selecionado');
    verificado.classList.remove('escondido');

    verificaPedido();
}

function escolherSobremesa(botao) {
    sobremesa = botao.innerHTML;
    
    const botaoSelecionadoAnteriormente = document.querySelector('.sobremesa .selecionado');
    const verificadoAnterior = document.querySelector('.sobremesa .selecionado .icone');

    const verificado = botao.querySelector('.icone');

    if (botaoSelecionadoAnteriormente !== null) {
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
        verificadoAnterior.classList.add('escondido');
    }

    botao.classList.add('selecionado');
    verificado.classList.remove('escondido');

    verificaPedido();
}
let nomePrato = '';
let nomeBebida = '';
let nomeSobremesa = '';
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;

function fecharPedido() {
    let celular = '5551998696685';
    let valorTotal = precoPrato + precoBebida + precoSobremesa;
    let mensagem = "Olá, gostaria de fazer o pedido:\n- Prato: " + nomePrato + "\n- Bebida: " + nomeBebida + "\n- Sobremesa: " + nomeSobremesa + "\nTotal: R$ " + valorTotal.toFixed(2);
    mensagem = encodeURIComponent(mensagem);
    window.open("https://wa.me/" + celular + "?text=" + mensagem);
}

function verificaPedido() {
    const botaoRodape = document.querySelector('.botao-rodape');

    const botaoRodapePronto = document.querySelector('.botao-rodape-pronto');

    if (nomePrato != '' && nomeBebida != '' && nomeSobremesa != '') {
        botaoRodape.classList.add('escondido');
        botaoRodapePronto.classList.remove('escondido');
    }
}

function escolherPrato(botao) {
    nomePrato = botao.querySelector('.nome-produto');
    nomePrato = nomePrato.innerHTML;
    precoPrato = botao.querySelector('.preco');
    precoPrato = precoPrato.innerHTML;
    precoPrato = Number(precoPrato);
    
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
    nomeBebida = botao.querySelector('.nome-produto');
    nomeBebida = nomeBebida.innerHTML;
    precoBebida = botao.querySelector('.preco');
    precoBebida = precoBebida.innerHTML;
    precoBebida = Number(precoBebida);
    
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
    nomeSobremesa = botao.querySelector('.nome-produto');
    nomeSobremesa = nomeSobremesa.innerHTML;
    precoSobremesa = botao.querySelector('.preco');
    precoSobremesa = precoSobremesa.innerHTML;
    precoSobremesa = Number(precoSobremesa);
    
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
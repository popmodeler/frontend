import React from 'react';

function criarTextoAcao(constituinteOrigem, constituinteDestino, rotuloElementoBpmnMensagem) {
    return `${constituinteOrigem} deve interoperar com ${constituinteDestino} para ${rotuloElementoBpmnMensagem}`;
}

function criarTextoCondicaoInteroperabilidade(rotuloObjetoDados) {
    return `Existe um acordo para formalização da mensagem definido em: ${rotuloObjetoDados}`;
}

function criarTextoQuantidadeMensagensEnviadas(constituinteOrigem, constituinteDestino, quantidadeMensagensEnvio) {
    return `${constituinteOrigem} envia ${quantidadeMensagensEnvio} para ${constituinteDestino}`;
}

function criarTextoRestricaoTempoEnvioMensagem(rotuloEventoTempoEnvio) {
    return `O envio de mensagem será realizado durante ${rotuloEventoTempoEnvio}`;
}

function criarTextoOrigemDadosDuranteEnvio(rotuloNomeRepositorioLeitura) {
    return `Os dados são obtidos a partir de um repositório de dados: ${rotuloNomeRepositorioLeitura}`;
}

function criarTextoFalhaEnvioMensagem() {
    return `Caso ocorra uma falha durante a interoperabilidade, a transmissão da mensagem é interrompida e o tratamento de erro é executado`;
}

function criarTextoFluxoEnvioMensagemPrivado() {
    return `O envio da mensagem é realizado de modo independente`;
}

function criarTextoQuantidadeMensagensRecebidas(constituinteOrigem, constituinteDestino, quantidadeMensagensRecebimento) {
    return `${constituinteDestino} recebe ${quantidadeMensagensRecebimento} de ${constituinteOrigem}`;
}

function criarTextoRestricaoTempoRecebimentoMensagem(rotuloEventoTempoRecebimento) {
    return `O recebimento de mensagem será realizado durante ${rotuloEventoTempoRecebimento}`;
}

function criarTextoDestinoDadosDuranteRecebimento(rotuloNomeRepesitorioArmazenamento) {
    return `Os dados são armazenados em um repositório de dados: ${rotuloNomeRepesitorioArmazenamento}`;
}

function criarTextoFalhaRecebimentoMensagem() {
    return `Caso ocorra uma falha durante a interoperabilidade, o recebimento da mensagem é interrompido e o tratamento de erro é executado`;
}

function criarTextoFluxoRecebimentoMensagemPrivado() {
    return `O recebimento da mensagem é realizado de modo independente`;
}

function criarTextoRastreabilidade(tipoElementoOrigem, rotuloConstituinteOrigem, tipoElementoDestino, rotuloConstituinteDestinho) {
    return `${tipoElementoOrigem}(${constituinteOrigem})/${tipoElementoDestino}(${rotuloConstituinteDestinho})`;
}

function criarTextoCondicoesEnvio() {
    return ``;
}

function criarTextoCondicoesRecebimento() {
    return ``;
}
function criarTextoRequisitoDetalhado() {
    const textoAcao = criarTextoAcao();
    const textoCondicoesEnvio = criarTextoCondicoesEnvio();
    const textoCondicoesRecebimento = criarTextoCondicoesRecebimento();
    return `${textoAcao}, considerando para o envio que ${textoCondicoesEnvio}; e considerando para o recebimento que ${textoCondicoesRecebimento}.`;
}

export {
    criarTextoAcao,
    criarTextoCondicaoInteroperabilidade,
    criarTextoQuantidadeMensagensEnviadas,
    criarTextoRestricaoTempoEnvioMensagem,
    criarTextoOrigemDadosDuranteEnvio,
    criarTextoFalhaEnvioMensagem,
    criarTextoFluxoEnvioMensagemPrivado,
    criarTextoQuantidadeMensagensRecebidas,
    criarTextoRestricaoTempoRecebimentoMensagem,
    criarTextoDestinoDadosDuranteRecebimento,
    criarTextoFalhaRecebimentoMensagem,
    criarTextoFluxoRecebimentoMensagemPrivado,
    criarTextoRastreabilidade,
    criarTextoRequisitoDetalhado,
};
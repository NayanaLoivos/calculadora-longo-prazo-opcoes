


var buttonCalcular = document.getElementById("button-calcular");

buttonCalcular.addEventListener("click", function (event) {
    event.preventDefault();

    var taxa = parseFloat(document.getElementById("taxa").value);
    var meses = parseInt(document.getElementById("meses").value);
    var qtdAnos = document.getElementById("qtd-anos");
    var aporte = parseFloat(document.getElementById("aporte").value);
    var qtdLotes = document.getElementById("qtd-lotes");
    var precoAcaoUnitario = parseFloat(document.getElementById("preco-acao-unitario").value);
    var totalInvestidoEmOpcoes = document.getElementById("total-investido-em-opcoes");
    var totalInvestidoEmOpcoesValue = totalInvestidoEmOpcoes.value
    var capitalInicial = parseFloat(document.getElementById("total-dinheiro-para-investir").value);
    var valorFuturoRecebido = document.getElementById("valor-futuro-recebido");
    var rendaMensal = document.getElementById("renda-mensal");

//TODO: Deletar o campo "quantidade de lotes", e "Total investido em ações:"

    qtdAnos.innerText = `= ${Math.trunc(meses/12)} anos e ${meses%12} mes/meses`
    var valorLote = precoAcaoUnitario * 100
    qtdLotes.value = (capitalInicial - (capitalInicial % valorLote))/valorLote
    totalInvestidoEmOpcoesValue = qtdLotes.value * valorLote
    var rendimentoAtual = capitalInicial - totalInvestidoEmOpcoesValue

    for (var i = 0; i < meses; i++) {
        rendimentoAtual += (totalInvestidoEmOpcoesValue * taxa/100) + aporte

        if (rendimentoAtual >= valorLote) {
            var multiplicadorDeReinvestimento = (rendimentoAtual - (rendimentoAtual % valorLote))/valorLote
            var reinvestimento = multiplicadorDeReinvestimento * valorLote
            qtdLotes.value = parseInt(qtdLotes.value)+1
            rendimentoAtual -= reinvestimento
            totalInvestidoEmOpcoesValue += reinvestimento
        }
    }
    valorFuturoRecebido.value = totalInvestidoEmOpcoesValue + rendimentoAtual
    rendaMensal.value = totalInvestidoEmOpcoesValue * taxa/100
    totalInvestidoEmOpcoes.value = totalInvestidoEmOpcoesValue
})



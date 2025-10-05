// Atualiza a visualização da sequência numérica
function atualizarSequencia() {
    const ano = document.getElementById('ano').value;
    const inicio = document.getElementById('inicio').value;
    const fim = document.getElementById('fim').value;

    if (ano && inicio && fim && !isNaN(inicio) && !isNaN(fim)) {
        const prefixo = ano.slice(-2); // Pega os 2 últimos dígitos do ano
        const sequenciaInicio = `${prefixo}${String(inicio).padStart(4, '0')}`;
        const sequenciaFim = `${prefixo}${String(fim).padStart(4, '0')}`;
        document.getElementById('resultado-sequencia').textContent = `${sequenciaInicio} até ${sequenciaFim}`;
    } else {
        document.getElementById('resultado-sequencia').textContent = '';
    }
}

// Atualiza a sequência numérica em tempo real
document.getElementById('form-etiquetas').addEventListener('input', function () {
    atualizarSequencia();
});

// Envia os dados do formulário para o backend PHP
document.getElementById('form-etiquetas').addEventListener('submit', function (e) {
    e.preventDefault();
    const titulo = document.getElementById('texto-primeira-linha').value;
    const ano = parseInt(document.getElementById('ano').value);
    const inicio = parseInt(document.getElementById('inicio').value);
    const fim = parseInt(document.getElementById('fim').value);
    const outrosDados = document.getElementById('texto-ultima-linha').value;
    const copias = parseInt(document.getElementById('copias').value);

    // Valida os valores inseridos
    if (isNaN(ano) || isNaN(inicio) || isNaN(fim) || isNaN(copias)) {
        alert("Por favor, insira valores válidos para Ano, Número Inicial, Número Final e Cópias.");
        return;
    }

    // Cria o objeto com os dados do formulário
    const data = {
        texto_primeira_linha: titulo,
        ano: ano,
        inicio: inicio,
        fim: fim,
        texto_ultima_linha: outrosDados,
        copias: copias
    };

    // Envia os dados para o backend PHP
    fetch('backend.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(etiquetas => {
        PrintLabels(etiquetas);  // Abre a janela de impressão
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});

// Abre uma nova janela com as etiquetas prontas para impressão
function PrintLabels(etiquetas) {
    const popupWin = window.open('', '_blank', 'width=854,height=680,location=no,left=200px');
    popupWin.document.open();
    popupWin.document.write(`
        <html>
        <head>
            <title>Impressão de Etiquetas</title>
            <style>
                * {
                    box-sizing: border-box;
                }

                body {
                    padding: 0;
                    margin: 0;
                    font-family: Arial, sans-serif;
                    display: flex;
                    flex-direction: column;
                    gap: 0mm; /* Espaçamento entre as linhas de etiquetas */
                    justify-content: left !important;
                }

                .linha-etiquetas {
                    display: flex;
                    flex-wrap: nowrap;
                    gap: 0mm; /* Espaçamento entre as etiquetas na mesma linha */
                    margin-bottom: 0mm; /* Espaçamento entre as linhas */
                    page-break-inside: avoid; /* Evita que a linha seja cortada */
                }

                .etiqueta {
                    width: 26mm; /* Largura da etiqueta */
                    height: 15mm; /* Altura da etiqueta */
                    border: 1px solid #000;
                    padding: 2mm;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    font-size: 12px;
                    margin-left: 3mm; /* Espaçamento entre as etiquetas na mesma linha */
                    page-break-inside: avoid; /* Evita que a etiqueta seja cortada */
                }

                .etiqueta strong {
                    font-size: 12px;
                    margin-bottom: 1mm;
                }

                /* Estilo para impressão */
                @media print {
                    body {
                        display: flex;
                        flex-direction: column;
                        gap: 0mm !important; /* Espaçamento entre as linhas de etiquetas */
                        justify-content: left !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }

                    .linha-etiquetas {
                        display: flex;
                        flex-wrap: nowrap;
                        gap: 0mm !important; /* Espaçamento entre as etiquetas na mesma linha */
                        margin-bottom: 0mm !important; /* Espaçamento entre as linhas */
                        page-break-inside: avoid !important; /* Evita que a linha seja cortada */
                    }

                    .etiqueta {
                        width: 26mm !important;
                        height: 15mm !important;
                        border: 0px solid #000 !important;
                        padding: 2mm !important;
                        box-sizing: border-box !important;
                        display: flex !important;
                        flex-direction: column !important;
                        justify-content: center !important;
                        align-items: center !important;
                        text-align: center !important;
                        font-size: 12px !important;
                        margin-left: 3mm !important; /* Espaçamento entre as etiquetas na mesma linha */
                        page-break-inside: avoid !important; /* Evita que a etiqueta seja cortada */
                    }

                    .etiqueta strong {
                        font-size: 12px !important;
                        margin-bottom: 1mm !important;
                    }

                    /* Define o tamanho da página e margens ajustadas para impressão */
                    @page {
                        size: A4;
                        margin-top: 15mm !important; /* Margem superior */
                        margin-bottom: 10mm !important; /* Margem inferior */
                        margin-left: 1.5mm !important; /* Margem esquerda */
                        margin-right: 5mm !important; /* Margem direita */
                    }
                }
            </style>
        </head>
        <body onload="window.print()">
    `);

    // Organiza as etiquetas em linhas de 7 colunas
    const etiquetasPorLinha = 7;
    for (let i = 0; i < etiquetas.length; i += etiquetasPorLinha) {
        const linha = etiquetas.slice(i, i + etiquetasPorLinha);
        popupWin.document.write('<div class="linha-etiquetas">');
        linha.forEach(etiqueta => {
            popupWin.document.write(`
                <div class="etiqueta">
                    <strong>${etiqueta.texto_primeira_linha}</strong>
                    <strong>${etiqueta.numero}</strong>
                    <strong>${etiqueta.texto_ultima_linha}</strong>
                </div>
            `);
        });
        popupWin.document.write('</div>');
    }

    popupWin.document.write('</body></html>');
    popupWin.document.close();
}
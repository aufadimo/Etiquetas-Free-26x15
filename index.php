<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Etiquetas</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="./favicon.ico" type="image/x-icon">
</head>
<body>
    <div class="container">
        <h1>Sistema de Etiquetas</h1>
        
        <!--Abre o link do diagrama -->
         <div class="link-container">
        <a href="./diagrama.jpg" class="dimensao-link" target="_blank" onclick="abrirDiagrama(event)">
            <span class="tooltip-icon">Etiqueta 26x15 📐
                <span class="tooltip-text">Clique para visualizar as dimensões das etiquetas na folha</span>
            </span>
        </a>
        </div><!--Abre o link do diagrama -->

        <form id="form-etiquetas">
            <!-- Texto 1ª Linha -->
            <div class="form-group">
                <label for="texto-primeira-linha">Texto 1ª Linha:
                    <span class="tooltip-icon">ℹ️
                        <span class="tooltip-text">Insira o texto que aparecerá na primeira linha da etiqueta.</span>
                    </span>
                </label>
                <input type="text" id="texto-primeira-linha" value="Soroteca" required>
            </div>

            <!-- Ano, Número Inicial e Número Final -->
            <div class="form-row">
                <div class="form-group">
                    <label for="ano">Ano (2 dígitos):
                        <span class="tooltip-icon">ℹ️
                            <span class="tooltip-text">Insira os dois últimos dígitos do ano (ex: 25 para 2025).</span>
                        </span>
                    </label>
                    <input type="text" id="ano" maxlength="2" value="25" placeholder="Digite os 2 dígitos finais do ano" required>
                </div>
                <div class="form-group">
                    <label for="inicio">Número Inicial:
                        <span class="tooltip-icon">ℹ️
                            <span class="tooltip-text">Inicio da sequencia.</span>
                        </span>
                    </label>
                    <input type="number" id="inicio" value="" placeholder="Digite um numero" required>
                </div>
                <div class="form-group">
                    <label for="fim">Número Final:
                        <span class="tooltip-icon">ℹ️
                            <span class="tooltip-text">Final da sequencia.</span>
                        </span>
                    </label>
                    <input type="number" id="fim" value="" placeholder="Digite um numero" required>
                </div>
            </div>

            <!-- Resultado da Sequência e Cópias por etiqueta -->
            <div class="form-row">
                <div class="form-group">
                    <label>Resultado da Sequência:</label>
                    <div id="resultado-sequencia" class="resultado-sequencia"></div>
                </div>
                <div class="form-group">
                    <label for="copias">Cópias por etiqueta:
                        <span class="tooltip-icon">ℹ️
                            <span class="tooltip-text">Insira o número de cópias que deseja para cada etiqueta.</span>
                        </span>
                    </label>
                    <input type="number" id="copias" min="1" value="1" required>
                </div>
            </div>

            <!-- Texto Última Linha -->
            <div class="form-group">
                <label for="texto-ultima-linha">Texto Última Linha:
                    <span class="tooltip-icon">ℹ️
                        <span class="tooltip-text">Insira o texto que aparecerá na última linha da etiqueta.</span>
                    </span>
                </label>
                <input type="text" id="texto-ultima-linha" value="LEGH" required>
            </div>

            <!-- Botão -->
            <button type="submit">Gerar Etiquetas</button>
        </form>
    </div>
    <script src="script.js"></script>
    <script> 
    //para abrir o link do diagrama
    function abrirDiagrama(event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        const url = event.target.closest('a').href; // Pega o URL do diagrama
        window.open(url, '_blank', 'width=800,height=600'); // Abre em uma nova janela
    }
    </script>
    
</body>
</html>
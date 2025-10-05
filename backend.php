<?php
header('Content-Type: application/json');

// Função para gerar a sequência de números com base no ano e no intervalo
function gerar_sequencia($ano, $inicio, $fim) {
    $prefixo = substr($ano, -2); // Pega os 2 últimos dígitos do ano
    $sequencia = [];
    for ($i = $inicio; $i <= $fim; $i++) {
        $sequencia[] = $prefixo . str_pad($i, 4, '0', STR_PAD_LEFT);
    }
    return $sequencia;
}

// Função para gerar as etiquetas com base nos dados fornecidos
function gerar_etiquetas($texto_primeira_linha, $ano, $inicio, $fim, $texto_ultima_linha, $copias) {
    $sequencia = gerar_sequencia($ano, $inicio, $fim);
    $etiquetas = [];
    foreach ($sequencia as $num) {
        for ($i = 0; $i < $copias; $i++) {
            $etiquetas[] = [
                "texto_primeira_linha" => $texto_primeira_linha,
                "numero" => $num,
                "texto_ultima_linha" => $texto_ultima_linha
            ];
        }
    }
    return $etiquetas;
}

// Recebe os dados do formulário via POST
$data = json_decode(file_get_contents('php://input'), true);

$texto_primeira_linha = $data['texto_primeira_linha'];
$ano = $data['ano'];
$inicio = $data['inicio'];
$fim = $data['fim'];
$texto_ultima_linha = $data['texto_ultima_linha'];
$copias = $data['copias'];

// Gera as etiquetas
$etiquetas = gerar_etiquetas($texto_primeira_linha, $ano, $inicio, $fim, $texto_ultima_linha, $copias);

// Retorna as etiquetas em formato JSON
echo json_encode($etiquetas);
?>
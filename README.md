# Sistema de Etiquetas Acadêmico

## 📋 Sobre o Projeto

Este é um sistema web desenvolvido para fins acadêmicos que permite a geração e impressão de etiquetas sequenciais em formato A4. O sistema é ideal para organização de documentos, arquivamento e identificação de materiais.

## 🎯 Funcionalidades

- **Geração de sequências numéricas** com prefixo anual
- **Personalização** de textos nas etiquetas
- **Configuração de múltiplas cópias**
- **Visualização prévia** da sequência gerada
- **Layout otimizado** para impressão em papel A4

## 🌐 Navegador Recomendado

**Google Chrome** - Este sistema foi otimizado para funcionar melhor no Google Chrome devido à sua precisão nas configurações de impressão.

## 📐 Especificações Técnicas

### Dimensões das Etiquetas
- **Tamanho da etiqueta**: 26mm × 15mm
- **Papel**: A4 (210mm × 297mm)
- **Margens do papel**:
  - Superior: 15mm
  - Inferior: 10mm
  - Esquerda: 2mm
  - Direita: 5mm

### Layout da Página
- **Etiquetas por linha**: 7 unidades
- **Espaçamento entre colunas**: 3mm
- **Espaçamento entre linhas**: 0mm
- **Total de etiquetas por página**: 126 unidades

![Diagrama do Layout](https://github.com/user-attachments/assets/d48a1f40-d5d9-4f38-b453-a32e47da7be4)


## 🚀 Como Usar

### 1. Preenchimento do Formulário

![tela_de_preenchimento](https://github.com/user-attachments/assets/585fb762-d585-4d55-9742-4dd63dd86732)

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| **Texto da Primeira Linha** | Título principal da etiqueta | "PROTOCOLO" | (MINIMO DE 10 LETRAS)
| **Ano** | Ano de referência (2 últimos dígitos) | 2025 → "25" |
| **Número Inicial** | Início da sequência | 1 |
| **Número Final** | Fim da sequência | 100 |
| **Texto da Última Linha** | Informação adicional | "SETOR ADM" | (MINIMO DE 10 LETRAS)
| **Cópias** | Quantidade de cada etiqueta | 2 |

### 2. Visualização da Sequência

O sistema mostra automaticamente a sequência gerada:
- **Exemplo**: `250001 até 250100`

### 3. Geração e Impressão

1. Clique em **"Gerar Etiquetas"**
2. Uma nova janela abrirá com as etiquetas formatadas
3. **Configure a impressão no Google Chrome** (veja instruções abaixo)
4. Use papel A4 na orientação retrato

## ⚙️ Configuração de Impressão no Google Chrome

### Passos Cruciais para Impressão Correta:

1. **Na janela de impressão que se abriu**
2. **Configurações de impressão**:
   - **Impressora**: Sua impressora local
   - **Páginas**: Tudo
   - **Layout**: Retrato
   - **Papel**: A4
   - **Margens**: 
     - ✅ **Margens personalizadas**
     - Superior: 15mm
     - Inferior: 10mm  
     - Esquerda: 2mm
     - Direita: 5mm
   - **Opções**:
     - ✅ **Cabeçalhos e rodapés** → **DESABILITADO**
     - ✅ **Imprimir planos de fundo** → **DESABILITADO**

     ![visualização_de_Impressão](https://github.com/user-attachments/assets/25e1f2c1-9ee1-4f1f-9bb9-0692f2ee5e30)

### Verificações Importantes:
- ✅ **Tamanho real** (não ajustar à página)
- ✅ **Orientação retrato**
- ✅ **Margens personalizadas** conforme especificado
- ✅ **Cabeçalhos e rodapés desabilitados**
- ✅ **Imprimir planos de fundo desabilitados**

## 🛠️ Estrutura dos Arquivos

```plaintext
etiquetas-free/
├── index.php
├── backend.php
├── script.js
├── style.css
├── diagrama.jpg
└── functions.php
```

## 📦 Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: PHP 7.4+
- **Estilo**: CSS puro com design responsivo
- **Impressão**: CSS Media Queries para otimização

### Dicas de Impressão
1. **Use Google Chrome** para melhor compatibilidade
2. Verifique o nível de tinta/tôner
3. Faça um teste com 1-2 etiquetas primeiro
4. Use papel de qualidade para melhor resultado
5. **Configure margens personalizadas** conforme especificado


## 📞 Suporte

- Este é um projeto acadêmico desenvolvido para fins educacionais. Para dúvidas ou sugestões, entre em contato através do repositório do projeto.




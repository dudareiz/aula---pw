<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo da Velha em Javascript</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="'jogo">
        <h1>Jogo da Velha</h1>
        <div class="tabuleiro" id="tabuleiro">
                <div class="celula" data-celula> </div>
                <div class="celula" data-celula> </div>
                <div class="celula" data-celula> </div>
                <div class="celula" data-celula> </div>
                <div class="celula" data-celula> </div>
                <div class="celula" data-celula> </div>
                <div class="celula" data-celula> </div>
                <div class="celula" data-celula> </div>
                <div class="celula" data-celula> </div>
        </div>
        <p id=" statusJogo"></p>
        <button id="reiniciar">Reiniciar</button>
    </div>
    <script src="script.js"></script>
</body>
</html>

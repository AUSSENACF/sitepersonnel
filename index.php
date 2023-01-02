<?php 
require_once "./header/header.php";
?>
<!DOCTYPE html>
<html>
    <head>
        <?= $header_main?>
        <link href="./style/style.css" type="text/css" rel="stylesheet"/>
        
    </head>
    <body>
        <main class="game-container">
            <canvas class="game-canvas" width="800" height="600"></canvas>
        </main>
        
        <script src="./javascript/Overworld.js"></script>
        <script src="./javascript/GameObject.js"></script>
        <script src="./javascript/Sprite.js"></script>
        <script src="./javascript/init.js"></script>
    </body>
</html>
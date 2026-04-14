<!--Crea una página que genere 10 divs diferentes, cada div tendrá el fondo de un color generado aleatoriamente--->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $colores = ["green", "red", "pink", "blue", "black", "green", "brown", "gray", "yellow", "violet"];

        for($i = 1; $i <= 10; $i++){
            $color = $colores[array_rand($colores)];
            echo "<div style='background-color: $color;'>color $i </div>";
        }
    ?>
</body>
</html>
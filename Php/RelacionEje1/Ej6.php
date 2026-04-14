<!--Crea un modulo que reciba el radio de una circunferencia y te devuelva el área de la misma -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $radio = 20;
        $area = pi() * pow($radio, 2);
        echo "Radio de la circunferencia: " . $radio . "<br>";
        echo "Área de la circunferencia: " . $area;
    ?>
</body>
</html>
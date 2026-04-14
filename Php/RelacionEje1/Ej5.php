<!--Crea un modulo de PHP que reciba una cadena con espacios y te devuelva la cadena sin espacios-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $cadena = "H o la a todos";
        $sinEspacios = str_replace(" ", "", $cadena);

        echo "Texto original: " . $cadena . "<br>";
        echo "Texto sin espacios: " . $sinEspacios;
    ?>
</body>
</html>
<!--Crea una página que tenga un fondo de pantalla aleatorio, genera tres números
aleatorios (rojo, azul y verde), después estabñece el color del fondo de pantalla
con los valores elegidos.-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        //$colores = ["red", "blue", "green"];

        //$colorFondo = $colores[array_rand($colores)];

        //echo "<style>
        //    body {
        //        background-color: $colorFondo;
        //    }
        //</style>";

        $red=rand(0,255);
        $blue=rand(0,255);
        $green=rand(0,255);

        echo "<style>
            body {
                background-color: rgb($red, $blue, $green);
            }
        </style>";
    ?>
</body>
</html>
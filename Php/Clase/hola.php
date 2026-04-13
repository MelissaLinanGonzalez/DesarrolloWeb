<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        echo "Hola clase <br>";

        $ejemploVariable = "Cadena dentro de una variable";

        echo "La variable es: $ejemploVariable <br>";

        echo strlen($ejemploVariable). "<br>";

        echo str_replace("variable", "cambiado", $ejemploVariable);

        $var1 = 5;
        $var2 = "hola";

        //echo $var1 + $var2;

        $valor = 8; // posicion 800, por ejemplo
        $referencia = &$valor; // contiene la posición de memoria de la variable valor

        echo "<br>";
        echo "Contenido de la variable valor: ". $referencia;

        $referencia = 15;

        echo "<br>";
        echo "Contenido de la variable valor: ". $valor. " con la referencia: ". $referencia;

        $$variableDeVariable


    ?>
</body>
</html>
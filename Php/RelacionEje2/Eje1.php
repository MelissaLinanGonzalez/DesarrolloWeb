<!--Crea un formulario que lea una cadena de caracteres, después crea una función
para comprobar si la cadena es palíndromo (se lee igual en ambos sentidos, por
ejemplo, Ana o Acaso hubo búhos aca) o no-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST" action="">
        <label for="frase">Introduce una palabra o frase:</label><br><br>
        <input type="text" name="frase" id="frase" size="50" required placeholder="Ej: Acaso hubo búhos aca">
        <br><br>
        <input type="submit" value="Comprobar">
    </form>
    
    <?php

        function esPalindromo($cadena){
            $cadena = mb_strtolower($cadena, 'UTF-8');

            $tildes = ['á', 'é', 'í', 'ó', 'ú'];
            $vocales = ['a', 'e', 'i', 'o', 'u'];

            $cadena = str_replace($tildes, $vocales, $cadena);

            $cadenaLimpia = preg_replace('/[^a-z0-9]/', '', $cadena);

            $cadenaInvertida = strrev($cadenaLimpia);

            return $cadenaLimpia === $cadenaInvertida;

        }

        if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['frase'])){
            $fraseOriginal = trim($_POST['frase']);

            if(esPalindromo($fraseOriginal)){
                echo "<div class='resultado exito'> ¡Sí!<br>\"$fraseOriginal\" es un palíndromo.</div>";
            } else{
                echo "<div class='resultado error'> No.<br>\"$fraseOriginal\" no es un palíndromo.</div>";
            }
        }
    ?>
    
</body>
</html>
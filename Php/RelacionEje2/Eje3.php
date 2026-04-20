<!--Muestra un texto por pantalla, después crea un formulario que reciba una
palabra, crea una función que cuente cuántas veces aparece la palabra en el texto,
el texto es fijo y lo elige el alumno-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $textoFijo = "Tres tristes tigres tragan trigo en un trigal con varios tigres";

        function contarVeces($texto, $palabraBuscada){
            $textoLimpio = mb_strtolower($texto, 'UTF-8');
            $palabraLimpia = mb_strtolower($palabraBuscada, 'UTF-8');

            return substr_count($textoLimpio, $palabraLimpia);
        }

    ?>

    <p><strong>Texto actual:</strong></p>
    <div>
        <?=$textoFijo?>
    </div>

    <form method="POST" action="">
        <label for="palabra">¿Qué palabra quieres buscar?</label><br><br>
        <input type="text" name="palabra" id="palabra" required placeholder="Ej: tigres">
        <button type="submit">Contar apariciones</button>
    </form>

    <?php
        if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['palabra'])){
            $palabra = trim($_POST['palabra']);

            $veces = contarVeces($textoFijo, $palabra);

            echo "<div>";
            if($veces == 0){
                echo "La palabra '$palabra' no aparece";
            } elseif($veces == 1){
                echo "La palabra '$palabra' aparece UNA VEZ";
            } else{
                echo "La palabra '$palabra' aparece '$veces' veces";
            }
            echo "</div>";
        }
    ?>
</body>
</html>
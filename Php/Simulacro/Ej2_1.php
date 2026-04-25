<?php
    session_start();

    // Inicializamos tanto el número como los intentos (a 7)
    if(!isset($_SESSION['loteria']) || isset($_POST['reiniciar'])){
        $_SESSION['loteria'] = str_pad(random_int(0,99999), 5, "0", STR_PAD_LEFT);
        $_SESSION['intentos'] = 7; 
    }
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego Adivina el Número</title>
</head>
<body>

    <p><i>(El número secreto es: <?php echo $_SESSION['loteria']; ?>)</i></p>

    <?php
        $haGanado = false;
        $mensajeResultados = "";

        if(isset($_POST["adivinar"]) && isset($_POST['numero'])){
            $num_a = trim($_POST['numero']);
            $numeroGanador = $_SESSION['loteria'];
            $aciertosTotales = 0;

            if(strlen($num_a) != 5 || !is_numeric($num_a)){
                $mensajeResultados = "<p style='color:red;'>Debes introducir exactamente 5 números numéricos.</p>";
            } else {
                $_SESSION['intentos']--;

                $mensajeResultados .= "<h3>Resultados de tu jugada ($num_a):</h3><ul>";

                for($i = 0; $i < 5; $i++){
                    if($num_a[$i] == $numeroGanador[$i]){
                        $mensajeResultados .= "<li style='color:green;'>Posición " . ($i+1) . ": ¡Acertada! (Es el " . $num_a[$i] . ")</li>";
                        $aciertosTotales++;
                    } else{
                        $mensajeResultados .= "<li style='color:red;'>Posición " . ($i+1) . ": Incorrecta.</li>";
                    }
                }
                $mensajeResultados .= "</ul>";

                if($aciertosTotales == 5){
                    $haGanado = true;
                    $mensajeResultados .= "¡HAS ACERTADO!";
                } else {
                    if($_SESSION['intentos'] > 0){
                        $mensajeResultados .= "<p>Has tenido $aciertosTotales aciertos. Sigue intentándolo.</p>";
                    } else {
                        $mensajeResultados .= "Has agotado tus 7 intentos.";
                    }
                }
            }
        }
    ?>

    <h2>Intentos restantes: <?php echo $_SESSION['intentos']; ?> / 7</h2>

    <?php if(!$haGanado && $_SESSION['intentos'] > 0): ?>
        <form action="" method="POST">
            <label for="numero">Introduce el número de 5 dígitos</label>
            <input type="text" name="numero" maxlength="5" id="numero" required>
            <button type="submit" name="adivinar">Comprobar</button>
        </form>
    <?php endif; ?>

    <form action="" method="POST" style="margin-top: 10px;">
        <button type="submit" name="reiniciar">Generar nuevo número (Reiniciar)</button>
    </form>

    <hr>

    <?php
        echo $mensajeResultados;
    ?>
    
</body>
</html>
<?php
        session_start();

        if(!isset($_SESSION['loteria']) || isset($_POST['reiniciar'])){
            $_SESSION['loteria'] = str_pad(random_int(0,99999), 5, "0", STR_PAD_LEFT);
            
        }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <p><i>(El número secreto es: <?php echo $_SESSION['loteria']; ?>)</i></p>
    <form action="" method="POST">
        <label for="Numero">Introduce el número de 5 dígitos</label>
        <input type="text" name="numero" maxlength="5" id="numero">
        <button type="submit" name="adivinar">Comprobar</button>
    </form>

    <form action="" method="POST" style="margin-top: 10px;">
            <button type="submit" name="reiniciar">Generar nuevo número</button>
    </form>

    <?php
    
        if(isset($_POST["adivinar"]) && isset($_POST['numero'])){
            $num_a = trim($_POST['numero']);
            $numeroGanador = $_SESSION['loteria'];
            $aciertosTotales = 0;

            echo "Resultados:";

            if(strlen($num_a) != 5 || !is_numeric($num_a)){
                echo "Debes introducir exactamente 5 números";
            } else{
                for($i = 0; $i < 5; $i++){
                    if($num_a[$i] == $numeroGanador[$i]){
                        echo "<li class='acierto'>Posición " . ($i+1) . ": ¡Acertada! (Es el " . $num_a[$i] . ")</li>";
                        $aciertosTotales++;
                    } else{
                        echo "<li class='fallo'>Posición " . ($i+1) . ": Incorrecta. (Tú pusiste " . $num_a[$i] . ")</li>";
                    }
                }

                if($aciertosTotales == 5){
                    echo "HAS ACERTADO!";
                } else{
                    echo "Has tenido $aciertosTotales aciertos totales. Sigue intentándolo!";
                }
            }
        }
    
    ?>
    
</body>
</html>
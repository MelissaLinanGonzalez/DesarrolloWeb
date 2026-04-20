<!--Crea un programa que imprima por pantalla los números primos comprendidos
entre el 1 y el 100 (el 1 no cuenta) en una tabla. Debes generar un vector denominado
primos que los almacene. Los números primos han de obtenerse mediante algorítimca-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $primos = [];

        for($i = 2; $i <= 100; $i++){
            $esPrimo = true;

            for($j = 2; $j < $i; $j++){
                if($i % $j == 0){
                    $esPrimo = false;
                    break;
                }
            }

            if($esPrimo){
                $primos[] = $i;
            }
        }
    ?>

    <table>
        <tbody>
            <tr>
                <?php
                    $columnas = 5;
                    $contador = 0;

                    foreach($primos as $numero){
                        echo "<td>$numero</td>";
                        $contador++;

                        if($contador % $columnas == 0 && $contador < count($primos)){
                            echo "</tr><td>";
                        }
                    }
                ?>
            </tr>
        </tbody>
    </table>
</body>
</html>
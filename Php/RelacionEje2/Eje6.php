<!--Genera un vector con 20 números generados aleatoriamente, después muéstralo por
pantalla, por último crea una función que reciba un vector por argumentos y esta lo
devuelva ordenado de menor a mayor, por último muestra el vector ordenado.-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $numerosDesordenados = [];
        for ($i = 0; $i < 20; $i++) {
            $numerosDesordenados[] = random_int(1, 100);
        }
        function ordenarDeMenorAMayor($vector) {
            sort($vector);
            
            return $vector;
        }

        $numerosOrdenados = ordenarDeMenorAMayor($numerosDesordenados);
    ?>

    <div>
        <div>Vector Original (Desordenado):</div>
        <div>
            <?php
                foreach ($numerosDesordenados as $numero) {
                    echo "<span>$numero</span>, ";
                }
            ?>
        </div>
    </div>

    <div>
        <div>Vector Final (Ordenado de menor a mayor):</div>
        <div>
            <?php
                foreach ($numerosOrdenados as $numero) {
                    echo "<span>$numero</span>, ";
                }
            ?>
        </div>
    </div>
</body>
</html>
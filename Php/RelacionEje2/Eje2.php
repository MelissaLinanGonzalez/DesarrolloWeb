<!--Crea un formulario que reciba un número, a continuación, crea una función
recursiva que calcule el número de Fibonacci hasta dicha posición, la función
recibirá el número y un vector, en el vector se almacenaran los números de la
secuencia, después imprímelos-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST" action="">
        <label for="numero">¿Cuántos números de la secuencia quieres calcular?</label><br><br>
        <input type="number" name="numero" id="numero" min="1" required placeholder="Ej: 10">
        <button type="submit">Calcular</button>
    </form>

    <?php
        function calcularFibonacci($limite, &$vector){
            $elementosActuales = count($vector);

            if($elementosActuales >= $limite){
                return;
            }

            if($elementosActuales == 0){
                $vector[] = 0;
            } elseif($elementosActuales == 1){
                $vector[] = 1;
            } else{
                $vector[] = $vector[$elementosActuales - 1] + $vector[$elementosActuales - 2];
            }

            calcularFibonacci($limite, $vector);
        }

        if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['numero'])) {
        
        $posicionDeseada = intval($_POST['numero']);
        
        if ($posicionDeseada > 0) {
            $secuenciaFibo = [];
            
            calcularFibonacci($posicionDeseada, $secuenciaFibo);
            
            echo "<div class='resultado'>";
            echo "La secuencia de Fibonacci hasta la posición $posicionDeseada</span> es:<br><br>";
            echo implode(", ", $secuenciaFibo);
            echo "</div>";
        } else {
            echo "<p style='color: red;'>Por favor, introduce un número mayor que 0.</p>";
        }
    }
    ?>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        /*function factorialBoyss($num){
            if($num == 1){
                echo "Caso base <br>";
                return 1;
            } else{
                echo "Numero ". $num. " <br>";
                return $num*factorialBoyss($num - 1);
            }
        }*/

        function factorialBoyss($num){
            $acumulado = 0;
            if($num == 1){
                echo "Caso base <br>";
                return 1;
            } else{
                $acumulado = $num*factorialBoyss($num-1);
                echo "Numero ". $num. " y el acumulado es: ". $acumulado ." <br>";
                return $acumulado;
            }
        }

        echo "El factorial de 5 es: ". factorialBoyss(5);
    ?>
</body>
</html>
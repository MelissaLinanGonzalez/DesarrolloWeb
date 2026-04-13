<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

        

        function sumar($param1){

            global $paramGlobal;
            $paramGlobal=10;
            
            $resultado=$param1 + $paramGlobal;
            return $resultado;
        }

        echo "Hola ". sumar(8);
        echo $paramGlobal;

        
    ?>
</body>
</html>
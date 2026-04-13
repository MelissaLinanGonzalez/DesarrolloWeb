<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        function sumar($param1, $param2){
            $resultado=$param1 + $param2;
            return $resultado;
        }

        echo "Hola ". sumar(8, 9);

        /*
        $prueba="hola";
        function aaaa(){
            echo $prueba; //lo imprimira vacio
        }

        function bbbbb(){
            $prueba2=5;
        }

        echo $prueba2; //Dara un error porque la variable no esta definida
        */

        
    ?>
</body>
</html>
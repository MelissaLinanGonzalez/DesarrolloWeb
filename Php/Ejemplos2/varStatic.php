<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        function varStatic(){
            static $contador=0;
            echo "La variable estatica tiene como valor = $contador <br>";

            $contador++;
        }

        for($i=0; $i < 5 ; $i++){
            varStatic();
        }
    ?>
</body>
</html>
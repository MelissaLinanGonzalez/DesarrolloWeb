<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        function doble($num1){
            return $num1*2;
        }

        function resaltar($cadena){
            echo "<strong>". $cadena ."</strong>";
        }

        echo doble(8);
    ?>
    
</body>
</html>
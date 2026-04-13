<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 

        
        function cuentaAtras($cont){
            if($cont==0){
                return 0;
            }else{
                $aux=1+cuentaAtras($cont-1);
                echo "Recursiva: $aux <br>";
                return $aux;
            }
        }
        
        $recur=cuentaAtras(5);

        echo "La variable vale: $recur";

        
        function cuentaAtrasAlt($cont){
            if($cont!=0){
                $aux=1+cuentaAtras($cont-1);
                echo "Recursiva: $aux <br>";
                return $aux;
            }else{
                return 0;
            }
        }
        

        
        
       
    ?>
</body>
</html>
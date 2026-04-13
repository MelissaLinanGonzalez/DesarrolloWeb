<!--Descarga dos imágenes de internet, genera un número aleatorio entre 0 y 1,
dependiendo del número que se genere haz que se muestre una imagen u otra.--->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
       
        .imagen-simpson {
            width: 300px; 
            height: 300px; 
            object-fit: cover;
        }
    </style>
</head>
<body>
    <?php
        $numeroRandom = random_int(0,1);
        
        $nomImg1 = "Bart_Simpson.png";
        $nomImg2 = "Lisa_Simpson.jpg";

        $ruta = "Images/";

        if($numeroRandom == 1){
            echo '<img class="imagen-simpson" src="' . $ruta . $nomImg1 . '" alt="BartSimpson">';
        } else{
            echo '<img class="imagen-simpson" src="' . $ruta . $nomImg2 . '" alt="LisaSimpson">';
        }
    ?>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Array 1</h2>
    <?php 

        $arrayP[0]=1;
        $arrayP[1]=2;
        $arrayP[2]=3;
        $arrayP[3]=4;
        $arrayP[4]=5;

        //Lógica para definir la pestaña activa
        $tab = isset($_GET['tab']) ? $_GET['tab'] : 'Array_1';

        //Navegación (Enlaces)
        echo '<ul class="tabs">';
        echo '<li><a href="?tab=Array_1" class="'.($tab == 'Array_1' ? 'active' : '').'">Array 1 - Contar elemento</a></li>';
        echo '<li><a href="?tab=Array_2" class="'.($tab == 'Array_2' ? 'active' : '').'">Array 2 - Recorrer hacia adelante y pos. actual</a></li>';
        echo '<li><a href="?tab=Array_3" class="'.($tab == 'Array_3' ? 'active' : '').'">Array 3 - Recorrer hacia atras</a></li>';
        echo '</ul>';

        //Contenido
        echo '<div class="tab-content">';
        switch($tab){
            case 'Array_1':

                //Contar elementos de un array             

                echo count($arrayP);

                /*
                *  Hay que tener cuidado se se introducen valores por indice, si se salta algún indice cualquiera nos devolvera un error:
                    $arrayP[0]=1;
                    $arrayP[2]=2;
                    $arrayP[3]=3;
                    $arrayP[4]=4;
                    $arrayP[5]=5;
                * Nos devolveria un error porque tenemos un índice vacio ($array[1])
                */
                break;

            case 'Array_2':

                //Recorrer el array y posicion actual
                
                echo current($arrayP). "<br>";

                while(next($arrayP)!=false){
                    echo current($arrayP). "<br>";
                }
                
                reset($arrayP);
                echo current($arrayP). "<br>";

                break;

            case 'Array_3':

                //Recorrer el array en sentido inverso

                end($arrayP);

                echo current($arrayP). "<br>";

                while(prev($arrayP)!=false){
                    echo current($arrayP). "<br>";
                }

                break;
        }

        echo '</div>'; 

        
    ?>
</body>
</html>
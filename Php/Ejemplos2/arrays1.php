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

        //Lógica para definir la pestaña activa
        $tab = isset($_GET['tab']) ? $_GET['tab'] : 'Array_1';

        //Navegación (Enlaces)
        echo '<ul class="tabs">';
        echo '<li><a href="?tab=Array_1" class="'.($tab == 'Array_1' ? 'active' : '').'">Array 1 - Crear array 1</a></li>';
        echo '<li><a href="?tab=Array_2" class="'.($tab == 'Array_2' ? 'active' : '').'">Array 2 - Crear array 2</a></li>';
        echo '<li><a href="?tab=Array_3" class="'.($tab == 'Array_3' ? 'active' : '').'">Array 3 - Rellenar array 1</a></li>';
        echo '<li><a href="?tab=Array_4" class="'.($tab == 'Array_4' ? 'active' : '').'">Array 4 - Rellenar array 2</a></li>';
        echo '<li><a href="?tab=Array_5" class="'.($tab == 'Array_5' ? 'active' : '').'">Array 5 - Crear array asociativo 1</a></li>';
        echo '<li><a href="?tab=Array_6" class="'.($tab == 'Array_6' ? 'active' : '').'">Array 6 - Crear array asociativo 2</a></li>';
        echo '</ul>';

        //Contenido
        echo '<div class="tab-content">';
        switch($tab){
            case 'Array_1':

                //Crear Array 1
                //Declaramos el indice en el que se introduce cada elementos

                $arrayP[0]=1;
                $arrayP[1]=2;
                $arrayP[2]=3;
                $arrayP[3]=4;
                $arrayP[4]=5;

                foreach ($arrayP as $i){
                    echo $i. "<br>";
                }

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

                //Crear Array 2
                /* Si no indicamos en que posición va cada elemento, automaticamente se ejecutara la función push
                * y se introduce el valor en la última posición
                */

                $arrayP2[]=1;
                $arrayP2[]=2;
                $arrayP2[]=3;
                $arrayP2[]=4;
                $arrayP2[]=5;

                foreach ($arrayP2 as $i){
                    echo $i. "<br>";
                }
                
                break;

            case 'Array_3':

                //Rellenar arrays 1
                // Vamos a crear un nuevo array y a rellenarlo por indices

                $arrayP3;

                for ($i=0;$i<10;$i++){
                    $arrayP3[$i]=($i+1)*10;
                }
                
                foreach ($arrayP3 as $i){
                    echo $i. "<br>";
                }

                break;

            case 'Array_4':

                //Rellenar arrays 2
                // Vamos a crear un nuevo array y a rellenarlo por indices

                $arrayP4;

                for ($i=0;$i<10;$i++){
                    $arrayP4[]=($i+1)*10;
                }
                
                foreach ($arrayP4 as $i){
                    echo $i. "<br>";
                }

                break;

            case 'Array_5':

                //Crear arrays asociativo 1
                // Vamos a crear un nuevo array asociativo

                $arrayP5["Juan"]=6;
                $arrayP5["Jaime"]=10;
                $arrayP5["Melisa"]=9;
                $arrayP5["Jose"]=8;
                $arrayP5["Ester"]=8;
                
                foreach ($arrayP5 as $i=>$contenido){
                    echo "$i nota $contenido <br>";
                }

                break;

            case 'Array_6':

                //Crear arrays asociativo 2
                // Vamos a crear un nuevo array asociativo

                $arrayP6=array("Juan"=>6,"Jaime"=>10,"Melisa"=>9,"Jose"=>8,"Ester"=>8,"Pedro");
                                
                foreach ($arrayP6 as $i=>$contenido){
                    echo "$i nota $contenido <br>";
                }

                break;
        }

        echo '</div>'; 

        
    ?>
</body>
</html>
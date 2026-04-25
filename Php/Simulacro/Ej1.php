<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validador de DNI</title>
</head>
<body>
    <div>
        <form action="" method="POST">
            <label for="nombre">Nombre y apellidos:</label>
            <input type="text" name="nombre" id="nombre" required>

            <label for="telefono">Teléfono:</label>
            <input type="text" name="telefono" id="telefono" placeholder="Ej: 600123456 o +34 600123456" required>

            <label for="numDNI">Introduce el DNI:</label>
            <input type="text" name="DNI" id="numDNI" placeholder="Ej: 12345678Z" required>

            <button type="submit" name="btnValidar">Comprobar Datos</button>
        </form>
    </div>

    <?php
        $letras = array('T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E');
        
        if(isset($_POST["btnValidar"])){
            $nombre = trim($_POST["nombre"]);
            $telefono = trim($_POST["telefono"]);
            $dni = strtoupper(trim($_POST["DNI"])); 
            

            $esNueveCifras = preg_match('/^[0-9]{9}$/', $telefono);
            $esConPrefijo = preg_match('/^\+[0-9]{2} [0-9]{9}$/', $telefono);

            $errores = []; // Array para ir guardando los fallos

            // para validar que el nombre no contenga números
            if(preg_match('/[0-9]/', $nombre)){
                $errores[] = "El nombre y apellidos no pueden contener números.";
            }

            // para validar que el número de telefóno son 9 dígitos o +XX y 9 dígitos
            $esNueveCifras = preg_match('/^[0-9]{9}$/', $telefono);
            $esConPrefijo = preg_match('/^\+[0-9]{2} [0-9]{9}$/', $telefono);

            if(!$esNueveCifras && !$esConPrefijo){
                $errores[] = "El teléfono debe tener 9 cifras (ej: 600123456) o formato internacional (ej: +34 600123456).";
            }

            // validación para que el dni tenga 8 números y una letra y que en total sean 9 caracteres
            if(strlen($dni) == 9){
                $letra_DNI = $dni[-1];
                $numeros_DNI = substr($dni, 0, 8); 

                // Comprobamos que sean 8 números y 1 letra
                if(!is_numeric($numeros_DNI) || !ctype_alpha($letra_DNI)){
                    $errores[] = "El formato del DNI debe ser de 8 números seguidos de 1 letra.";
                } else {
                    $modulo = ((int)$numeros_DNI) % 23;
                    
                    if($letra_DNI != $letras[$modulo]){
                        $errores[] = "La letra del DNI es incorrecta. Debería ser la '" . $letras[$modulo] . "'.";
                    }
                }
            } else {
                $errores[] = "El DNI debe tener exactamente 9 caracteres.";
            }

            if(empty($errores)){
                echo "<div class='exito'>";
                echo "<strong>¡Datos validados correctamente!</strong><br><br>";
                echo "<strong>Nombre:</strong> $nombre <br>";
                echo "<strong>Teléfono:</strong> $telefono <br>";
                echo "<strong>DNI:</strong> $dni";
                echo "</div>";
            } else {
                echo "<div class='error-caja'>";
                echo "<strong>Se han encontrado errores:</strong><ul>";
                foreach($errores as $error){
                    echo "<li>$error</li>";
                }
                echo "</ul></div>";
            }
        }
    ?>
</body>
</html>
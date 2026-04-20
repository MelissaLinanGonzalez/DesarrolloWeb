<!--Crea un array con diferentes elementos, después crea un formulario que introduzca
el nombre de uno de los elementos y este se elimine del vector-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $frutas = ["Manzana", "Pera", "Plátano", "Sandía", "Kiwi"];

    $mensaje = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST['elemento'])) {
        $aEliminar = trim($_POST['elemento']);
        $indice = array_search($aEliminar, $frutas);

        if ($indice !== false) {
            unset($frutas[$indice]);$frutas = array_values($frutas); 
            $mensaje = "<p>'$aEliminar' ha sido eliminado correctamente.</p>";
        } else {
            $mensaje = "<p>El elemento '$aEliminar' no existe en el array.</p>";
        }
    }
    ?>

    <p>Elementos actuales en el vector:</p>
    <div class="array-visual">
        <?php 
            if (empty($frutas)) {
                echo "<i>El array está vacío</i>";
            } else {
                echo implode(" | ", $frutas); 
            }
        ?>
    </div>

    <form method="POST" action="">
        <label for="elemento">Escribe el nombre del elemento a borrar:</label><br><br>
        <input type="text" name="elemento" id="elemento" required placeholder="Ej: Pera">
        <button type="submit">Eliminar</button>
    </form>

    <?php echo $mensaje; ?>
</body>
</html>
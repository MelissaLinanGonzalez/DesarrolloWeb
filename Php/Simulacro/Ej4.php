<?php
    // 1. Iniciamos la sesión ANTES de cualquier código HTML
    session_start();

    // 2. Solo creamos el array inicial si NO existe ya en la sesión
    if (!isset($_SESSION['productos'])) {
        $_SESSION['productos'] = array("PC" => 2200, "Raton" => 2, "Monitor" => 80);
    }
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestión de Productos</title>
</head>
<body>
    
    <?php 
        $tab = isset($_GET['tab']) ? $_GET['tab'] : 'consulta';

        echo '<a href="?tab=consulta">Consulta</a> | ';
        echo '<a href="?tab=borrado">Borrado</a> | ';
        echo '<a href="?tab=insertar">Insertar</a>';
        
        
        echo '<div>';
        switch($tab){
            
            case 'consulta':
            ?>
                <form action="" method="POST">
                    <label for="producto">Introduce el producto a consultar:</label>
                    <input type="text" name="producto">
                    <input type="submit" value="Consultar">
                </form>
                <br>
            <?php
                if(isset($_POST["producto"])){
                    $nombre = $_POST["producto"];
                    
                    if(array_key_exists($nombre, $_SESSION['productos'])){
                        echo "<strong>El producto " . $nombre . " tiene un precio de: " . $_SESSION['productos'][$nombre] . "€</strong>";
                    } else{
                        echo "El producto '$nombre' no existe.";
                    }
                }
                
                echo "<hr><i>Inventario actual:</i><br>";
                var_dump($_SESSION['productos']);
                break;

            case 'borrado':
            ?>
                <form action="" method="POST">
                    <label for="producto">Introduce el producto a borrar:</label>
                    <input type="text" name="producto">
                    <input type="submit" value="Borrar">
                 </form>
                 <br>
            <?php
                if(isset($_POST["producto"])){
                    $nombre = $_POST["producto"];
                    
                    if(array_key_exists($nombre, $_SESSION['productos'])){
                        unset($_SESSION['productos'][$nombre]);
                        echo "<strong>¡El producto '$nombre' ha sido borrado correctamente!</strong>";
                    } else{
                        echo "El producto '$nombre' no existe y no se puede borrar.";
                    }
                }                
                break;

            case 'insertar':
            ?>
                <form action="" method="POST">
                    <label for="productoNuevo">Introduce el nombre del producto:</label>
                    <input type="text" name="productoNuevo" required><br><br>
                    
                    <label for="precio">Introduce el precio del producto:</label>
                    <input type="number" name="precio" required><br><br>
                    
                    <input type="submit" value="Insertar">
                 </form>
                 <br>
            <?php
                if(isset($_POST["productoNuevo"]) && isset($_POST["precio"])){
                    $nuevoNombre = $_POST["productoNuevo"];
                    $nuevoPrecio = $_POST["precio"];
                    
                    $_SESSION['productos'][$nuevoNombre] = $nuevoPrecio;
                    echo "<strong>¡Producto '$nuevoNombre' insertado con éxito!</strong>";
                }
                break;
        }

        echo '</div>';
    ?>
</body>
</html>
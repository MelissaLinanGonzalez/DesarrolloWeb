<!--Crea una página que implrima desde un módulo de PHP una tabla, cuyo contenido
sea la tabla de multiplicar de un número, tiene que tener 3 columnas y 10 filas
(del 1 al 10)-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table { border-collapse: collapse; width: 50%; margin: 20px 0; }
        th, td { border: 1px solid #333; padding: 10px; text-align: center; }
        th { background-color: #f4f4f4; }
    </style>
</head>
<body>
    <?php
        $numeAMultiplicar = random_int(1,10);
        echo "Tabla de multiplicar de " . $numeAMultiplicar;
    ?>
    <table>
        <thead>
            <tr>
                <th>Número</th>
                <th>Multiplicador</th>
                <th>Resultado</th>
            </tr>
        </thead>
        <tbody>
    <?php
        for($i = 0; $i<=10; $i++){
            
            echo "
                <tr>
                    <td>$numeAMultiplicar</td>
                    <td>x $i</td>
                    <td>" . ($i * $numeAMultiplicar) . "</td>
                </tr>";
        }
    ?>
        </tbody>
    </table>
</body>
</html>
<!--Crea un modulo PHP que, dependiendo del día de la semana, imprima tu calendario
(La opción default imprimirá todos los días de la semana)-->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Horario Semanal</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        table {
            border-collapse: collapse; /* Une los bordes dobles en una sola línea */
            width: 100%; /* Hace que la tabla ocupe todo el ancho disponible */
            margin-top: 10px;
            margin-bottom: 30px;
        }
        th, td {
            border: 2px solid #333; /* Añade un borde negro a cada celda */
            padding: 10px; /* Da espacio para que el texto no se pegue a los bordes */
            text-align: center; /* Centra el texto */
        }
        /* Opcional: Le da un color de fondo a la primera fila (las horas) */
        tr:first-child {
            background-color: #f4f4f4;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <?php
        $seleccionado = "jueves";

        switch(strtolower($seleccionado)){
            case 'lunes':
                echo "Horario de Lunes";
                echo "<table>
                    <tr>
                        <td>8:30 - 9:30</td>
                        <td>9:30 - 10:30</td>
                        <td>10:30 - 11:30</td>
                        <td>11:30 - 12:00</td>
                        <td>12:00 - 13:00</td>
                        <td>13:00 - 14:00</td>
                        <td>14:00 - 15:00</td>
                    </tr>
                    <tr>
                        <td>SGE</td>
                        <td>AaD</td>
                        <td>OPT</td>
                        <td>RECREO</td>
                        <td>DIN</td>
                        <td>PMD</td>
                        <td>PMD</td>
                    </tr>
                </table>";
                break;

            case 'martes':
                echo "Horario de Martes";
                echo "<table>
                    <tr>
                        <td>8:30 - 9:30</td>
                        <td>9:30 - 10:30</td>
                        <td>10:30 - 11:30</td>
                        <td>11:30 - 12:00</td>
                        <td>12:00 - 13:00</td>
                        <td>13:00 - 14:00</td>
                        <td>14:00 - 15:00</td>
                    </tr>
                    <tr>
                        <td>SGE</td>
                        <td>SGE</td>
                        <td>PSP</td>
                        <td>RECREO</td>
                        <td>PSP</td>
                        <td>DIN</td>
                        <td>DIN</td>
                    </tr>
                </table>";
                break;

            case 'miercoles':
                echo "Horario de Miercoles";
                echo "<table>
                    <tr>
                        <td>8:30 - 9:30</td>
                        <td>9:30 - 10:30</td>
                        <td>10:30 - 11:30</td>
                        <td>11:30 - 12:00</td>
                        <td>12:00 - 13:00</td>
                        <td>13:00 - 14:00</td>
                        <td>14:00 - 15:00</td>
                    </tr>
                    <tr>
                        <td>DIN</td>
                        <td>DIN</td>
                        <td>OPT</td>
                        <td>RECREO</td>
                        <td>OPT</td>
                        <td>AaD</td>
                        <td>AaD</td>
                    </tr>
                </table>";
                break;

            case 'jueves':
                echo "Horario de Jueves";
                echo "<table>
                    <tr>
                        <td>8:30 - 9:30</td>
                        <td>9:30 - 10:30</td>
                        <td>10:30 - 11:30</td>
                        <td>11:30 - 12:00</td>
                        <td>12:00 - 13:00</td>
                        <td>13:00 - 14:00</td>
                        <td>14:00 - 15:00</td>
                    </tr>
                    <tr>
                        <td>PMD</td>
                        <td>ING</td>
                        <td>DIN</td>
                        <td>RECREO</td>
                        <td>PSP</td>
                        <td>LIBRE</td>
                        <td>LIBRE</td>
                    </tr>
                </table>";
                break;

            case 'viernes':
                echo "Horario de Viernes";
                echo "<table>
                    <tr>
                        <td>8:30 - 9:30</td>
                        <td>9:30 - 10:30</td>
                        <td>10:30 - 11:30</td>
                        <td>11:30 - 12:00</td>
                        <td>12:00 - 13:00</td>
                        <td>13:00 - 14:00</td>
                        <td>14:00 - 15:00</td>
                    </tr>
                    <tr>
                        <td>SGE</td>
                        <td>PRO</td>
                        <td>PRO</td>
                        <td>RECREO</td>
                        <td>LIBRE</td>
                        <td>ING</td>
                        <td>AaD</td>
                    </tr>
                </table>";
                break;
        }
    ?>
</body>
</html>
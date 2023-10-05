<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="iso.php" method="get">
        <label for="iso">Isograma:</label>
        <input type="text" name="iso" id="iso"  ><br>


        <button type="submit">Calcular</button>
    </form>


    <?php

        $palabra = $_GET['iso'];
        $contador = 0;



        for ($i=0; $i < (mb_strlen($palabra) ); $i++) {
            $letra = mb_substr($palabra, $i, 1);

                if (mb_substr_count($palabra, $letra) == 1) {

                    $contador += 1;

                }  else {

                }
        }
        if ($contador == (mb_strlen($palabra))) {
            ?>
            Es <strong> un isograma</strong>
            <?php
        } else {
            ?>
            No es <strong> un isograma</strong>
            <?php
        }






    ?>
</body>
</html>

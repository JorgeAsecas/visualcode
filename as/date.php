<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action="iso.php" method="get">
        <label for="edad">edad:</label>
        <input type="text" name="edad" id="edad"  ><br>
        <select name="dias" id="dias">
        <?php
        $dias = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ];
        foreach ( $dias as $oper):
            ?>
                <option value="<?= $oper ?>" <?= selected($oper, $dias) ?>><?= $oper ?></option>;

            <?php
            endforeach;
        ?>

        </select><br>

        <button type="submit">Calcular</button>
</form>

<?php
    $palabra = $_GET['edad'];


?>


</body>
</html>

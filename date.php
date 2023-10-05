<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php
    function selected($option, $dias)
{
    return $option == $dias ? 'selected' : '';
}
    $dia1 = isset($_GET["dias"]) ? trim($_GET["dias"]) : null;
    $mes1 = isset($_GET["mes"]) ? trim($_GET["mes"]) : null;
    $anyo1 = isset($_GET["anyo"]) ? trim($_GET["anyo"]) : null;
    $anyo_actual = (int) date('Y');
    const MESES = [
        1 => 'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre',
    ];
?>

<form action="date.php" method="get">
        <label for="edad">edad:</label>
        <input type="text" name="edad" id="edad"  ><br>
        <select name="dias" id="dias">

        <?php
            $dias = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ];
            foreach ( $dias as $oper1):
        ?>

        <option value="<?= $oper1 ?>" <?= selected($oper1, $dia1) ?>><?= $oper1 ?></option>;

        <?php
            endforeach;
        ?>

        </select><br>
        <select name="mes" id="mes">

        <?php

            foreach ( $mes as $oper2):
        ?>

        <option value="<?= $oper2 ?>" <?= selected($oper2, $mes1) ?>><?= $oper2 ?></option>;

        <?php
            endforeach;
        ?>

        </select><br>

        <select name="anyo" id="anyo">
            <?php for ($i = $anyo_actual; $i >= $anyo_actual - 50; $i--): ?>
                <option value="<?= $i ?>"<?= selected($i, $anyo1) ?>><?= $i ?></option>
            <?php endfor ?>
        </select>
        <button type="submit">Calcular</button>

</form>

<?php



?>


</body>
</html>

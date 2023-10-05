<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $pdo = new PDO('pgsql:host=localhost;dbname=empresa', 'empresa', 'empresa');
    $sent = $pdo->query('SELECT * FROM departamentos');


    ?>
    <table border = "1">
        <thead>
            <th>codigo</th>
            <th>denominacion</th>
            <th>localidad</th>

        </thead>
        <tbody>
        <?php foreach ($sent as $fila1) : ?>
        <tr>
            <td><?= $fila1['codigo'] ?> </td>
            <td><?= $fila1['denominacion'] ?> </td>
            <td><?= $fila1['localidad'] ?> </td>
        </tr>
        <?php endforeach ?>
        </tbody>
    </table>
</body>
</html>

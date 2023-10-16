<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Borrar departamento</title>
</head>
<body>
    <?php
    $id = isset($_GET['id']) ? trim($_GET['id']) : null;
    if (!isset($id)) {
        header('Location: departamentos.php');
        return;
    }


    require 'auxiliar.php';

    $id = isset($_GET['id']) ? trim($_GET['id']) : null;

    if (!isset($id)) {
        header('Location: departamentos.php');
        return;
    }

    if (!ctype_digit($id)) {
        header('Location: departamentos.php');
        return;
    }



    $pdo = conectar();
    $pdo->beginTransaction();
    $sent = $pdo->prepare('SELECT * FROM departamentos WHERE id = :id FOR UPDATE');
    $sent->execute([':id' => $id]);

    if (buscar_departamento_por_id($id, $pdo) === false) {
        header('Location: departamentos.php');
        return;
    }

    $sent = $pdo->prepare('DELETE FROM departamentos WHERE id = :id');
    $sent->execute([':id' => $id]);

    $pdo->commit();

    header('Location: departamentos.php');




    ?>
    <?= $id ?>
    <p>¿Está seguro de que quiere borrar ese departamento?</p>
    <form action="" method="get">
        <button type="submit">Si</button>
    </form>
</body>
</html>

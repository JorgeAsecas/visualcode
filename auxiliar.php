<?php
/**
 * @author Jorge Ibáñez <jorge.ibanez.1997@gmail.com>
 * @copyright Copyright (c) 2023 Jorge Ibáñez
 * @license https://www.gnu.org/licenses/gpl-3.0.html#license-text
 */

const OPE = ['+', '-', '*', '/'];


/**
 * calcula el resultado de la operacion
 *
 * @param  int|float $op1 El primer operando
 * @param  int|float $op2 El segundo operando
 * @param  int|float $op El operador
 * @return int|float El resultado
 */
function calcular(int|float $op1, int|float $op2, string $op): int|float
{
    switch ($op) {
        case '+':
            $res = $op1 + $op2;
            break;
        case '-':
            $res = $op1 - $op2;
            break;
        case '*':
            $res = $op1 * $op2;
            break;
        case '/':
            $res = $op1 / $op2;
            break;
    }

    return $res;
}

/**
 * mostrar_errores
 *
 * @param  array $errores
 * @return void
 */
function mostrar_errores(array $errores): void
{
    if (!empty($errores)) { ?>
        <ul>
        <?php foreach ($errores as $error): ?>
            <li><?= $error ?></li>
        <?php endforeach ?>
        </ul>
        <?php
    }
}

function comprobar_op1($op1, &$errores)
{
    if (!is_numeric($op1)) {
        $errores[] = 'El primer operando es incorrecto.';
    }
}

function comprobar_op2($op2, &$errores)
{
    if (!is_numeric($op2)) {
        $errores[] = 'El segundo operando es incorrecto.';
    }
}

function comprobar_op($op, &$errores)
{
    if (!in_array($op, ['+', '-', '*', '/'])) {
        $errores[] = 'La operación es incorrecta.';
    }
}

function comprobar_division_cero($op2, $op, &$errores)
{
    if ($op2 == 0 && $op == '/') {
        $errores[] = 'No se puede dividir entre cero.';
    }
}

function mostrar_resultado($res)
{
    ?>
    El <strong>resultado</strong> es <strong><?= $res ?></strong>
    <?php
}

function obtener_get($par)
{
    return isset($_POST[$par]) ? trim($_POST[$par]) : null;
}

function selected($option, $op)
{
    return $option == $op ? 'selected' : '';
}

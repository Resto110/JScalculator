<?php
session_start();

//Check if "expression_history" isset
if (!isset($_SESSION['expression_history'])) {
    // !isset => init new array
    $_SESSION['expression_history'] = [];
}

if (isset($_GET['expression']) && isset($_GET['result'])) {
    $expression = $_GET['expression'];
    $result = $_GET['result'];

    // new entry in the history
    $_SESSION['expression_history'][] = [
        'expression' => $expression,
        'result' => $result,
        'dateTime' => date('Y-m-d H:i:s')
    ];
}

?>
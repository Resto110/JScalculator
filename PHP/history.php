<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width-device-width, initial-scale=1.0">
    <title>History</title>
    <style>

    </style>
</head>

<body>
    <h2>Expression History</h2>

    <ul>
        <?php foreach ($_SESSION['expression_history'] as $entry): ?>
            <li>
                <?php echo "{$entry['expression']} = {$entry['result']} ({$entry['dateTime']})"; ?>
            </li>
        <?php endforeach; ?>
    </ul>
</body>

</html>
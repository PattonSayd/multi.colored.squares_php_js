<?php
define('VG_ACCESS', true);

if (!empty($_POST['id'])) {
    $id = $_POST['id'];
    deleteSquare($id);
}else {
    header('Location: ../');
}

function deleteSquare($id)
{
    require('database.php');

    $query =  mysqli_query($conn, "DELETE FROM generate_squares WHERE square_id=('{$id}')");

    if (!$query) {
        exit(json_encode(['error' => 'Error in SLQ request.']));
    }

    exit(json_encode(['success' => 'Square delete']));
} ?>
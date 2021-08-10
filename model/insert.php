<?php
define('VG_ACCESS', true);

if(!empty($_POST['id'])){
    $id = $_POST['id'];
    insertSquare($id);
}else {
    header('Location: ../');
}

function insertSquare($id){
    require('database.php');

    $query =  mysqli_query($conn, "INSERT INTO  generate_squares (square_id) VALUE ('{$id}')");

    if (!$query) {
        exit(json_encode(['error' => 'Error in SLQ request.']));
    }

    exit(json_encode(['success' => 'Square add']));

}

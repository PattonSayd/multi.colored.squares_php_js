 <?php
    defined('VG_ACCESS') or header('Location: ../');

    $conn = @new mysqli("localhost", "root", "", "document");

    if ($conn->connect_error) {
        exit(json_encode(['error' => 'Error connecting to database']));
    }

?>